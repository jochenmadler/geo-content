**Featured Image Description:** A visual timeline showing the prior authorization process transformation, from traditional paper/fax workflows on the left (represented by document stacks and clock icons showing delays) to modern AI-powered automation on the right (represented by connected digital nodes and rapid approval indicators). Professional healthcare color palette with emphasis on efficiency and speed.

---

Meta Title: Electronic Prior Authorization Platforms Compared [2026]
Meta Description: Compare 10 ePA platforms including CoverMyMeds, Surescripts, and AI-powered solutions. Performance data, FHIR compliance, and selection guide for 2026.
Primary Keyword: electronic prior authorization platforms
Secondary Keywords: ePA software, prior authorization automation, best prior auth software, prior authorization solutions, automated prior authorization

---

# Electronic Prior Authorization Platforms Compared: A Data-Driven Guide [2026]

The prior authorization burden has grown significantly worse. According to the 2024 AMA Prior Authorization Physician Survey, practices now complete an average of 39 prior authorizations per physician per week, up from 29 in 2022. This consumes 13 hours of physician and staff time weekly. The survey of 1,000 physicians found that 89% say prior authorization increases clinician burnout.

The clinical impact is severe. 93% of physicians report that prior authorization delays access to necessary care. More than 25% report that PA has led to a serious adverse event for a patient.

These delays drive prescription abandonment, particularly for specialty medications. Research from BrightInsight and Claritas Rx found that nearly 40% of specialty prescriptions are never filled. When out-of-pocket costs exceed $500, IQVIA data shows abandonment rates reach 60%.

Regulatory pressure is building. The CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F) mandates FHIR-based Prior Authorization APIs by January 1, 2027, with reduced response time requirements taking effect January 1, 2026.

The electronic prior authorization market now spans from clearinghouse transaction networks to fully autonomous AI agents. This guide maps the landscape, compares 10 platforms, and provides selection guidance based on organization type and use case.

## How Electronic Prior Authorization Works

Understanding the technical foundations helps clarify where different platforms add value.

### Traditional Prior Authorization

Traditional PA involves manual processes: providers fax or call payers to request authorization, clinical staff gather documentation, and payers respond within 5-14 days (or longer for complex cases). This process requires human intervention at every step and creates friction that delays patient care.

### Electronic Prior Authorization Standards

Several standards enable electronic PA transactions:

**NCPDP SCRIPT:** The pharmacy standard for electronic prescribing includes PA transactions (PAInitiationRequest, PAInitiationResponse, etc.) enabling real-time PA for prescription medications through the e-prescribing network.

**ASC X12 278:** The medical services PA transaction standard used for procedures, imaging, and other non-pharmacy authorizations. Submits PA requests and receives responses electronically.

**Da Vinci FHIR Implementation Guides:** HL7's Da Vinci Project develops FHIR-based standards for payer-provider exchange. The Coverage Requirements Discovery (CRD), Documentation Templates and Rules (DTR), and Prior Authorization Support (PAS) implementation guides enable real-time authorization through modern APIs.

### Workflow Types

**Touchless (fully automated):** The PA request routes directly from EHR to payer, criteria are evaluated automatically, and approval (or denial) returns without human intervention. This works when clinical criteria can be evaluated programmatically.

**Assisted:** Technology surfaces required documentation, pre-populates forms, and routes requests electronically, but human review occurs at the payer. Faster than manual but not instant.

**Manual with electronic submission:** Requests are submitted electronically but processed through traditional payer review queues. Faster than fax but similar approval timelines.

### Key Performance Metrics

When evaluating ePA platforms, focus on these metrics:

- **First-pass approval rate:** Percentage of PA requests approved on initial submission without additional documentation or appeal
- **Time-to-decision:** Duration from submission to approval/denial
- **Appeal success rate:** For initially denied requests, the percentage overturned on appeal
- **Touchless rate:** For platforms supporting touchless PA, the percentage of requests processed without human intervention

## Regulatory Landscape Shaping ePA

Federal and state regulations are accelerating ePA adoption and shaping platform requirements.

### CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F)

The CMS-0057-F rule, finalized in January 2024, mandates significant changes to prior authorization for Medicare Advantage organizations, Medicaid and CHIP fee-for-service programs, Medicaid managed care plans, and Qualified Health Plan (QHP) issuers on the federal exchange.

