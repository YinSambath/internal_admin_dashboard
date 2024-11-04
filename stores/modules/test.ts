import { defineStore } from 'pinia';
import type { object } from 'yup';

export const useTestStore = defineStore({
    id: 'test',
    state: () => ({
        ministries: [
            {
                id: 1,
                nameEn: "MoEYS",
                nameKh: "ក​.អ.​យ.ក",
                url: 'https://www.paragonisc.edu.kh/wp-content/uploads/2023/08/Moeys-01.png'
            },
            {
                id: 2,
                nameEn: "PTC",
                nameKh: "ក.ប.ទ",
                url: 'https://asset.cambodia.gov.kh/mptc/2020/05/zRz0MYcT-cropped-PTC-HD-LOGO-512px.png'
            },
            {
                id: 3,
                nameEn: 'MC',
                nameKh: 'ក.ព',
                url: 'https://w7.pngwing.com/pngs/806/379/png-transparent-ministry-of-commerce-ministry-of-land-management-urban-planning-and-construction-trade-business-organization-business-statistics-company-people-logo.png'
            },
            {
                id: 4,
                nameEn: 'FSA',
                nameKh: 'អ.ស.ហ',
                url: 'https://fintech.fsa.gov.kh/img/regulatorV1/fsa-logo.png'
            }
        ],
        logicalFramworks: [
            {
                id: 1,
                nameEn: 'Impacts',
                nameKh: 'Impacts',
            },
            {
                id: 2,
                nameEn: 'Outcome',
                nameKh: 'Outcome',
            },
            {
                id: 3,
                nameEn: 'Immediate Outcome', 
                nameKh: 'Immediate Outcome' 
            },
            { 
                id: 4,
                nameEn: 'Output',
                nameKh: 'Output'
            },
            {
                id: 5,
                nameEn: 'Activities',
                nameKh: 'Activities'
            },
            {
                id: 6,
                nameEn: 'Input',
                nameKh: 'Input'
            },

        ],
        frameworks: [
            { 
                "id": 1, 
                "code": "PS-P1", 
                "frameworkNameEn": "យុទ្ធសាស្រ្តបញ្ចកោណ-ដំណាក់កាលទី១", 
                "frameworkNameKh": "យុទ្ធសាស្រ្តបញ្ចកោណ-ដំណាក់កាលទី១", 
                "moto": "test", 
                "kp": "test", 
                "stategic_goal": "test", 
                "start_year": "2020", 
                "end_year": "2030", 
                "approach": "test", 
                "status": "In processing", 
                "line_ministry": { 
                    "id": 4, 
                    "nameEn": "FSA", 
                    "nameKh": "អ.ស.ហ", 
                    "url": "https://fintech.fsa.gov.kh/img/regulatorV1/fsa-logo.png" 
                }, 
                "logicalFramework": [ 1 ] 
            },
            { 
                "id": 2, 
                "code": "PS-P2", 
                "frameworkNameEn": "យុទ្ធសាស្រ្តបញ្ចកោណ-ដំណាក់កាលទី២", 
                "frameworkNameKh": "យុទ្ធសាស្រ្តបញ្ចកោណ-ដំណាក់កាលទី២", 
                "moto": "test", 
                "kp": "test", 
                "stategic_goal": "test", 
                "start_year": "2025", 
                "end_year": "2035", 
                "approach": "test", 
                "status": "Reviewing", 
                "line_ministry": { 
                    "id": 4, 
                    "nameEn": "FSA", 
                    "nameKh": "អ.ស.ហ", 
                    "url": "https://fintech.fsa.gov.kh/img/regulatorV1/fsa-logo.png" 
                }, 
                "logicalFramework": [ 1, 2 ] 
            },
            { 
                "id": 3, 
                "code": "PS-P3", 
                "frameworkNameEn": "យុទ្ធសាស្រ្តបញ្ចកោណ-ដំណាក់កាលទី៣", 
                "frameworkNameKh": "យុទ្ធសាស្រ្តបញ្ចកោណ-ដំណាក់កាលទី៣", 
                "moto": "test", 
                "kp": "test", 
                "stategic_goal": "test", 
                "start_year": "2025", 
                "end_year": "2026", 
                "approach": "test", 
                "status": "Done", 
                "line_ministry": { 
                    "id": 4, 
                    "nameEn": "FSA", 
                    "nameKh": "អ.ស.ហ", 
                    "url": "https://fintech.fsa.gov.kh/img/regulatorV1/fsa-logo.png" 
                }, 
                "logicalFramework": [ 1, 2 ] 
            },
            { 
                "id": 4, 
                "code": "PS-P4", 
                "frameworkNameEn": "យុទ្ធសាស្រ្តបញ្ចកោណ-ដំណាក់កាលទី៤", 
                "frameworkNameKh": "យុទ្ធសាស្រ្តបញ្ចកោណ-ដំណាក់កាលទី៤", 
                "moto": "test", 
                "kp": "test", 
                "stategic_goal": "test", 
                "start_year": "2025", 
                "end_year": "2028", 
                "approach": "test", 
                "status": "Done", 
                "line_ministry": { 
                    "id": 4, 
                    "nameEn": "FSA", 
                    "nameKh": "អ.ស.ហ", 
                    "url": "https://fintech.fsa.gov.kh/img/regulatorV1/fsa-logo.png" 
                }, 
                "logicalFramework": [ 4 ] 
            },
            { 
                "id": 5, 
                "code": "PS-P5", 
                "frameworkNameEn": "យុទ្ធសាស្រ្តបញ្ចកោណ-ដំណាក់កាលទី៥", 
                "frameworkNameKh": "យុទ្ធសាស្រ្តបញ្ចកោណ-ដំណាក់កាលទី៥", 
                "moto": "test", 
                "kp": "test", 
                "stategic_goal": "test", 
                "start_year": "2025", 
                "end_year": "2026", 
                "approach": "test", 
                "status": "Done", 
                "line_ministry": { 
                    "id": 4, 
                    "nameEn": "FSA", 
                    "nameKh": "អ.ស.ហ", 
                    "url": "https://fintech.fsa.gov.kh/img/regulatorV1/fsa-logo.png" 
                }, 
                "logicalFramework": [ 2 ] 
            }
        ] as Array<any>, 
        kpis: [
            { 
                id: 1, 
                code: "ACT001", 
                frameworkId: 2, 
                logicalFrameworkId: 1, 
                nameKh: "Improved economic diversification, investment climate and competitiveness", 
                nameEn: "Improved economic diversification, investment climate and competitiveness", 
                weight: "Test", 
                frequencyId: 1, 
                resourceId: 1, 
                typeId: 1, 
                ministryLeadId: 1, 
                ministry: [ 1, 2, 3 ], 
                practiceYearID: 1, 
                groupId: 1, 
                calculationMethod: false, 
                dependance: false, 
                numberVariable: [], 
                formular: "", 
                status: "In processing",
                children: [
                    {
                        id: 4, 
                        code: "ACT001-001", 
                        frameworkId: 2, 
                        logicalFrameworkId: 1, 
                        nameKh: "The share of direct investment (FDI) in the new key sectors compared to the total investment (car assembly, electronic components, furniture, processing, tires, etc.)", 
                        nameEn: "The share of direct investment (FDI) in the new key sectors compared to the total investment (car assembly, electronic components, furniture, processing, tires, etc.)", 
                        weight: "Test", 
                        frequencyId: 1, 
                        resourceId: 1, 
                        typeId: 1, 
                        ministryLeadId: 1, 
                        ministry: [ 1, 2, 3 ], 
                        practiceYearID: 1, 
                        groupId: 1, 
                        calculationMethod: false, 
                        dependance: false, 
                        numberVariable: [], 
                        formular: "", 
                        status: "In processing",
                        children: [],
                        ministryLead: {
                            "id": 1,
                            "nameEn": "MoEYS",
                            "nameKh": "ក​.អ.​យ.ក",
                            "url": "https://www.paragonisc.edu.kh/wp-content/uploads/2023/08/Moeys-01.png"
                        },
                        problem: "មានភាពលំបាកក្នុងការឆ្លើយតបណែនាំទៅជនរងគ្រោះវិញ ទាក់ទងទៅនឹងនីតិវិធីច្បាប់ផ្សេងៗ ដែលពាក់ព័ន្ធនឹងបទល្មើស -គណនី/ទំព័របណ្តាញសង្គមមួយចំនួនបង្កើតឡើងសម្រាប់តែធ្វើ សកម្មភាពវាយប្រហារ ប៉ុន្តែមិនមានព័ត៌មានពិតប្រាកដ -ការតម្លើងប្រព័ន្ធសុវត្ថិភាពតាមបញ្ជរ របស់ភ្នាក់ងារទូទាត់/ផ្ទេរប្រាក់ នៅមានកម្រិត (មិនមានបំពាក់កាំម៉េរ៉ាសុវត្ថិភាពឬកាំម៉េរ៉ាដែល បានបំពាក់មើលមិនឃើញមុខជនសង្ស័យ និងមានពាក់ម៉ាស់ការងារជំងឺកូវីដ១៩",
                        solution: "សហការសិក្សាជ្រើសរើសគម្រោងអាទិភាពសម្រាប់ដំណើរការធ្វើទំនើបកម្មការផ្តល់សេវាសាធារណៈ តាមប្រព័ន្ធបច្ចេកវិទ្យាព័ត៌មាន ដែលមានការទាក់ទងដោយផ្តាល់ជាមួយប្រជាពលរដ្ឋ បណ្តុះបណ្តាលពង្រឹង និងបំប៉នសមត្ថភាពមន្រ្តីបម្រើការងារលើការផ្តល់សេវាសាធារណៈតាមបច្ចេកវិទ្យាព័ត៌មាន",
                        recommandation: "ស្នើសុំកំណត់និយមន័យ ការបម្រើសេវាសាធារណៈតាមប្រព័ន្ធបច្ចេកវិទ្យា ឱ្យបានច្បាស់ ព្រោះបន្ទាប់ ពីប្រជុំពិភាក្សាជាមួយអគ្គនាយកដ្ឋានជំនាញពាក់ព័ន្ធ មានការលើកឡើងផ្សេងៗពីគ្នា ដូចជា៖ ការបម្រើសេវាសាធារណៈតាមប្រព័ន្ធបច្ចេកវិទ្យាព័ត៌មាន ទាល់តែជាការប្រើប្រាស់ប្រព័ន្ធបច្ចេកវិទ្យា ដោយផ្ទាល់ជាមួយប្រជាពលរដ្ឋ ដោយឡែកការប្រើប្រាស់ប្រព័ន្ធបច្ចេកវិទ្យារបស់អង្គភាពជំនាញ ក្នុងការរក្សាទុកទិន្នន័យផ្ទៃក្នុងអង្គភាព ដែលគាំទ្រដល់ការបម្រើសេវាសាធារណៈដូចជា អត្តសញ្ញាណប័ណ្ណ សញ្ជាតិខ្មែរ លិខិតឆ្លងដែន ជាដើមតើត្រូវរាប់ចូលជាការបម្រើសេវាសាធារណៈតាមប្រព័ន្ធបច្ចេកវិទ្យា ដែរឬទេ??"
                    },
                    {
                        id: 5, 
                        code: "ACT001-002", 
                        frameworkId: 2, 
                        logicalFrameworkId: 1, 
                        nameKh: "Name of KPI ACT001-002", 
                        nameEn: "Name of KPI ACT001-002", 
                        weight: "Test", 
                        frequencyId: 1, 
                        resourceId: 1, 
                        typeId: 1, 
                        ministryLeadId: 1, 
                        ministry: [ 1, 2, 3 ], 
                        practiceYearID: 1, 
                        groupId: 1, 
                        calculationMethod: false, 
                        dependance: false, 
                        numberVariable: [], 
                        formular: "", 
                        status: "In processing",
                        children: [],
                        ministryLead: {
                            "id": 1,
                            "nameEn": "MoEYS",
                            "nameKh": "ក​.អ.​យ.ក",
                            "url": "https://www.paragonisc.edu.kh/wp-content/uploads/2023/08/Moeys-01.png"
                        },
                        problem: "KPI ACT001-002",
                        solution: "KPI ACT001-002",
                        recommandation: "KPI ACT001-002"
                    }
                ],
                ministryLead: {
                    "id": 1,
                    "nameEn": "MoEYS",
                    "nameKh": "ក​.អ.​យ.ក",
                    "url": "https://www.paragonisc.edu.kh/wp-content/uploads/2023/08/Moeys-01.png"
                },
                result: ""
            },
            { 
                id: 2, 
                code: "ACT002", 
                frameworkId: 2, 
                logicalFrameworkId: 1, 
                nameKh: "Improved economic diversification, investment climate and competitiveness", 
                nameEn: "Improved economic diversification, investment climate and competitiveness", 
                weight: "Test", 
                frequencyId: 1, 
                resourceId: 1, 
                typeId: 1, 
                ministryLeadId: 2, 
                ministry: [ 1, 2, 3 ], 
                practiceYearID: 1, 
                groupId: 2, 
                calculationMethod: false, 
                dependance: false, 
                numberVariable: [], 
                formular: "", 
                status: "Reviewing",
                children: [],
                ministryLead: {
                    "id": 2,
                    "nameEn": "PTC",
                    "nameKh": "ក.ប.ទ",
                    "url": "https://asset.cambodia.gov.kh/mptc/2020/05/zRz0MYcT-cropped-PTC-HD-LOGO-512px.png"
                },
                problem: "Kpi ACT002",
                solution: "Kpi ACT002",
                recommandation: "Kpi ACT002",
                result: ""
            },
            { 
                id: 3, 
                code: "ACT003", 
                frameworkId: 2, 
                logicalFrameworkId: 1, 
                nameKh: "Improved economic diversification, investment climate and competitiveness", 
                nameEn: "Improved economic diversification, investment climate and competitiveness", 
                weight: "Test", 
                frequencyId: 1, 
                resourceId: 1, 
                typeId: 1, 
                ministryLeadId: 3, 
                ministry: [ 1, 2, 3 ], 
                practiceYearID: 1, 
                groupId: 3, 
                calculationMethod: false, 
                dependance: false, 
                numberVariable: [], 
                formular: "", 
                status: "Done",
                children: [],
                ministryLead: {
                    "id": 1,
                    "nameEn": "MoEYS",
                    "nameKh": "ក​.អ.​យ.ក",
                    "url": "https://www.paragonisc.edu.kh/wp-content/uploads/2023/08/Moeys-01.png"
                },
                problem: "Kpi ACT003",
                solution: "Kpi ACT003",
                recommandation: "Kpi ACT003",
                result: ""
            },
            { 
                id: 4, 
                code: "ACT004", 
                frameworkId: 2, 
                logicalFrameworkId: 1, 
                nameKh: "Improved economic diversification, investment climate and competitiveness", 
                nameEn: "Improved economic diversification, investment climate and competitiveness", 
                weight: "Test", 
                frequencyId: 1, 
                resourceId: 1, 
                typeId: 1, 
                ministryLeadId: 1, 
                ministry: [ 1, 2, 3 ], 
                practiceYearID: 1, 
                groupId: 3, 
                calculationMethod: false, 
                dependance: false, 
                numberVariable: [], 
                formular: "", 
                status: "Done",
                children: [],
                ministryLead: {
                    "id": 1,
                    "nameEn": "MoEYS",
                    "nameKh": "ក​.អ.​យ.ក",
                    "url": "https://www.paragonisc.edu.kh/wp-content/uploads/2023/08/Moeys-01.png"
                },
                problem: "Kpi ACT003",
                solution: "Kpi ACT003",
                recommandation: "Kpi ACT003",
                result: "50"
            },
            { 
                id: 5, 
                code: "ACT005", 
                frameworkId: 2, 
                logicalFrameworkId: 1, 
                nameKh: "Improved economic diversification, investment climate and competitiveness", 
                nameEn: "Improved economic diversification, investment climate and competitiveness", 
                weight: "Test", 
                frequencyId: 1, 
                resourceId: 1, 
                typeId: 1, 
                ministryLeadId: 1, 
                ministry: [ 1, 2, 3 ], 
                practiceYearID: 1, 
                groupId: 3, 
                calculationMethod: false, 
                dependance: false, 
                numberVariable: [], 
                formular: "", 
                status: "Done",
                children: [],
                ministryLead: {
                    "id": 1,
                    "nameEn": "MoEYS",
                    "nameKh": "ក​.អ.​យ.ក",
                    "url": "https://www.paragonisc.edu.kh/wp-content/uploads/2023/08/Moeys-01.png"
                },
                problem: "Kpi ACT003",
                solution: "Kpi ACT003",
                recommandation: "Kpi ACT003",
                result: "20"
            } 
        ] as Array<any>, 
        kpisLoading: false,      
    }),
    getters: {
        // getKpis: (state) => state.kpis,
        // isKpiLoading: (state) => state.kpisLoading,
    },
    actions: {
        geLogicalFramework(frameworkIndex: number) {
            return this.frameworks[frameworkIndex].logicalFramework.map((x: Number) => this.logicalFramworks.find(y => x === y.id))
        },
        // framework
        searchBy(keyword: any) {
            return this.frameworks.filter((item) => 
                item.frameworkNameEn.includes(keyword) || 
                item.frameworkNameKh.includes(keyword) || 
                item.code.includes(keyword) );
        },
        filterFrameworkBy(filter: any) {
            return this.frameworks.filter( item =>
                item.status.toLowerCase() == filter.toLowerCase() || 
                item.start_year == filter || 
                item.end_year == filter )
        },
        createFramework(item: any) {
            this.frameworks.push(item)
            return 'ok';
        },
        getFramework(id: number) {
            return this.frameworks.find(item => item.id === id);
        },
        updateFramework(id: number, body: any) { 
            const index = this.frameworks.findIndex(item => item.id === id);
            if (index !== -1) {
                this.frameworks[index] = body;
            }
            return 'ok';
        },
        deleteFramework(id: number) {
            return this.frameworks.filter(item => item.id !== id);
        },
        // kpi
        listKpis() {
            return this.kpis;
        },
        getKpi(id: number) {
            return this.kpis.find(x => x.id === id);
        },
        createKpi(item: any) {
            if (item.parentId) {
                this.kpis.find((x) => {
                    if (x.id === item.parentId) {
                        let countId = this.kpis.length + x.children.length + 1;
                        item.id += countId;
                        item.code = x.code + '-' + item.id;
                        item.ministryLead = this.ministries.find(x => x.id === item.ministryLeadId);
                        x.children.push(item);
                    }
                });
            } else {
                let countId = this.kpis.length + 1;
                item.id += countId;
                item.ministryLead = this.ministries.find(x => x.id === item.ministryLeadId);
                this.kpis.push(item);
            }
            return 'ok';
        },
        updateKpi(id: number, body: any) {
            const index = this.kpis.findIndex(item => item.id === id);
            if (index !== -1) {
                this.kpis[index].frameworkId = body.frameworkId;; 
                this.kpis[index].logicalFrameworkId = body.logicalFrameworkId;
                this.kpis[index].nameKh = body.nameKh;
                this.kpis[index].nameEn = body.nameEn;
                this.kpis[index].weight = body.weight;
                this.kpis[index].frequencyId = body.frequencyId;
                this.kpis[index].resourceId = body.resourceId;
                this.kpis[index].typeId = body.typeId;
                this.kpis[index].ministryLeadId = body.ministryLeadId;
                this.kpis[index].ministry = body.ministry;
                this.kpis[index].practiceYearID = body.practiceYearID;
                this.kpis[index].groupId = body.groupId;
                this.kpis[index].calculationMethod = body.calculationMethod;
                this.kpis[index].dependance = body.dependance;
                this.kpis[index].numberVariable = body.numberVariable;
                this.kpis[index].formular = body.formular;
                this.kpis[index].status = body.status;
                this.kpis[index].children = body.children;
            }
            return 'ok';
        },
        // reporting
        inserData(id: number) {
            let kpi = this.kpis.find(x => x.id === id || x.children?.find((y: any) => y.id === id));
            return kpi?.id === id ? kpi : kpi?.children.find((y: any) => y.id === id) || {};
        }, 
        // evaluation
        getKpisByLM(id: number) {
            let kpis = this.kpis.filter(x => x.ministryLeadId === id);
            let ministry = this.ministries.find(x => x.id === id);

            return {
                kpis: kpis,
                ministry: ministry
            }
        },
        setLoading(status: boolean) {
            this.kpisLoading = status;
        },
    },
});
