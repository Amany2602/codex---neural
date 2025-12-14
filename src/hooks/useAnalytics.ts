"use client";

import { sendGAEvent } from "@next/third-parties/google";

type EventName =
    | "boot_complete"
    | "scroll_engage"
    | "module_view"
    | "click_cta"
    | "form_start"
    | "form_submit"
    | "nav_click";

interface AnalyticsEvent {
    action: EventName;
    category: string;
    label?: string;
    value?: number;
}

export function useAnalytics() {
    const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
        if (typeof window !== "undefined" && window.gtag) {
            sendGAEvent("event", action, {
                event_category: category,
                event_label: label,
                value: value,
            });
            // console.log(`[Analytics] ${action}`, { category, label, value }); // Debug
        }
    };

    return { trackEvent };
}