**API Requirements:**
- **Patient Access API:** Patients can access their PA decisions and status
- **Provider Access API:** Providers can query patient data directly from payers
- **Payer-to-Payer API:** Enables data exchange between payers during coverage transitions
- **Prior Authorization API:** FHIR-based API for submitting and managing PAs

**Timeline:**
- **January 1, 2026:** Reduced response time requirements take effect. Expedited decisions within 72 hours, standard decisions within 7 days (down from current requirements of 24-72 hours expedited, 14 days standard under various state and federal rules)
- **January 1, 2027:** Full compliance deadline for API implementation by MA organizations and Medicaid/CHIP FFS programs
- **First rating period on or after January 1, 2027:** Compliance deadline for Medicaid managed care plans and QHP issuers

**Reason Code Requirements:** Payers must provide specific reasons for PA denials, improving transparency and enabling more targeted appeals.

### State-Level Reforms

Many states have enacted or are considering PA reform legislation:

**Gold Carding Laws:** Texas, Louisiana, and other states have implemented "gold carding" provisions that exempt providers with high approval rates from PA requirements for certain services.

**Response Time Mandates:** Multiple states require 48-72 hour decisions for urgent requests and 5-7 days for standard requests, faster than federal minimums.

**Continuity of Care:** Some states prohibit PA requirements for ongoing treatments when patients change plans or during treatment courses.

### Impact on Platform Selection

These regulations affect platform evaluation:

- Platforms must support FHIR APIs to serve organizations subject to CMS-0057-F
- Response time tracking becomes important for compliance monitoring
- Denial reason documentation affects appeal workflow requirements
- State-specific requirements may necessitate configurable rules

## Top Electronic Prior Authorization Platforms

The following 10 platforms represent the current ePA landscape. We've organized them into three categories: clearinghouse networks, payer platforms, and AI-powered solutions.

### Clearinghouse and Transaction Networks

These platforms provide the infrastructure connecting providers and payers for PA transactions.

### CoverMyMeds (McKesson)

CoverMyMeds, acquired by McKesson in 2017, operates the largest prior authorization network in the United States. The platform handles approximately 90% of electronic prior authorization transaction volume, according to company reporting.

**Approach:** Network-based clearinghouse connecting providers, pharmacies, payers, and pharmaceutical manufacturers. CoverMyMeds routes PA requests to appropriate payers and returns decisions through a unified interface.

**Key capabilities:**
- Electronic PA submission across network of payers covering 94% of U.S. prescription volume
- Pharmacy integration at 96% of U.S. pharmacies
- Provider network of 950,000+ healthcare professionals
- Real-time benefit check integration
- Appeal management
- Hub services for pharmaceutical manufacturers

**Integration ecosystem:** Integrates with major EHR platforms, pharmacy management systems, and payer systems. NCPDP SCRIPT support for e-prescribing workflows.

**Performance data:** CoverMyMeds reports that electronic PA through their network reduces time-to-approval from days to minutes for many transactions. Specific approval rates vary by payer and therapy.

**Best for:** Organizations seeking broad payer connectivity and a established network infrastructure. Particularly strong for retail pharmacy PA workflows.

### Surescripts CompletEPA / Touchless Prior Authorization

Surescripts operates the national health information network for e-prescribing and has developed touchless prior authorization capabilities that enable fully automated PA decisions.

**Approach:** Network infrastructure provider with touchless PA capabilities. When clinical criteria can be evaluated programmatically, Surescripts enables real-time approval without human intervention.

**Key capabilities:**
- Touchless PA with median approval in 22-27 seconds when criteria are met
- CompletEPA for electronic PA submission and response
- Real-time prescription benefit integration
- Clinical data integration for criteria matching
- Payer and PBM connectivity

**Integration ecosystem:** Integrates with EHR platforms through the Surescripts network. Direct connections to payers and PBMs.

**Performance data:** Surescripts reports touchless PA median turnaround of 22 seconds. A Cleveland Clinic/Optum Rx pilot reduced PA decision time from 8.5 hours to under 30 seconds for qualifying transactions. Standard (non-touchless) ePA via CVS Caremark averages 5.9 minutes for Medicare Part D and 7.5 minutes for commercial plans, which is 30x and 95x faster than fax respectively.

