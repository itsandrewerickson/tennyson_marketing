"use client";

import Script from "next/script";

export default function CRMForm() {
    return (
        <section className="bg-[#2D3436] section-padding" id="lead-capture">
            <div className="max-w-2xl mx-auto text-center h-[500px]">
                <iframe
                    src="https://link.vestorcrm.com/widget/form/LdaCPNYcSHuxuehlYyEv"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "3px",
                    }}
                    id="inline-LdaCPNYcSHuxuehlYyEv"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Tennyson Purchase Interest"
                    data-height="466"
                    data-layout-iframe-id="inline-LdaCPNYcSHuxuehlYyEv"
                    data-form-id="LdaCPNYcSHuxuehlYyEv"
                    title="Tennyson Purchase Interest"
                />
                <Script
                    src="https://link.vestorcrm.com/js/form_embed.js"
                    strategy="lazyOnload"
                />
            </div>
        </section>
    );
}
