const GravDataIndex = [{"title":"Missionland Dataset","date":"2021-08-18T06:31:15+00:00","url":"http:\/\/localhost\/services-data\/missionland","taxonomy":{"categories":[],"tags":[]}},{"title":"Integration, Verification & Certification Tool","date":"2021-08-18T06:31:15+00:00","url":"http:\/\/localhost\/services-data\/ivct","taxonomy":{"categories":[],"tags":[]}},{"title":"HLA Certification Service","date":"2021-08-18T06:31:15+00:00","url":"http:\/\/localhost\/services-data\/certification","taxonomy":{"categories":[],"tags":[]}},{"title":"Products & Services","date":"2021-08-18T06:31:15+00:00","url":"http:\/\/localhost\/services-data","taxonomy":{"categories":[],"tags":[]}},{"title":"AMSP-05 CAX Handbook","date":"2021-08-18T06:31:15+00:00","url":"http:\/\/localhost\/amsp\/amsp05","taxonomy":{"categories":[],"tags":[]}},{"title":"References","date":"2021-08-18T06:31:13+00:00","url":"http:\/\/localhost\/amsp\/amsp04\/references","taxonomy":{"categories":[],"tags":[]}},{"title":"SimC2","date":"2018-06-04T10:15:00+00:00","url":"http:\/\/localhost\/amsp\/amsp04\/modules\/simc2","taxonomy":{"categories":[],"tags":[]},"media":["e3.jpg","simc2.png"],"content":"The purpose of the **Simulation-C2 Interoperability (SimC2)** component is to automate the process of interaction between C2 systems and simulations. NETN SIM-C2 relies on the Coalition Battle Management Language (C-BML) and provides a way to represent C-BML messages in a federated simulation environment without the need to implement peer-to-peer connections between C-BML services and individual simulation systems. Although, an individual simulation can use a C-BML interface to interact directly with a C-BML server the preferred NETN approach is to have a single C-BML gateway that interacts with the NETN federation regardless.\n\nThe C-BML language is a high level language representing orders, reports and requests. Some simulations can process this information directly and perform meaningful modelling of activities but most entity-level simulations are task oriented and operate on a significantly lower level. The NETN SimC2 concept does not exclude the use of simulations that can process C-BML directly but identifies the need for components that can perform both aggregation and disaggregation of orders, reports and requests into smaller elements suitable for entity-level simulations. Lower-level tasks can be used to control simulations in the NETN federation using the [Simulation Control](..\/lbml) component.  \n\n![](simc2.png?resize=500)\n\nTo avoid potential mistakes, the SimC2 C-BML FOM module has been named NETN-HCBML FOM module and the Simulation Control module has been named NETN-LBML FOM module. \n\nThe NETN HCBML FOM module focuses on transportation of C-BML messages and is basically a wrapper of C-BML messages. The C-BML Orders and Requests are represented using its C-BML XML format without modification. Some information from the message header are extracted and used for routing of the message. Reports and acknowledgements are represented as interactions with parameters based on C-BML. The following reports are supported:\n\n* TaskReport: Progress of current task\n* SituationReport: Force Tracking information\n* LogReport: Logistics report\n"},{"title":"Modules","date":"2018-06-05T07:25:00+00:00","url":"http:\/\/localhost\/amsp\/amsp04\/modules","taxonomy":{"categories":[],"tags":[]}},{"title":"AMSP-04 NETN FAFD","date":"2021-08-18T06:31:13+00:00","url":"http:\/\/localhost\/amsp\/amsp04","taxonomy":{"categories":[],"tags":[]}},{"title":"AMSP-03 CAX M&S Standards","date":"2021-08-18T06:31:13+00:00","url":"http:\/\/localhost\/amsp\/amsp03","taxonomy":{"categories":[],"tags":[]}},{"title":"AMSP-01 M&S Standards Profile","date":"2021-08-18T06:31:13+00:00","url":"http:\/\/localhost\/amsp\/amsp01","taxonomy":{"categories":[],"tags":[]}},{"title":"STANAG 4603 HLA","date":"2021-08-18T06:31:13+00:00","url":"http:\/\/localhost\/amsp\/hla","taxonomy":{"categories":[],"tags":[]}},{"title":"Standards & Guidance","date":"2021-08-18T06:31:12+00:00","url":"http:\/\/localhost\/amsp","taxonomy":{"categories":[],"tags":[]}},{"title":"Modelling & Simulation as a Service (MSaaS)","date":"2021-08-18T06:31:12+00:00","url":"http:\/\/localhost\/themes\/msaas","taxonomy":{"categories":[],"tags":[]}},{"title":"C2 - Simulation Interoperability (C2SIM)","date":"2021-08-18T06:31:12+00:00","url":"http:\/\/localhost\/themes\/c2sim","taxonomy":{"categories":[],"tags":[]}},{"title":"NATO Education & Training Network (NETN)","date":"2021-08-18T06:31:12+00:00","url":"http:\/\/localhost\/themes\/netn","taxonomy":{"categories":[],"tags":[]}},{"title":"Mission Training through Distributed Simulation (MTDS)","date":"2021-08-18T06:31:11+00:00","url":"http:\/\/localhost\/themes\/mtds","taxonomy":{"categories":[],"tags":[]}},{"title":"Live Simulation Standards (LSS)","date":"2021-08-18T06:31:11+00:00","url":"http:\/\/localhost\/themes\/lss","taxonomy":{"categories":[],"tags":[]}},{"title":"Research & Development","date":"2021-08-18T06:31:11+00:00","url":"http:\/\/localhost\/themes","taxonomy":{"categories":[],"tags":[]}},{"title":"Master Plan","date":"2021-08-18T06:31:11+00:00","url":"http:\/\/localhost\/home\/nmsmp","taxonomy":{"categories":[],"tags":[]}},{"title":"NATO M&S","date":"2021-08-18T06:31:11+00:00","url":"http:\/\/localhost\/home","taxonomy":{"categories":[],"tags":[]}}];