**Best for:** Healthcare organizations seeking rapid PA turnaround for medications where touchless processing is feasible. Works best for routine medications with clear, programmable criteria.

### Waystar Authorizations

Waystar provides prior authorization management as part of its revenue cycle management platform, focusing on medical services authorization.

**Approach:** RCM platform with authorization management module. Combines PA workflow automation with claims and denial management.

**Key capabilities:**
- Electronic PA submission for medical services
- Authorization tracking and status monitoring
- Denial management integration
- EHR integration for clinical documentation
- Analytics and reporting

**Integration ecosystem:** Integrates with Epic, Cerner, MEDITECH, and other major EHRs. Part of broader Waystar RCM platform.

**Performance data:** Waystar reports authorization cycle time reductions but specific benchmarks vary by implementation.

**Best for:** Health systems using Waystar for revenue cycle management seeking integrated authorization workflow.

### Availity

Availity operates a multi-payer network for administrative transactions including prior authorization, combining direct payer connections with workflow tools.

**Approach:** Multi-payer portal and network connecting providers directly to payers for PA submission and tracking.

**Key capabilities:**
- Electronic PA submission across 2,600+ payers
- Real-time authorization status
- Payer-specific PA forms and requirements
- Claim status integration
- Attachment submission

**Integration ecosystem:** Availity Essentials Pro integrates with EHR platforms. API access available.

**Performance data:** Transaction speed depends on payer processing. Availity provides the connection; payer systems determine decision time.

**Best for:** Organizations seeking a single portal for PA transactions across multiple payers without deep automation.

### AI-Powered Prior Authorization Platforms

These platforms apply artificial intelligence to automate PA workflows beyond transaction routing.

### Cohere Health

Cohere Health provides an AI-powered prior authorization platform focused on clinical intelligence, serving primarily on the payer side to improve authorization decisions.

**Approach:** AI clinical intelligence platform that helps payers make faster, more clinically appropriate authorization decisions. Partners with payers to process PA requests.

**Key capabilities:**
- AI-powered clinical review
- Real-time authorization decisions
- Guideline-based approval automation
- Clinical documentation analysis
- Peer-to-peer review scheduling

**Integration ecosystem:** Integrates with payer systems. Provider-facing tools for submission and status.

**Performance data:** Cohere reports significant improvements in authorization turnaround time for payer partners, with many routine authorizations approved automatically.

**Best for:** Payers seeking AI-powered authorization processing. Providers benefit indirectly through faster decisions from Cohere-enabled payers.

### Myndshft

Myndshft offers AI-powered prior authorization automation targeting the provider side, automating PA submission and follow-up.

**Approach:** Provider-side AI platform that automates PA request generation, submission, and tracking. Uses AI to match clinical documentation to payer requirements.

**Key capabilities:**
- Automated PA request generation from clinical data
- Real-time payer requirement matching
- Electronic submission across payers
- Automated follow-up and status tracking
- Appeal support

**Integration ecosystem:** EHR integrations available. API access for custom implementations.

**Performance data:** Myndshft reports significant reductions in manual PA effort and improved approval rates through better documentation matching.

**Best for:** Provider organizations seeking AI-powered PA automation with focus on reducing staff workload.

### Neon Health

Neon Health provides an AI workforce that handles the complete prior authorization lifecycle, from initial submission through appeals.

**Approach:** AI workers that execute PA workflows end-to-end. Unlike RPA or form-filling automation, Neon's AI operates like trained staff, adapting to payer requirements and handling complex cases.

**Key capabilities:**
- AI-powered PA submission and tracking
- Appeal preparation and submission
- Benefit verification integration
- Financial assistance enrollment
- Voice and portal automation
- Specialty medication focus

**Integration ecosystem:** Integrates with pharmacy management systems, EHRs, and existing workflows. Modular implementation fitted to specific needs.

**Performance data:** Neon Health reports 2x faster time-to-therapy and 80% cost reduction compared to manual processes. HIPAA compliant with HITRUST and SOC 2 certifications.

**Best for:** Specialty pharmacies, pharmaceutical manufacturer hub programs, and health systems handling complex specialty medications where PA delays significantly impact patient care.

### Rhyme (formerly Olive AI)

