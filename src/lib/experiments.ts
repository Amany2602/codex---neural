export type ExperimentId = 'hero_cta_text' | 'scroll_physics';
export type Variant = 'A' | 'B';

interface ExperimentConfig {
    id: ExperimentId;
    variants: Variant[];
}

const EXPERIMENTS: ExperimentConfig[] = [
    { id: 'hero_cta_text', variants: ['A', 'B'] },
    { id: 'scroll_physics', variants: ['A', 'B'] },
];

const STORAGE_KEY_PREFIX = 'exp_';
const CONVERSION_KEY = 'codex_conversions';

export function getAssignedVariant(experimentId: ExperimentId): Variant {
    if (typeof window === 'undefined') return 'A'; // SSR fallback

    const storageKey = `${STORAGE_KEY_PREFIX}${experimentId}`;
    const stored = sessionStorage.getItem(storageKey);

    if (stored === 'A' || stored === 'B') return stored as Variant;

    // Self-Optimization Logic: Check if one variant has a better history
    const history = getConversionHistory(experimentId);
    let assigned: Variant;

    // If 'B' has significantly more conversions, bias towards 'B'
    // This is a simplified client-side optimization loop
    if (history.B > history.A + 2) {
        assigned = Math.random() < 0.8 ? 'B' : 'A'; // 80% chance to pick winner
    } else if (history.A > history.B + 2) {
        assigned = Math.random() < 0.8 ? 'A' : 'B';
    } else {
        assigned = Math.random() < 0.5 ? 'A' : 'B'; // 50/50
    }

    sessionStorage.setItem(storageKey, assigned);
    return assigned;
}

export function recordConversion() {
    if (typeof window === 'undefined') return;

    // Outcome: The current active variants 'won'
    EXPERIMENTS.forEach(exp => {
        const variant = sessionStorage.getItem(`${STORAGE_KEY_PREFIX}${exp.id}`) as Variant | null;
        if (variant) {
            updateConversionHistory(exp.id, variant);
        }
    });
}

function getConversionHistory(id: ExperimentId): { A: number, B: number } {
    try {
        const all = JSON.parse(localStorage.getItem(CONVERSION_KEY) || '{}');
        return all[id] || { A: 0, B: 0 };
    } catch {
        return { A: 0, B: 0 };
    }
}

function updateConversionHistory(id: ExperimentId, variant: Variant) {
    try {
        const all = JSON.parse(localStorage.getItem(CONVERSION_KEY) || '{}');
        if (!all[id]) all[id] = { A: 0, B: 0 };
        all[id][variant] += 1;
        localStorage.setItem(CONVERSION_KEY, JSON.stringify(all));
    } catch (e) {
        console.error("Failed to update conversion history", e);
    }
}