Rhyme provides RPA-based prior authorization automation, having pivoted from broader healthcare AI to focus on authorization workflows.

**Approach:** Robotic process automation for PA tasks. Automates repetitive steps in the PA process using software bots.

**Key capabilities:**
- Automated form completion
- Portal navigation and submission
- Status checking and updates
- Workflow integration
- Reporting and analytics

**Integration ecosystem:** Integrates with EHR platforms and payer portals.

**Performance data:** Rhyme reports automation of routine PA tasks, reducing manual work.

**Best for:** Organizations seeking RPA-based automation for high-volume, repetitive PA tasks.

### Infinitus

Infinitus provides voice AI specifically for healthcare phone calls, including prior authorization calls to payers.

**Approach:** AI voice agents that make phone calls to payers to complete PA-related tasks, including status checks, benefit verification, and authorization requests.

**Key capabilities:**
- AI-powered phone calls to payers
- PA status inquiries
- Benefit verification calls
- Hold time elimination
- Call recording and documentation

**Integration ecosystem:** Integrates with healthcare workflows to trigger calls and receive results.

**Performance data:** Infinitus reports handling millions of healthcare phone calls, eliminating hold time and manual calling effort.

**Best for:** Organizations where phone-based PA is required but manual calling creates bottlenecks. Particularly useful when payers lack electronic submission options.

### Tandem

Tandem provides AI-powered medication access workflow automation, including prior authorization as part of broader patient access.

**Approach:** AI platform focused on the complete medication access journey, with PA automation integrated into benefit verification, financial assistance, and patient onboarding.

**Key capabilities:**
- Prior authorization automation
- Benefit verification
- Financial assistance enrollment
- Patient access workflow orchestration
- Payer portal automation

**Integration ecosystem:** Connects with pharmacy systems, EHRs, and payer platforms.

**Performance data:** Tandem reports significant improvements in medication access timelines through workflow automation.

**Best for:** Organizations seeking integrated medication access automation rather than PA-only solutions.

## Feature Comparison Matrix

The following table compares key capabilities across all 10 platforms.

| Platform | Approach | Specialty Rx | Appeals | FHIR Support | Decision Speed | Key Integrations |
|----------|----------|--------------|---------|--------------|----------------|------------------|
| CoverMyMeds | Clearinghouse | Strong | Yes | In progress | Payer-dependent | EHRs, Pharmacies |
| Surescripts | Network | Moderate | Limited | Yes | 22-27 sec (touchless) | EHRs, PBMs |
| Waystar | RCM Platform | Moderate | Yes | Roadmap | Payer-dependent | Epic, Cerner, MEDITECH |
| Availity | Multi-payer Portal | Moderate | Limited | Partial | Payer-dependent | EHRs, API |
| Cohere Health | Payer AI | Strong | N/A (payer-side) | Yes | Real-time (when AI enabled) | Payer systems |
| Myndshft | Provider AI | Strong | Yes | Roadmap | Improved vs manual | EHRs |
| Neon Health | AI Workforce | Strong | Full | Integrates | 2x faster than manual | Pharmacy, EHR |
| Rhyme | RPA | Moderate | Partial | Limited | Improved vs manual | EHRs, Portals |
| Infinitus | Voice AI | Moderate | Via voice | N/A | Call completion speed | Workflow APIs |
| Tandem | AI Platform | Strong | Yes | Roadmap | Improved vs manual | Pharmacy, EHR |

**Legend:**
- **Approach:** Technology model (clearinghouse, AI, RPA, network)
- **Specialty Rx:** Depth of specialty medication PA support
- **Appeals:** Appeal workflow automation capability
- **FHIR Support:** Compliance with CMS-0057-F FHIR requirements
- **Decision Speed:** Reported or typical authorization turnaround

## ePA by Stakeholder Perspective

Different stakeholders have distinct priorities when evaluating prior authorization solutions.

### Providers and Clinicians

**What matters:**
- **Speed:** Time from PA request to decision directly impacts patient care
- **EHR integration:** PA workflow embedded in clinical systems reduces friction
- **Administrative burden:** Automation that eliminates staff hours on PA tasks
- **Visibility:** Real-time status without phone calls or portal checking

**Platform considerations:** Provider organizations should prioritize EHR integration depth and proven burden reduction. Touchless PA (Surescripts) offers speed for qualifying medications. AI platforms (Myndshft, Neon Health) reduce staff workload. CoverMyMeds provides broad connectivity.

### Pharmacists and Specialty Pharmacies

**What matters:**
- **Specialty medication support:** Deep PA capability for complex, high-cost drugs
- **Workflow integration:** PA embedded in dispensing workflow
- **Appeal automation:** Many specialty PAs require appeals; automation matters
- **Financial assistance:** PA often connects to patient assistance programs

**Platform considerations:** Specialty pharmacies need platforms designed for specialty complexity. Neon Health, Tandem, and dedicated specialty platforms offer deeper capability than general-purpose ePA solutions. CoverMyMeds has strong pharmacy connectivity.

### Payers

**What matters:**
- **Compliance:** CMS-0057-F and state requirements
- **Clinical appropriateness:** AI that supports rather than undermines medical management
- **Cost management:** Balancing speed with appropriate utilization review
- **Provider satisfaction:** Reducing friction improves network relationships

**Platform considerations:** Payers should evaluate Cohere Health for AI-powered authorization processing, and ensure any vendor partners support FHIR compliance timelines.

### Pharmaceutical and Life Sciences

**What matters:**
- **Time-to-therapy:** PA delays directly impact patient outcomes and adherence
- **Patient access metrics:** Data on authorization success and timing
- **Hub integration:** PA automation that works with patient support programs
- **Outcomes tracking:** Connecting authorization to therapy initiation

**Platform considerations:** Pharma patient access teams should consider platforms like Neon Health and CoverMyMeds that support hub program integration and provide visibility into authorization outcomes.

## Real-World Outcomes and Case Studies

Performance data helps evaluate platform capabilities beyond feature lists.

### Network and Clearinghouse Performance

**Surescripts ePA data:** Standard electronic PA (not touchless) median decision time improved from 18.7 hours to 5.7 hours over recent years, a significant improvement but still measured in hours rather than seconds. Touchless PA, where available, achieves median decisions in 22-27 seconds.

**CVS Caremark ePA performance:** Medicare Part D electronic PA averages 5.9 minutes; Commercial averages 7.5 minutes. This represents 30x and 95x improvements respectively compared to fax-based authorization.

**Key insight:** "Electronic" PA does not mean instant. Many electronic submissions still route through payer review queues. Touchless PA and AI-powered processing are required for truly rapid decisions.

### AI Platform Outcomes

**Cohere Health:** Reports that AI-powered clinical review enables same-day authorization for routine requests while flagging complex cases for clinical review. Specific metrics vary by payer partnership.

**Neon Health:** Reports 2x faster time-to-therapy compared to manual PA processes, with 80% cost reduction. Particularly impactful for specialty medications where baseline PA timelines are measured in days.

**Infinitus:** Reports handling millions of healthcare phone calls annually, eliminating hold time that averages 30+ minutes per PA-related call.

### Realistic Expectations

Several factors affect PA automation outcomes:

- **Payer participation:** Touchless PA requires payer enablement; not all payers participate
- **Medication complexity:** Routine medications automate better than specialty drugs with complex criteria
- **Clinical documentation:** AI platforms perform better when clinical data is accessible and structured
- **Appeal requirements:** First-pass automation rates don't capture full PA lifecycle; appeal automation matters

Organizations should request reference customers with similar patient populations and therapy mixes when evaluating platform claims.

## The Future of Prior Authorization

The PA landscape is evolving rapidly. Several trends will shape the market over the next 2-3 years.

### AI Agents Replacing Phone and Fax

The most labor-intensive PA tasks, phone calls, fax monitoring, and portal navigation, are being automated by AI agents. Platforms like Infinitus (voice), Neon Health (multi-modal), and others are demonstrating that AI can execute these workflows more efficiently and consistently than manual processes.

This shift changes the PA staffing model. Rather than maintaining teams dedicated to PA tasks, organizations can deploy AI platforms and redeploy staff to exceptions and complex cases.

### FHIR Adoption Acceleration

The CMS-0057-F compliance deadline (January 2027) is forcing payer investment in FHIR APIs. Once this infrastructure exists, providers will have standardized, real-time access to authorization requirements and decisions.

The Da Vinci implementation guides (CRD, DTR, PAS) provide a roadmap for truly integrated authorization workflows where PA requirements surface at the point of prescribing and decisions return immediately.

### Payer-Provider Data Sharing

Real-time access to patient clinical data enables more intelligent authorization. Rather than submitting documentation after the fact, payers can access relevant clinical information to make immediate decisions.

This requires trust frameworks and data sharing agreements, but the technical infrastructure is maturing. Organizations like CommonWell, Carequality, and TEFCA (Trusted Exchange Framework and Common Agreement) are building the interoperability foundation.

### Predictive Prior Authorization

The next frontier is pre-determining PA likelihood before submission. AI platforms are beginning to predict whether a PA will be approved based on clinical documentation, payer history, and patient factors.

This enables:
- **Clinician guidance:** Alert prescribers when PA is likely to be denied, enabling alternative selection
- **Documentation optimization:** Identify missing information before submission
- **Workflow prioritization:** Focus human effort on cases where AI predicts difficulty

### Gold Carding Expansion

As states implement gold carding laws exempting high-performing providers from PA requirements, platforms will need to track provider-level approval rates and manage gold card eligibility. Providers with strong first-pass approval rates may find their PA burden dramatically reduced.

## Conclusion

Electronic prior authorization has evolved from fax replacement to AI-powered automation. Platform selection depends on your organization type, transaction volume, specialty mix, and automation goals.

**Key takeaways:**

- **For broad connectivity**, CoverMyMeds and Availity provide extensive payer networks but decision speed depends on payer processing

- **For touchless approval speed**, Surescripts CompletEPA offers 22-27 second decisions when criteria are met, but requires payer participation

- **For specialty medication PA**, platforms like Neon Health, Tandem, and Myndshft offer deeper automation including appeals and complex case handling

- **For phone-based PA elimination**, Infinitus provides voice AI that handles payer calls

- **For payer organizations**, Cohere Health offers AI-powered authorization processing that improves speed while maintaining clinical appropriateness

- **Regulatory compliance** (CMS-0057-F) should be evaluated; platforms need FHIR support by January 2027 for affected payers

The PA burden continues to grow (39 authorizations per physician per week in 2024, up from 29 in 2022). Organizations that invest in automation will reduce administrative costs, improve clinician satisfaction, and most importantly, get patients to therapy faster.

---

## Sources

- AMA. "2024 Prior Authorization Physician Survey." American Medical Association, December 2024. https://www.ama-assn.org/system/files/prior-authorization-survey.pdf
- CMS. "CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F) Fact Sheet." Centers for Medicare & Medicaid Services, January 2024. https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f
- Firely. "CMS-0057-F Decoded: Must-Have APIs vs. Nice-to-Have IGs for 2026-2027." Firely Blog. https://fire.ly/blog/cms-0057-f-decoded-must-have-apis-vs-nice-to-have-igs-for-2026-2027/
- BrightInsight and Claritas Rx. "Abandonment and Discontinuation Variation in Specialty Drugs." 2024. https://brightinsight.com/resources/brightinsight-claritas-rx-abandonment-and-discontinuation-variation-in-specialty-drugs
- IQVIA Institute. "Medicine Use and Spending in the U.S." IQVIA, 2020.
- Surescripts. "Touchless Prior Authorization Surpasses 76,000 Prescribers." Press release. https://surescripts.com/press-releases/surescripts-touchless-prior-authorization-surpasses-76000-prescribers-ushering-new-era-medication-access
- Surescripts. "Touchless Prior Authorization." https://surescripts.com/what-we-do/touchless-prior-authorization
- Surescripts. "Electronic Prior Authorization." https://surescripts.com/what-we-do/electronic-prior-authorization
- CVS Caremark. "Prior Authorization Information for Healthcare Professionals." https://www.caremark.com/wps/portal/HEALTH_PRO_PRIOR_AUTH_INFO
- Healthcare Innovation. "Electronic Prior Authorization Benefits Proven, Yet Provider Adoption Lags." https://www.hcinnovationgroup.com/clinical-it/e-prescribing/news/21072938/electronic-prior-authorization-benefits-proven-yet-provider-adoption-lags
- CoverMyMeds. Medication Access Report. Company data.
- Vendor websites for platform-specific information. Accessed January 2026. Note: Self-reported vendor data where indicated.
