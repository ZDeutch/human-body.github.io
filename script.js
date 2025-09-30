// Physiological States Data
const physiologicalStates = {
    homeostasis: {
        cardiovascular: {
            heartRate: { value: 72, unit: 'bpm', percentage: 24 },
            bloodPressure: { value: '120/80', unit: 'mmHg', percentage: 40 },
            cardiacOutput: { value: 5.0, unit: 'L/min', percentage: 25 }
        },
        hormones: {
            adrenaline: { value: 0.1, unit: 'μg/L', percentage: 5 },
            noradrenaline: { value: 0.3, unit: 'μg/L', percentage: 10 },
            cortisol: { value: 15, unit: 'μg/dL', percentage: 25 },
            growthHormone: { value: 2, unit: 'ng/mL', percentage: 20 },
            insulin: { value: 10, unit: 'μU/mL', percentage: 50 },
            glucagon: { value: 75, unit: 'pg/mL', percentage: 30 },
            lactate: { value: 1.5, unit: 'mmol/L', percentage: 15 },
            glucose: { value: 90, unit: 'mg/dL', percentage: 45 },
            bloodPH: { value: 7.40, unit: '', percentage: 50 }
        },
        molecular: {
            atpTurnover: { value: 65, unit: 'kg/day', percentage: 32 },
            creatinePhosphate: { value: 15, unit: 'mmol/kg', percentage: 50 },
            oxygenDebt: { value: 2, unit: 'L', percentage: 10 },
            dopamine: { value: 450, unit: 'pg/mL', percentage: 45 },
            serotonin: { value: 150, unit: 'ng/mL', percentage: 40 },
            gaba: { value: 85, unit: 'μmol/L', percentage: 35 },
            heatShockProteins: { value: 125, unit: 'ng/mL', percentage: 25 },
            ros: { value: 15, unit: 'μM', percentage: 30 },
            cytokines: { value: 2.5, unit: 'pg/mL', percentage: 20 },
            glycolysis: { percentage: 30 },
            krebs: { percentage: 65 },
            electronTransport: { percentage: 85 },
            betaOxidation: { percentage: 15 }
        },
        systems: {
            sympathetic: { level: 'Minimal Activity', status: 'low', description: 'The sympathetic nervous system is in minimal activation mode, maintaining basic regulatory functions.' },
            ras: { level: 'Normal Regulation', status: 'low', description: 'Blood pressure and fluid balance maintained through normal kidney function and vascular tone.' },
            thermoregulation: { level: 'Homeostatic Control', status: 'low', description: 'Core temperature maintained through minimal sweating and normal blood vessel diameter.' },
            aerobic: { percentage: 95 },
            anaerobic: { percentage: 5 }
        },
        respiratory: {
            breathingRate: { value: 12, unit: 'breaths/min', percentage: 20 },
            oxygenSat: { value: 98, unit: '%', percentage: 98 },
            tidalVolume: { value: 500, unit: 'mL', percentage: 25 }
        },
        metabolic: {
            coreTemp: { value: 98.6, unit: '°F', percentage: 50 },
            metabolicRate: { value: 1.0, unit: 'kcal/min', percentage: 10 },
            hydration: { value: 100, unit: '%', percentage: 100 }
        },
        neurological: {
            stressLevel: { value: 'Low', unit: '', percentage: 20 },
            alertness: { value: 'Normal', unit: '', percentage: 50 }
        },
        description: {
            title: 'Homeostasis',
            text: 'The body is in a balanced state with all systems functioning optimally. Heart rate, breathing, and temperature are maintained within normal ranges through various regulatory mechanisms.',
            changes: [
                'Autonomic nervous system maintains baseline functions',
                'Cardiovascular system operates at resting efficiency',
                'Respiratory rate optimized for current oxygen demands',
                'Thermoregulation maintains core temperature',
                'Metabolic processes balanced for energy conservation'
            ],
            mechanisms: {
                title: 'Homeostatic Regulation',
                description: 'The body maintains equilibrium through negative feedback loops. The hypothalamus acts as the central control center, monitoring temperature, blood pressure, and hormone levels. When deviations occur, corrective mechanisms are triggered to restore balance.',
                pathways: [
                    'Baroreceptor reflex maintains blood pressure',
                    'Chemoreceptors monitor blood pH and CO₂',
                    'Thermoreceptors control body temperature',
                    'Osmoregulation maintains fluid balance'
                ]
            }
        }
    },
    marathon: {
        cardiovascular: {
            heartRate: { value: 165, unit: 'bpm', percentage: 82 },
            bloodPressure: { value: '180/90', unit: 'mmHg', percentage: 75 },
            cardiacOutput: { value: 22.0, unit: 'L/min', percentage: 88 }
        },
        hormones: {
            adrenaline: { value: 2.8, unit: 'μg/L', percentage: 95 },
            noradrenaline: { value: 4.5, unit: 'μg/L', percentage: 90 },
            cortisol: { value: 45, unit: 'μg/dL', percentage: 85 },
            growthHormone: { value: 25, unit: 'ng/mL', percentage: 95 },
            insulin: { value: 5, unit: 'μU/mL', percentage: 25 },
            glucagon: { value: 180, unit: 'pg/mL', percentage: 75 },
            lactate: { value: 8.5, unit: 'mmol/L', percentage: 85 },
            glucose: { value: 140, unit: 'mg/dL', percentage: 70 },
            bloodPH: { value: 7.25, unit: '', percentage: 25 }
        },
        molecular: {
            atpTurnover: { value: 485, unit: 'kg/day', percentage: 95 },
            creatinePhosphate: { value: 3, unit: 'mmol/kg', percentage: 10 },
            oxygenDebt: { value: 18, unit: 'L', percentage: 90 },
            dopamine: { value: 1250, unit: 'pg/mL', percentage: 95 },
            serotonin: { value: 85, unit: 'ng/mL', percentage: 25 },
            gaba: { value: 45, unit: 'μmol/L', percentage: 18 },
            heatShockProteins: { value: 850, unit: 'ng/mL', percentage: 95 },
            ros: { value: 125, unit: 'μM', percentage: 95 },
            cytokines: { value: 45, unit: 'pg/mL', percentage: 90 },
            glycolysis: { percentage: 85 },
            krebs: { percentage: 25 },
            electronTransport: { percentage: 30 },
            betaOxidation: { percentage: 75 }
        },
        systems: {
            sympathetic: { level: 'Maximum Activation', status: 'high', description: 'Sympathetic nervous system at peak activation, flooding body with stress hormones and maximizing performance.' },
            ras: { level: 'Intense Regulation', status: 'high', description: 'Renin-angiotensin system working overtime to maintain blood pressure despite massive fluid losses.' },
            thermoregulation: { level: 'Crisis Mode', status: 'high', description: 'Maximum sweating, vasodilation, and heat dissipation mechanisms engaged to prevent overheating.' },
            aerobic: { percentage: 15 },
            anaerobic: { percentage: 85 }
        },
        respiratory: {
            breathingRate: { value: 45, unit: 'breaths/min', percentage: 90 },
            oxygenSat: { value: 95, unit: '%', percentage: 95 },
            tidalVolume: { value: 2800, unit: 'mL', percentage: 93 }
        },
        metabolic: {
            coreTemp: { value: 102.5, unit: '°F', percentage: 85 },
            metabolicRate: { value: 18.5, unit: 'kcal/min', percentage: 95 },
            hydration: { value: 78, unit: '%', percentage: 78 }
        },
        neurological: {
            stressLevel: { value: 'Very High', unit: '', percentage: 95 },
            alertness: { value: 'Heightened', unit: '', percentage: 90 }
        },
        description: {
            title: 'Marathon Running',
            text: 'The body is under extreme physiological stress with all systems working at maximum capacity. Cardiovascular, respiratory, and metabolic systems are dramatically elevated to meet energy demands.',
            changes: [
                'Sympathetic nervous system fully activated',
                'Heart rate increased 2-3x to maximize oxygen delivery',
                'Respiratory rate increased 4x for enhanced gas exchange',
                'Core temperature elevated due to massive heat production',
                'Stress hormones (cortisol, adrenaline) at peak levels',
                'Dehydration from excessive sweating and fluid loss',
                'Metabolic rate increased 15-20x above resting levels'
            ],
            mechanisms: {
                title: 'Exercise Stress Response',
                description: 'During marathon running, the body activates multiple emergency systems. The hypothalamic-pituitary-adrenal axis releases massive amounts of stress hormones. The sympathetic nervous system triggers fight-or-flight responses, while metabolic pathways shift to maximize energy production.',
                pathways: [
                    'Catecholamine surge increases heart rate and contractility',
                    'Anaerobic glycolysis produces lactate and ATP rapidly',
                    'Thermoregulatory mechanisms prevent dangerous overheating',
                    'Stress hormone cascade mobilizes energy stores',
                    'Respiratory drive increases to meet oxygen demands'
                ]
            }
        }
    }
};

// Current state
let currentState = 'homeostasis';
let isTransitioning = false;
let isTimelineMode = false;
let timelineInterval = null;
let currentTimelinePosition = 0;
let environmentalFactors = {
    temperature: 20, // °C
    altitude: 0,     // meters
    humidity: 50,    // %
    windSpeed: 5     // km/h
};
let historicalData = [];
let dataExportEnabled = true;

// Timeline data - physiological progression during marathon
const marathonTimeline = {
    0: { phase: 'Pre-Exercise', time: '0:00', description: 'Body at rest, preparing for exercise' },
    10: { phase: 'Warm-up', time: '2:00', description: 'Initial cardiovascular and metabolic activation' },
    20: { phase: 'Early Exercise', time: '10:00', description: 'Aerobic systems fully engaged, minimal stress' },
    35: { phase: 'Steady State', time: '30:00', description: 'Optimal performance zone, balanced energy systems' },
    50: { phase: 'Metabolic Shift', time: '1:00:00', description: 'Increased reliance on fat oxidation' },
    70: { phase: 'Physiological Stress', time: '2:00:00', description: 'Heat stress, dehydration beginning' },
    85: { phase: 'Critical Phase', time: '2:45:00', description: 'Maximum physiological stress, "hitting the wall"' },
    100: { phase: 'Final Push', time: '3:30:00+', description: 'Extreme stress, willpower overriding physiology' }
};

// DOM Elements with error checking
const homeostasisBtn = document.getElementById('homeostasisBtn');
const marathonBtn = document.getElementById('marathonBtn');
const timelineBtn = document.getElementById('timelineBtn');
const environmentBtn = document.getElementById('environmentBtn');
const analysisBtn = document.getElementById('analysisBtn');
const transitionBar = document.getElementById('transitionBar');
const bodySvg = document.getElementById('bodySvg');

// Check for critical DOM elements
if (!homeostasisBtn || !marathonBtn || !bodySvg) {
    console.error('Critical DOM elements not found. Please check HTML structure.');
}

// Timeline elements
const timelinePanel = document.getElementById('timelinePanel');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const speedSelect = document.getElementById('speedSelect');
const timelineSlider = document.getElementById('timelineSlider');
const currentTimeDisplay = document.getElementById('currentTimeDisplay');
const currentPhase = document.getElementById('currentPhase');

// Environmental elements
const environmentPanel = document.getElementById('environmentPanel');
const temperatureSlider = document.getElementById('temperatureSlider');
const altitudeSlider = document.getElementById('altitudeSlider');
const humiditySlider = document.getElementById('humiditySlider');
const windSlider = document.getElementById('windSlider');
const temperatureValue = document.getElementById('temperatureValue');
const altitudeValue = document.getElementById('altitudeValue');
const humidityValue = document.getElementById('humidityValue');
const windValue = document.getElementById('windValue');

// Analysis elements
const analysisPanel = document.getElementById('analysisPanel');
const historicalChart = document.getElementById('historicalChart');
const chartParameter = document.getElementById('chartParameter');

// Parameter elements
const parameterElements = {
    heartRate: document.getElementById('heartRate'),
    heartRateFill: document.getElementById('heartRateFill'),
    bloodPressure: document.getElementById('bloodPressure'),
    bloodPressureFill: document.getElementById('bloodPressureFill'),
    cardiacOutput: document.getElementById('cardiacOutput'),
    cardiacOutputFill: document.getElementById('cardiacOutputFill'),
    breathingRate: document.getElementById('breathingRate'),
    breathingRateFill: document.getElementById('breathingRateFill'),
    oxygenSat: document.getElementById('oxygenSat'),
    oxygenSatFill: document.getElementById('oxygenSatFill'),
    tidalVolume: document.getElementById('tidalVolume'),
    tidalVolumeFill: document.getElementById('tidalVolumeFill'),
    coreTemp: document.getElementById('coreTemp'),
    coreTempFill: document.getElementById('coreTempFill'),
    metabolicRate: document.getElementById('metabolicRate'),
    metabolicRateFill: document.getElementById('metabolicRateFill'),
    hydration: document.getElementById('hydration'),
    hydrationFill: document.getElementById('hydrationFill'),
    stressLevel: document.getElementById('stressLevel'),
    stressLevelFill: document.getElementById('stressLevelFill'),
    alertness: document.getElementById('alertness'),
    alertnessFill: document.getElementById('alertnessFill'),
    // Hormone elements
    adrenaline: document.getElementById('adrenaline'),
    adrenalineFill: document.getElementById('adrenalineFill'),
    noradrenaline: document.getElementById('noradrenaline'),
    noradrenalineFill: document.getElementById('noradrenalineFill'),
    cortisol: document.getElementById('cortisol'),
    cortisolFill: document.getElementById('cortisolFill'),
    growthHormone: document.getElementById('growthHormone'),
    growthHormoneFill: document.getElementById('growthHormoneFill'),
    insulin: document.getElementById('insulin'),
    insulinFill: document.getElementById('insulinFill'),
    glucagon: document.getElementById('glucagon'),
    glucagonFill: document.getElementById('glucagonFill'),
    lactate: document.getElementById('lactate'),
    lactateFill: document.getElementById('lactateFill'),
    glucose: document.getElementById('glucose'),
    glucoseFill: document.getElementById('glucoseFill'),
    bloodPH: document.getElementById('bloodPH'),
    bloodPHFill: document.getElementById('bloodPHFill'),
    // System elements
    sympatheticLevel: document.getElementById('sympatheticLevel'),
    sympatheticIndicator: document.getElementById('sympatheticIndicator'),
    sympatheticDescription: document.getElementById('sympatheticDescription'),
    rasLevel: document.getElementById('rasLevel'),
    rasIndicator: document.getElementById('rasIndicator'),
    rasDescription: document.getElementById('rasDescription'),
    thermoLevel: document.getElementById('thermoLevel'),
    thermoIndicator: document.getElementById('thermoIndicator'),
    thermoDescription: document.getElementById('thermoDescription'),
    aerobicFill: document.getElementById('aerobicFill'),
    aerobicPercent: document.getElementById('aerobicPercent'),
    anaerobicFill: document.getElementById('anaerobicFill'),
    anaerobicPercent: document.getElementById('anaerobicPercent'),
    // Molecular elements
    atpTurnover: document.getElementById('atpTurnover'),
    atpTurnoverFill: document.getElementById('atpTurnoverFill'),
    creatinePhosphate: document.getElementById('creatinePhosphate'),
    creatinePhosphateFill: document.getElementById('creatinePhosphateFill'),
    oxygenDebt: document.getElementById('oxygenDebt'),
    oxygenDebtFill: document.getElementById('oxygenDebtFill'),
    dopamine: document.getElementById('dopamine'),
    dopamineFill: document.getElementById('dopamineFill'),
    serotonin: document.getElementById('serotonin'),
    serotoninFill: document.getElementById('serotoninFill'),
    gaba: document.getElementById('gaba'),
    gabaFill: document.getElementById('gabaFill'),
    heatShockProteins: document.getElementById('heatShockProteins'),
    heatShockProteinsFill: document.getElementById('heatShockProteinsFill'),
    ros: document.getElementById('ros'),
    rosFill: document.getElementById('rosFill'),
    cytokines: document.getElementById('cytokines'),
    cytokinesFill: document.getElementById('cytokinesFill'),
    glycolysisFill: document.getElementById('glycolysisFill'),
    glycolysisPercent: document.getElementById('glycolysisPercent'),
    krebsFill: document.getElementById('krebsFill'),
    krebsPercent: document.getElementById('krebsPercent'),
    electronTransportFill: document.getElementById('electronTransportFill'),
    electronTransportPercent: document.getElementById('electronTransportPercent'),
    betaOxidationFill: document.getElementById('betaOxidationFill'),
    betaOxidationPercent: document.getElementById('betaOxidationPercent')
};

// Info panel elements
const stateTitle = document.getElementById('stateTitle');
const stateDescription = document.getElementById('stateDescription');
const changesList = document.getElementById('changesList');
const mechanismTitle = document.getElementById('mechanismTitle');
const mechanismDescription = document.getElementById('mechanismDescription');
const pathwaysList = document.getElementById('pathwaysList');

// Animation functions
function animateParameter(element, fillElement, targetValue, targetPercentage, duration = 2000) {
    // Add error checking for DOM elements
    if (!element || !fillElement) {
        console.warn('Missing DOM elements for animation');
        return;
    }
    
    const startValue = parseFloat(element.textContent) || 0;
    const startPercentage = parseFloat(fillElement.style.width) || 0;
    
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        try {
            // Animate numerical value
            if (typeof targetValue === 'number') {
                const currentValue = startValue + (targetValue - startValue) * easeProgress;
                element.textContent = currentValue.toFixed(1);
            } else {
                if (progress >= 0.5) {
                    element.textContent = targetValue;
                }
            }
            
            // Animate progress bar
            const currentPercentage = startPercentage + (targetPercentage - startPercentage) * easeProgress;
            fillElement.style.width = currentPercentage + '%';
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        } catch (error) {
            console.warn('Animation error:', error);
        }
    }
    
    requestAnimationFrame(animate);
}

function updateParameters(state) {
    const stateData = physiologicalStates[state];
    const environmentalEffects = calculateEnvironmentalEffects();
    
    // Apply environmental modifications to base parameters
    const modifiedData = applyEnvironmentalModifications(stateData, environmentalEffects);
    
    // Update cardiovascular parameters with environmental effects
    animateParameter(parameterElements.heartRate, parameterElements.heartRateFill, 
        modifiedData.cardiovascular.heartRate.value, modifiedData.cardiovascular.heartRate.percentage);
    
    parameterElements.bloodPressure.textContent = modifiedData.cardiovascular.bloodPressure.value;
    parameterElements.bloodPressureFill.style.width = modifiedData.cardiovascular.bloodPressure.percentage + '%';
    
    animateParameter(parameterElements.cardiacOutput, parameterElements.cardiacOutputFill,
        modifiedData.cardiovascular.cardiacOutput.value, modifiedData.cardiovascular.cardiacOutput.percentage);
    
    // Update respiratory parameters with environmental effects
    animateParameter(parameterElements.breathingRate, parameterElements.breathingRateFill,
        modifiedData.respiratory.breathingRate.value, modifiedData.respiratory.breathingRate.percentage);
    
    animateParameter(parameterElements.oxygenSat, parameterElements.oxygenSatFill,
        modifiedData.respiratory.oxygenSat.value, modifiedData.respiratory.oxygenSat.percentage);
    
    animateParameter(parameterElements.tidalVolume, parameterElements.tidalVolumeFill,
        modifiedData.respiratory.tidalVolume.value, modifiedData.respiratory.tidalVolume.percentage);
    
    // Update metabolic parameters with environmental effects
    animateParameter(parameterElements.coreTemp, parameterElements.coreTempFill,
        modifiedData.metabolic.coreTemp.value, modifiedData.metabolic.coreTemp.percentage);
    
    animateParameter(parameterElements.metabolicRate, parameterElements.metabolicRateFill,
        modifiedData.metabolic.metabolicRate.value, modifiedData.metabolic.metabolicRate.percentage);
    
    animateParameter(parameterElements.hydration, parameterElements.hydrationFill,
        modifiedData.metabolic.hydration.value, modifiedData.metabolic.hydration.percentage);
    
    // Update neurological parameters
    parameterElements.stressLevel.textContent = stateData.neurological.stressLevel.value;
    parameterElements.stressLevelFill.style.width = stateData.neurological.stressLevel.percentage + '%';
    
    parameterElements.alertness.textContent = stateData.neurological.alertness.value;
    parameterElements.alertnessFill.style.width = stateData.neurological.alertness.percentage + '%';
}

function updateHormones(state) {
    const stateData = physiologicalStates[state];
    const environmentalEffects = calculateEnvironmentalEffects();
    
    // Apply environmental modifications to hormones
    const modifiedHormones = applyEnvironmentalHormoneModifications(stateData.hormones, environmentalEffects);
    
    // Update hormone parameters with environmental effects
    animateParameter(parameterElements.adrenaline, parameterElements.adrenalineFill,
        modifiedHormones.adrenaline.value, modifiedHormones.adrenaline.percentage);
    
    animateParameter(parameterElements.noradrenaline, parameterElements.noradrenalineFill,
        modifiedHormones.noradrenaline.value, modifiedHormones.noradrenaline.percentage);
    
    animateParameter(parameterElements.cortisol, parameterElements.cortisolFill,
        modifiedHormones.cortisol.value, modifiedHormones.cortisol.percentage);
    
    animateParameter(parameterElements.growthHormone, parameterElements.growthHormoneFill,
        modifiedHormones.growthHormone.value, modifiedHormones.growthHormone.percentage);
    
    animateParameter(parameterElements.insulin, parameterElements.insulinFill,
        modifiedHormones.insulin.value, modifiedHormones.insulin.percentage);
    
    animateParameter(parameterElements.glucagon, parameterElements.glucagonFill,
        modifiedHormones.glucagon.value, modifiedHormones.glucagon.percentage);
    
    animateParameter(parameterElements.lactate, parameterElements.lactateFill,
        modifiedHormones.lactate.value, modifiedHormones.lactate.percentage);
    
    animateParameter(parameterElements.glucose, parameterElements.glucoseFill,
        modifiedHormones.glucose.value, modifiedHormones.glucose.percentage);
    
    animateParameter(parameterElements.bloodPH, parameterElements.bloodPHFill,
        modifiedHormones.bloodPH.value, modifiedHormones.bloodPH.percentage);
}

function updateMolecular(state) {
    const stateData = physiologicalStates[state];
    
    // Update molecular parameters
    animateParameter(parameterElements.atpTurnover, parameterElements.atpTurnoverFill,
        stateData.molecular.atpTurnover.value, stateData.molecular.atpTurnover.percentage);
    
    animateParameter(parameterElements.creatinePhosphate, parameterElements.creatinePhosphateFill,
        stateData.molecular.creatinePhosphate.value, stateData.molecular.creatinePhosphate.percentage);
    
    animateParameter(parameterElements.oxygenDebt, parameterElements.oxygenDebtFill,
        stateData.molecular.oxygenDebt.value, stateData.molecular.oxygenDebt.percentage);
    
    animateParameter(parameterElements.dopamine, parameterElements.dopamineFill,
        stateData.molecular.dopamine.value, stateData.molecular.dopamine.percentage);
    
    animateParameter(parameterElements.serotonin, parameterElements.serotoninFill,
        stateData.molecular.serotonin.value, stateData.molecular.serotonin.percentage);
    
    animateParameter(parameterElements.gaba, parameterElements.gabaFill,
        stateData.molecular.gaba.value, stateData.molecular.gaba.percentage);
    
    animateParameter(parameterElements.heatShockProteins, parameterElements.heatShockProteinsFill,
        stateData.molecular.heatShockProteins.value, stateData.molecular.heatShockProteins.percentage);
    
    animateParameter(parameterElements.ros, parameterElements.rosFill,
        stateData.molecular.ros.value, stateData.molecular.ros.percentage);
    
    animateParameter(parameterElements.cytokines, parameterElements.cytokinesFill,
        stateData.molecular.cytokines.value, stateData.molecular.cytokines.percentage);
    
    // Update metabolic pathways
    parameterElements.glycolysisFill.style.width = stateData.molecular.glycolysis.percentage + '%';
    parameterElements.glycolysisPercent.textContent = stateData.molecular.glycolysis.percentage + '%';
    
    parameterElements.krebsFill.style.width = stateData.molecular.krebs.percentage + '%';
    parameterElements.krebsPercent.textContent = stateData.molecular.krebs.percentage + '%';
    
    parameterElements.electronTransportFill.style.width = stateData.molecular.electronTransport.percentage + '%';
    parameterElements.electronTransportPercent.textContent = stateData.molecular.electronTransport.percentage + '%';
    
    parameterElements.betaOxidationFill.style.width = stateData.molecular.betaOxidation.percentage + '%';
    parameterElements.betaOxidationPercent.textContent = stateData.molecular.betaOxidation.percentage + '%';
}

function updateSystems(state) {
    const stateData = physiologicalStates[state];
    
    // Update system status
    parameterElements.sympatheticLevel.textContent = stateData.systems.sympathetic.level;
    parameterElements.sympatheticIndicator.className = `status-indicator ${stateData.systems.sympathetic.status}`;
    parameterElements.sympatheticDescription.textContent = stateData.systems.sympathetic.description;
    
    parameterElements.rasLevel.textContent = stateData.systems.ras.level;
    parameterElements.rasIndicator.className = `status-indicator ${stateData.systems.ras.status}`;
    parameterElements.rasDescription.textContent = stateData.systems.ras.description;
    
    parameterElements.thermoLevel.textContent = stateData.systems.thermoregulation.level;
    parameterElements.thermoIndicator.className = `status-indicator ${stateData.systems.thermoregulation.status}`;
    parameterElements.thermoDescription.textContent = stateData.systems.thermoregulation.description;
    
    // Update energy systems
    parameterElements.aerobicFill.style.width = stateData.systems.aerobic.percentage + '%';
    parameterElements.aerobicPercent.textContent = stateData.systems.aerobic.percentage + '%';
    
    parameterElements.anaerobicFill.style.width = stateData.systems.anaerobic.percentage + '%';
    parameterElements.anaerobicPercent.textContent = stateData.systems.anaerobic.percentage + '%';
}

function updateVisualization(state) {
    // Remove existing state classes
    bodySvg.classList.remove('homeostasis-state', 'marathon-state');
    
    // Add new state class
    bodySvg.classList.add(state + '-state');
    
    // Update parameter bar colors based on state
    const fills = document.querySelectorAll('.parameter-fill');
    fills.forEach(fill => {
        if (state === 'marathon') {
            fill.style.background = 'linear-gradient(90deg, #ff4757, #ff3838)';
        } else {
            fill.style.background = 'linear-gradient(90deg, #4facfe, #00f2fe)';
        }
    });
}

function updateInfoPanel(state) {
    const stateData = physiologicalStates[state];
    
    stateTitle.textContent = stateData.description.title;
    stateDescription.textContent = stateData.description.text;
    
    // Update changes list
    changesList.innerHTML = '';
    stateData.description.changes.forEach(change => {
        const li = document.createElement('li');
        li.textContent = change;
        changesList.appendChild(li);
    });
    
    // Update scientific mechanisms
    mechanismTitle.textContent = stateData.description.mechanisms.title;
    mechanismDescription.textContent = stateData.description.mechanisms.description;
    
    // Update pathways list
    pathwaysList.innerHTML = '';
    stateData.description.mechanisms.pathways.forEach(pathway => {
        const li = document.createElement('li');
        li.textContent = pathway;
        pathwaysList.appendChild(li);
    });
}

function transitionToState(newState) {
    if (isTransitioning || currentState === newState) return;
    
    isTransitioning = true;
    
    // Update button states
    homeostasisBtn.classList.toggle('active', newState === 'homeostasis');
    marathonBtn.classList.toggle('active', newState === 'marathon');
    
    // Show transition progress
    transitionBar.style.width = '100%';
    
    setTimeout(() => {
        // Update all components
        updateParameters(newState);
        updateHormones(newState);
        updateMolecular(newState);
        updateSystems(newState);
        updateVisualization(newState);
        updateInfoPanel(newState);
        
        currentState = newState;
        
        setTimeout(() => {
            transitionBar.style.width = '0%';
            isTransitioning = false;
        }, 2000);
    }, 100);
}

// Real-time animations
function startHeartAnimation() {
    const heart = document.getElementById('heart');
    const currentRate = physiologicalStates[currentState].cardiovascular.heartRate.value;
    const interval = 60000 / currentRate; // Convert BPM to milliseconds
    
    heart.style.animationDuration = (interval / 1000) + 's';
}

function startBreathingAnimation() {
    const breathingIndicator = document.getElementById('breathingIndicator');
    const lungs = document.querySelectorAll('#leftLung, #rightLung');
    const currentRate = physiologicalStates[currentState].respiratory.breathingRate.value;
    const interval = 60000 / currentRate; // Convert breaths per minute to milliseconds
    
    const duration = (interval / 1000) + 's';
    breathingIndicator.style.animationDuration = duration;
    lungs.forEach(lung => {
        lung.style.animationDuration = duration;
    });
}

function updateAnimations() {
    startHeartAnimation();
    startBreathingAnimation();
}

// Timeline Functions
function interpolateTimelineData(position) {
    // Find the two closest timeline points
    const positions = Object.keys(marathonTimeline).map(Number).sort((a, b) => a - b);
    let lowerPos = 0, upperPos = 100;
    
    for (let i = 0; i < positions.length - 1; i++) {
        if (position >= positions[i] && position <= positions[i + 1]) {
            lowerPos = positions[i];
            upperPos = positions[i + 1];
            break;
        }
    }
    
    // Calculate interpolation factor
    const factor = upperPos === lowerPos ? 0 : (position - lowerPos) / (upperPos - lowerPos);
    
    // Interpolate between homeostasis and marathon states
    const homeostasis = physiologicalStates.homeostasis;
    const marathon = physiologicalStates.marathon;
    
    const interpolatedState = {
        cardiovascular: {},
        respiratory: {},
        metabolic: {},
        neurological: {},
        hormones: {},
        molecular: {},
        systems: {}
    };
    
    // Interpolate each parameter category
    ['cardiovascular', 'respiratory', 'metabolic', 'neurological', 'hormones', 'molecular'].forEach(category => {
        Object.keys(homeostasis[category]).forEach(param => {
            if (typeof homeostasis[category][param].value === 'number') {
                const homeValue = homeostasis[category][param].value;
                const marathonValue = marathon[category][param].value;
                interpolatedState[category][param] = {
                    ...homeostasis[category][param],
                    value: homeValue + (marathonValue - homeValue) * factor,
                    percentage: homeostasis[category][param].percentage + 
                              (marathon[category][param].percentage - homeostasis[category][param].percentage) * factor
                };
            } else {
                // For non-numeric values, switch at 50% point
                interpolatedState[category][param] = factor > 0.5 ? 
                    marathon[category][param] : homeostasis[category][param];
            }
        });
    });
    
    // Interpolate systems
    Object.keys(homeostasis.systems).forEach(system => {
        if (typeof homeostasis.systems[system].percentage !== 'undefined') {
            interpolatedState.systems[system] = {
                percentage: homeostasis.systems[system].percentage + 
                           (marathon.systems[system].percentage - homeostasis.systems[system].percentage) * factor
            };
        } else {
            interpolatedState.systems[system] = factor > 0.5 ? 
                marathon.systems[system] : homeostasis.systems[system];
        }
    });
    
    return interpolatedState;
}

function updateTimelineDisplay(position) {
    // Find closest timeline marker
    const positions = Object.keys(marathonTimeline).map(Number);
    let closestPos = positions.reduce((prev, curr) => 
        Math.abs(curr - position) < Math.abs(prev - position) ? curr : prev
    );
    
    const timelineData = marathonTimeline[closestPos];
    currentTimeDisplay.textContent = timelineData.time;
    currentPhase.textContent = timelineData.phase;
    
    // Update timeline-specific description
    const stateDescription = document.getElementById('stateDescription');
    stateDescription.textContent = timelineData.description;
}

function playTimeline() {
    if (timelineInterval) return;
    
    const speed = parseFloat(speedSelect.value);
    timelineInterval = setInterval(() => {
        currentTimelinePosition += speed;
        if (currentTimelinePosition > 100) {
            currentTimelinePosition = 100;
            pauseTimeline();
        }
        
        timelineSlider.value = currentTimelinePosition;
        updateTimelineState(currentTimelinePosition);
    }, 100);
}

function pauseTimeline() {
    if (timelineInterval) {
        clearInterval(timelineInterval);
        timelineInterval = null;
    }
}

function resetTimeline() {
    pauseTimeline();
    currentTimelinePosition = 0;
    timelineSlider.value = 0;
    updateTimelineState(0);
}

function updateTimelineState(position) {
    const interpolatedState = interpolateTimelineData(position);
    
    // Update all displays with interpolated data
    updateParametersWithData(interpolatedState);
    updateHormonesWithData(interpolatedState);
    updateMolecularWithData(interpolatedState);
    updateSystemsWithData(interpolatedState);
    updateTimelineDisplay(position);
    
    // Update visualization based on intensity
    const intensity = position / 100;
    if (intensity > 0.3) {
        bodySvg.classList.add('marathon-state');
        bodySvg.classList.remove('homeostasis-state');
    } else {
        bodySvg.classList.add('homeostasis-state');
        bodySvg.classList.remove('marathon-state');
    }
}

function updateParametersWithData(stateData) {
    // Similar to updateParameters but with custom data
    Object.keys(stateData.cardiovascular).forEach(param => {
        if (parameterElements[param] && parameterElements[param + 'Fill']) {
            animateParameter(parameterElements[param], parameterElements[param + 'Fill'],
                stateData.cardiovascular[param].value, stateData.cardiovascular[param].percentage, 500);
        }
    });
    
    Object.keys(stateData.respiratory).forEach(param => {
        if (parameterElements[param] && parameterElements[param + 'Fill']) {
            animateParameter(parameterElements[param], parameterElements[param + 'Fill'],
                stateData.respiratory[param].value, stateData.respiratory[param].percentage, 500);
        }
    });
    
    Object.keys(stateData.metabolic).forEach(param => {
        if (parameterElements[param] && parameterElements[param + 'Fill']) {
            animateParameter(parameterElements[param], parameterElements[param + 'Fill'],
                stateData.metabolic[param].value, stateData.metabolic[param].percentage, 500);
        }
    });
    
    Object.keys(stateData.neurological).forEach(param => {
        if (parameterElements[param] && parameterElements[param + 'Fill']) {
            if (typeof stateData.neurological[param].value === 'string') {
                parameterElements[param].textContent = stateData.neurological[param].value;
                parameterElements[param + 'Fill'].style.width = stateData.neurological[param].percentage + '%';
            } else {
                animateParameter(parameterElements[param], parameterElements[param + 'Fill'],
                    stateData.neurological[param].value, stateData.neurological[param].percentage, 500);
            }
        }
    });
}

function updateHormonesWithData(stateData) {
    Object.keys(stateData.hormones).forEach(param => {
        if (parameterElements[param] && parameterElements[param + 'Fill']) {
            animateParameter(parameterElements[param], parameterElements[param + 'Fill'],
                stateData.hormones[param].value, stateData.hormones[param].percentage, 500);
        }
    });
}

function updateMolecularWithData(stateData) {
    Object.keys(stateData.molecular).forEach(param => {
        if (parameterElements[param] && parameterElements[param + 'Fill']) {
            if (typeof stateData.molecular[param].value !== 'undefined') {
                animateParameter(parameterElements[param], parameterElements[param + 'Fill'],
                    stateData.molecular[param].value, stateData.molecular[param].percentage, 500);
            }
        }
    });
    
    // Update pathway percentages
    if (parameterElements.glycolysisFill) {
        parameterElements.glycolysisFill.style.width = stateData.molecular.glycolysis.percentage + '%';
        parameterElements.glycolysisPercent.textContent = stateData.molecular.glycolysis.percentage + '%';
    }
    if (parameterElements.krebsFill) {
        parameterElements.krebsFill.style.width = stateData.molecular.krebs.percentage + '%';
        parameterElements.krebsPercent.textContent = stateData.molecular.krebs.percentage + '%';
    }
    if (parameterElements.electronTransportFill) {
        parameterElements.electronTransportFill.style.width = stateData.molecular.electronTransport.percentage + '%';
        parameterElements.electronTransportPercent.textContent = stateData.molecular.electronTransport.percentage + '%';
    }
    if (parameterElements.betaOxidationFill) {
        parameterElements.betaOxidationFill.style.width = stateData.molecular.betaOxidation.percentage + '%';
        parameterElements.betaOxidationPercent.textContent = stateData.molecular.betaOxidation.percentage + '%';
    }
}

function updateSystemsWithData(stateData) {
    if (parameterElements.sympatheticLevel) {
        parameterElements.sympatheticLevel.textContent = stateData.systems.sympathetic.level;
        parameterElements.sympatheticIndicator.className = `status-indicator ${stateData.systems.sympathetic.status}`;
        parameterElements.sympatheticDescription.textContent = stateData.systems.sympathetic.description;
    }
    
    if (parameterElements.rasLevel) {
        parameterElements.rasLevel.textContent = stateData.systems.ras.level;
        parameterElements.rasIndicator.className = `status-indicator ${stateData.systems.ras.status}`;
        parameterElements.rasDescription.textContent = stateData.systems.ras.description;
    }
    
    if (parameterElements.thermoLevel) {
        parameterElements.thermoLevel.textContent = stateData.systems.thermoregulation.level;
        parameterElements.thermoIndicator.className = `status-indicator ${stateData.systems.thermoregulation.status}`;
        parameterElements.thermoDescription.textContent = stateData.systems.thermoregulation.description;
    }
    
    if (parameterElements.aerobicFill) {
        parameterElements.aerobicFill.style.width = stateData.systems.aerobic.percentage + '%';
        parameterElements.aerobicPercent.textContent = stateData.systems.aerobic.percentage + '%';
    }
    
    if (parameterElements.anaerobicFill) {
        parameterElements.anaerobicFill.style.width = stateData.systems.anaerobic.percentage + '%';
        parameterElements.anaerobicPercent.textContent = stateData.systems.anaerobic.percentage + '%';
    }
}

// Event listeners
homeostasisBtn.addEventListener('click', () => {
    isTimelineMode = false;
    timelinePanel.style.display = 'none';
    pauseTimeline();
    transitionToState('homeostasis');
});

marathonBtn.addEventListener('click', () => {
    isTimelineMode = false;
    timelinePanel.style.display = 'none';
    pauseTimeline();
    transitionToState('marathon');
});

timelineBtn.addEventListener('click', () => {
    isTimelineMode = true;
    timelinePanel.style.display = 'block';
    
    // Remove active states from other buttons
    homeostasisBtn.classList.remove('active');
    marathonBtn.classList.remove('active');
    timelineBtn.classList.add('active');
    
    resetTimeline();
});

// Timeline control event listeners
playBtn.addEventListener('click', playTimeline);
pauseBtn.addEventListener('click', pauseTimeline);
resetBtn.addEventListener('click', resetTimeline);

timelineSlider.addEventListener('input', (e) => {
    if (!timelineInterval) { // Only allow manual control when not playing
        currentTimelinePosition = parseInt(e.target.value);
        updateTimelineState(currentTimelinePosition);
    }
});

// Environmental modeling functions
function calculateEnvironmentalEffects() {
    const temp = environmentalFactors.temperature;
    const altitude = environmentalFactors.altitude;
    const humidity = environmentalFactors.humidity;
    const windSpeed = environmentalFactors.windSpeed;
    
    // Heat stress calculation (based on heat index)
    let heatStress = 0;
    if (temp > 25) {
        const heatIndex = temp + (humidity / 100) * (temp - 14.5) - windSpeed * 0.5;
        heatStress = Math.min(Math.max((heatIndex - 25) / 20 * 100, 0), 100);
    }
    
    // Oxygen availability (altitude effect)
    const oxygenAvailability = Math.max(100 - (altitude / 5000) * 30, 70);
    
    // Dehydration risk (temperature + humidity + exercise)
    let dehydrationRisk = (temp - 20) * 2 + (humidity - 50) * 0.5;
    if (currentState === 'marathon') dehydrationRisk *= 3;
    dehydrationRisk = Math.min(Math.max(dehydrationRisk, 0), 100);
    
    return { heatStress, oxygenAvailability, dehydrationRisk };
}

// Apply environmental modifications to physiological parameters
function applyEnvironmentalModifications(baseData, environmentalEffects) {
    const modifiedData = JSON.parse(JSON.stringify(baseData)); // Deep copy
    
    const temp = environmentalFactors.temperature;
    const altitude = environmentalFactors.altitude;
    const humidity = environmentalFactors.humidity;
    const windSpeed = environmentalFactors.windSpeed;
    
    // CARDIOVASCULAR MODIFICATIONS
    
    // Heart Rate increases with temperature and altitude
    let heartRateModifier = 1;
    if (temp > 25) {
        heartRateModifier += (temp - 25) * 0.015; // +1.5% per degree above 25°C
    }
    if (temp < 10) {
        heartRateModifier += (10 - temp) * 0.008; // Cold stress
    }
    if (altitude > 1000) {
        heartRateModifier += (altitude / 1000) * 0.05; // +5% per 1000m altitude
    }
    
    modifiedData.cardiovascular.heartRate.value = Math.round(baseData.cardiovascular.heartRate.value * heartRateModifier);
    modifiedData.cardiovascular.heartRate.percentage = Math.min(modifiedData.cardiovascular.heartRate.value / 200 * 100, 100);
    
    // Blood Pressure increases with altitude and extreme temperatures
    let bpModifier = 1;
    if (altitude > 1500) {
        bpModifier += (altitude / 3000) * 0.1; // Altitude hypertension
    }
    if (temp > 35 || temp < 5) {
        bpModifier += 0.05; // Extreme temperature stress
    }
    
    const baseBP = baseData.cardiovascular.bloodPressure.value.split('/');
    const newSystolic = Math.round(parseInt(baseBP[0]) * bpModifier);
    const newDiastolic = Math.round(parseInt(baseBP[1]) * bpModifier);
    modifiedData.cardiovascular.bloodPressure.value = `${newSystolic}/${newDiastolic}`;
    modifiedData.cardiovascular.bloodPressure.percentage = Math.min(newSystolic / 200 * 100, 100);
    
    // Cardiac Output adjusts with heart rate and environmental stress
    const cardiacOutputModifier = heartRateModifier * 0.8; // Less pronounced than HR
    modifiedData.cardiovascular.cardiacOutput.value = parseFloat((baseData.cardiovascular.cardiacOutput.value * cardiacOutputModifier).toFixed(1));
    modifiedData.cardiovascular.cardiacOutput.percentage = Math.min(modifiedData.cardiovascular.cardiacOutput.value / 25 * 100, 100);
    
    // RESPIRATORY MODIFICATIONS
    
    // Breathing Rate increases with altitude (oxygen compensation) and temperature
    let breathingModifier = 1;
    if (altitude > 1000) {
        breathingModifier += (altitude / 2000) * 0.2; // +20% per 2000m
    }
    if (temp > 30) {
        breathingModifier += (temp - 30) * 0.02; // Heat stress breathing
    }
    
    modifiedData.respiratory.breathingRate.value = Math.round(baseData.respiratory.breathingRate.value * breathingModifier);
    modifiedData.respiratory.breathingRate.percentage = Math.min(modifiedData.respiratory.breathingRate.value / 60 * 100, 100);
    
    // Oxygen Saturation decreases with altitude
    let oxygenSatModifier = environmentalEffects.oxygenAvailability / 100;
    modifiedData.respiratory.oxygenSat.value = Math.round(baseData.respiratory.oxygenSat.value * oxygenSatModifier);
    modifiedData.respiratory.oxygenSat.percentage = modifiedData.respiratory.oxygenSat.value;
    
    // Tidal Volume increases to compensate for altitude
    let tidalVolumeModifier = 1;
    if (altitude > 1500) {
        tidalVolumeModifier += (altitude / 3000) * 0.3; // Compensatory increase
    }
    
    modifiedData.respiratory.tidalVolume.value = Math.round(baseData.respiratory.tidalVolume.value * tidalVolumeModifier);
    modifiedData.respiratory.tidalVolume.percentage = Math.min(modifiedData.respiratory.tidalVolume.value / 4000 * 100, 100);
    
    // METABOLIC MODIFICATIONS
    
    // Core Temperature affected by ambient temperature and humidity
    let tempModifier = 0;
    if (temp > 25) {
        // Heat stress increases core temperature
        tempModifier += (temp - 25) * 0.05 * (humidity / 100); // Humidity amplifies effect
        tempModifier -= windSpeed * 0.02; // Wind cooling effect
    }
    if (temp < 15) {
        // Cold stress can initially increase core temp (shivering thermogenesis)
        tempModifier += (15 - temp) * 0.02;
    }
    
    modifiedData.metabolic.coreTemp.value = parseFloat((baseData.metabolic.coreTemp.value + tempModifier).toFixed(1));
    modifiedData.metabolic.coreTemp.percentage = Math.min((modifiedData.metabolic.coreTemp.value - 95) / 10 * 100, 100);
    
    // Metabolic Rate increases with temperature stress and altitude
    let metabolicModifier = 1;
    if (temp > 30 || temp < 10) {
        metabolicModifier += 0.1; // Thermoregulation cost
    }
    if (altitude > 2000) {
        metabolicModifier += 0.05; // Altitude adaptation cost
    }
    
    modifiedData.metabolic.metabolicRate.value = parseFloat((baseData.metabolic.metabolicRate.value * metabolicModifier).toFixed(1));
    modifiedData.metabolic.metabolicRate.percentage = Math.min(modifiedData.metabolic.metabolicRate.value / 20 * 100, 100);
    
    // Hydration decreases with temperature and low humidity
    let hydrationModifier = 1;
    if (temp > 25) {
        hydrationModifier -= (temp - 25) * 0.01 * ((100 - humidity) / 100); // Heat + dry air
    }
    if (altitude > 2000) {
        hydrationModifier -= 0.02; // Altitude dehydration
    }
    
    modifiedData.metabolic.hydration.value = Math.round(baseData.metabolic.hydration.value * hydrationModifier);
    modifiedData.metabolic.hydration.percentage = modifiedData.metabolic.hydration.value;
    
    return modifiedData;
}

// Apply environmental modifications to hormone levels
function applyEnvironmentalHormoneModifications(baseHormones, environmentalEffects) {
    const modifiedHormones = JSON.parse(JSON.stringify(baseHormones)); // Deep copy
    
    const temp = environmentalFactors.temperature;
    const altitude = environmentalFactors.altitude;
    const humidity = environmentalFactors.humidity;
    
    // Stress hormones increase with environmental stressors
    let stressMultiplier = 1;
    
    // Temperature stress
    if (temp > 30 || temp < 5) {
        stressMultiplier += 0.3; // 30% increase for temperature extremes
    }
    
    // Altitude stress
    if (altitude > 2000) {
        stressMultiplier += (altitude / 3000) * 0.4; // Up to 40% increase at high altitude
    }
    
    // Low humidity stress (dehydration)
    if (humidity < 30) {
        stressMultiplier += 0.2; // 20% increase in dry conditions
    }
    
    // Apply stress multiplier to stress hormones
    modifiedHormones.adrenaline.value = parseFloat((baseHormones.adrenaline.value * stressMultiplier).toFixed(1));
    modifiedHormones.adrenaline.percentage = Math.min(modifiedHormones.adrenaline.value / 3 * 100, 100);
    
    modifiedHormones.noradrenaline.value = parseFloat((baseHormones.noradrenaline.value * stressMultiplier).toFixed(1));
    modifiedHormones.noradrenaline.percentage = Math.min(modifiedHormones.noradrenaline.value / 5 * 100, 100);
    
    modifiedHormones.cortisol.value = Math.round(baseHormones.cortisol.value * stressMultiplier);
    modifiedHormones.cortisol.percentage = Math.min(modifiedHormones.cortisol.value / 50 * 100, 100);
    
    // Growth hormone increases with altitude (adaptation response)
    let ghMultiplier = 1;
    if (altitude > 1500) {
        ghMultiplier += (altitude / 4000) * 0.5; // Up to 50% increase
    }
    
    modifiedHormones.growthHormone.value = Math.round(baseHormones.growthHormone.value * ghMultiplier);
    modifiedHormones.growthHormone.percentage = Math.min(modifiedHormones.growthHormone.value / 30 * 100, 100);
    
    // Insulin sensitivity decreases with stress
    let insulinMultiplier = 1 / stressMultiplier; // Inverse relationship
    modifiedHormones.insulin.value = Math.round(baseHormones.insulin.value * insulinMultiplier);
    modifiedHormones.insulin.percentage = Math.min(modifiedHormones.insulin.value / 20 * 100, 100);
    
    // Glucagon increases with stress (glucose mobilization)
    modifiedHormones.glucagon.value = Math.round(baseHormones.glucagon.value * stressMultiplier);
    modifiedHormones.glucagon.percentage = Math.min(modifiedHormones.glucagon.value / 200 * 100, 100);
    
    // Lactate increases with altitude and temperature stress
    let lactateMultiplier = 1;
    if (altitude > 1000) {
        lactateMultiplier += (altitude / 2000) * 0.3;
    }
    if (temp > 32) {
        lactateMultiplier += (temp - 32) * 0.05;
    }
    
    modifiedHormones.lactate.value = parseFloat((baseHormones.lactate.value * lactateMultiplier).toFixed(1));
    modifiedHormones.lactate.percentage = Math.min(modifiedHormones.lactate.value / 10 * 100, 100);
    
    // Blood glucose increases with stress hormones
    modifiedHormones.glucose.value = Math.round(baseHormones.glucose.value * (1 + (stressMultiplier - 1) * 0.5));
    modifiedHormones.glucose.percentage = Math.min(modifiedHormones.glucose.value / 200 * 100, 100);
    
    // Blood pH slightly decreases with altitude and extreme temperatures
    let pHChange = 0;
    if (altitude > 2000) {
        pHChange -= (altitude / 5000) * 0.1; // Respiratory alkalosis compensation
    }
    if (temp > 35) {
        pHChange -= 0.05; // Heat stress acidosis
    }
    
    modifiedHormones.bloodPH.value = parseFloat((baseHormones.bloodPH.value + pHChange).toFixed(2));
    modifiedHormones.bloodPH.percentage = Math.min((modifiedHormones.bloodPH.value - 7.0) / 0.8 * 100, 100);
    
    return modifiedHormones;
}

function updateEnvironmentalDisplay() {
    const effects = calculateEnvironmentalEffects();
    
    document.getElementById('heatStressFill').style.width = effects.heatStress + '%';
    document.getElementById('heatStressLevel').textContent = 
        effects.heatStress < 30 ? 'Low' : effects.heatStress < 70 ? 'Moderate' : 'High';
    
    document.getElementById('oxygenAvailFill').style.width = effects.oxygenAvailability + '%';
    document.getElementById('oxygenAvailLevel').textContent = 
        effects.oxygenAvailability > 95 ? 'Normal' : effects.oxygenAvailability > 85 ? 'Reduced' : 'Low';
    
    document.getElementById('dehydrationFill').style.width = effects.dehydrationRisk + '%';
    document.getElementById('dehydrationLevel').textContent = 
        effects.dehydrationRisk < 25 ? 'Minimal' : effects.dehydrationRisk < 60 ? 'Moderate' : 'High';
}

// Advanced physiological calculations
function calculatePhysiologicalMetrics() {
    const currentData = physiologicalStates[currentState];
    const effects = calculateEnvironmentalEffects();
    
    // Stroke Volume = Cardiac Output / Heart Rate
    const strokeVolume = (currentData.cardiovascular.cardiacOutput.value * 1000) / 
                        currentData.cardiovascular.heartRate.value;
    
    // Mean Arterial Pressure = DBP + (SBP - DBP) / 3
    const bpParts = currentData.cardiovascular.bloodPressure.value.split('/');
    const sbp = parseInt(bpParts[0]);
    const dbp = parseInt(bpParts[1]);
    const meanArterialPressure = dbp + (sbp - dbp) / 3;
    
    // Pulse Pressure = SBP - DBP
    const pulsePressure = sbp - dbp;
    
    // BMR using Harris-Benedict equation (assuming 70kg, 175cm, 30 years, male)
    const bmr = 88.362 + (13.397 * 70) + (4.799 * 175) - (5.677 * 30);
    
    // Total Energy Expenditure
    const activityFactor = currentState === 'marathon' ? 2.5 : 1.2;
    const tee = bmr * activityFactor;
    
    // Respiratory Exchange Ratio (RER)
    const rer = currentState === 'marathon' ? 1.05 : 0.85;
    
    // Minute Ventilation = Tidal Volume * Breathing Rate
    const minuteVentilation = (currentData.respiratory.tidalVolume.value / 1000) * 
                             currentData.respiratory.breathingRate.value;
    
    // Alveolar Ventilation (assuming 150mL dead space)
    const alveolarVentilation = ((currentData.respiratory.tidalVolume.value - 150) / 1000) * 
                               currentData.respiratory.breathingRate.value;
    
    // A-a Gradient (simplified)
    const aaGradient = currentState === 'marathon' ? 25 : 12;
    
    // Cardiovascular Efficiency
    const cardioEfficiency = Math.min((strokeVolume / 100) * (effects.oxygenAvailability / 100) * 100, 100);
    
    // System Stress Index
    const stressIndex = (currentData.neurological.stressLevel.percentage + 
                        (100 - effects.oxygenAvailability) + effects.heatStress) / 30;
    
    // Recovery Time Estimation
    const recoveryTime = currentState === 'marathon' ? 
        Math.round(45 + effects.heatStress * 0.5 + (100 - effects.oxygenAvailability) * 2) : 15;
    
    return {
        strokeVolume: Math.round(strokeVolume),
        meanArterialPressure: Math.round(meanArterialPressure),
        pulsePressure,
        bmr: Math.round(bmr),
        tee: Math.round(tee),
        rer: rer.toFixed(2),
        minuteVentilation: minuteVentilation.toFixed(1),
        alveolarVentilation: alveolarVentilation.toFixed(1),
        aaGradient,
        cardioEfficiency: Math.round(cardioEfficiency),
        stressIndex: stressIndex.toFixed(1),
        recoveryTime
    };
}

function updateCalculations() {
    const metrics = calculatePhysiologicalMetrics();
    
    // Update calculation displays
    if (document.getElementById('strokeVolume')) {
        document.getElementById('strokeVolume').textContent = metrics.strokeVolume + ' mL';
    }
    if (document.getElementById('meanArterialPressure')) {
        document.getElementById('meanArterialPressure').textContent = metrics.meanArterialPressure + ' mmHg';
    }
    if (document.getElementById('pulsePressure')) {
        document.getElementById('pulsePressure').textContent = metrics.pulsePressure + ' mmHg';
    }
    if (document.getElementById('bmrCalc')) {
        document.getElementById('bmrCalc').textContent = metrics.bmr.toLocaleString() + ' kcal/day';
    }
    if (document.getElementById('teeCalc')) {
        document.getElementById('teeCalc').textContent = metrics.tee.toLocaleString() + ' kcal/day';
    }
    if (document.getElementById('rerCalc')) {
        document.getElementById('rerCalc').textContent = metrics.rer;
    }
    if (document.getElementById('minuteVentilation')) {
        document.getElementById('minuteVentilation').textContent = metrics.minuteVentilation + ' L/min';
    }
    if (document.getElementById('alveolarVentilation')) {
        document.getElementById('alveolarVentilation').textContent = metrics.alveolarVentilation + ' L/min';
    }
    if (document.getElementById('aaGradient')) {
        document.getElementById('aaGradient').textContent = metrics.aaGradient + ' mmHg';
    }
    
    // Update real-time stats
    if (document.getElementById('cardioEfficiency')) {
        document.getElementById('cardioEfficiency').textContent = metrics.cardioEfficiency + '%';
    }
    if (document.getElementById('metabolicRateCalc')) {
        const metabolicRate = currentState === 'marathon' ? '18.5x' : '1.2x';
        document.getElementById('metabolicRateCalc').textContent = metabolicRate;
    }
    if (document.getElementById('stressIndex')) {
        document.getElementById('stressIndex').textContent = metrics.stressIndex;
    }
    if (document.getElementById('recoveryTime')) {
        document.getElementById('recoveryTime').textContent = metrics.recoveryTime + 'min';
    }
}

// Data export functions
function exportToJSON() {
    const currentData = physiologicalStates[currentState];
    const metrics = calculatePhysiologicalMetrics();
    const effects = calculateEnvironmentalEffects();
    
    const exportData = {
        timestamp: new Date().toISOString(),
        state: currentState,
        physiologicalData: currentData,
        calculatedMetrics: metrics,
        environmentalFactors: environmentalFactors,
        environmentalEffects: effects,
        historicalData: document.getElementById('includeTimeline').checked ? historicalData : null
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    downloadFile('physiology-data.json', dataStr, 'application/json');
}

function exportToCSV() {
    const currentData = physiologicalStates[currentState];
    const metrics = calculatePhysiologicalMetrics();
    
    let csvContent = 'Parameter,Value,Unit\n';
    
    // Add physiological parameters
    Object.keys(currentData.cardiovascular).forEach(param => {
        csvContent += `${param},${currentData.cardiovascular[param].value},${currentData.cardiovascular[param].unit}\n`;
    });
    
    Object.keys(currentData.respiratory).forEach(param => {
        csvContent += `${param},${currentData.respiratory[param].value},${currentData.respiratory[param].unit}\n`;
    });
    
    Object.keys(currentData.metabolic).forEach(param => {
        csvContent += `${param},${currentData.metabolic[param].value},${currentData.metabolic[param].unit}\n`;
    });
    
    // Add calculated metrics
    csvContent += `strokeVolume,${metrics.strokeVolume},mL\n`;
    csvContent += `meanArterialPressure,${metrics.meanArterialPressure},mmHg\n`;
    csvContent += `bmr,${metrics.bmr},kcal/day\n`;
    
    downloadFile('physiology-data.csv', csvContent, 'text/csv');
}

function downloadFile(filename, content, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

// Historical data tracking (optimized)
function recordHistoricalData() {
    if (historicalData.length > 50) { // Reduced from 100 to 50 for better performance
        historicalData.shift(); // Keep only last 50 data points
    }
    
    try {
        const currentData = physiologicalStates[currentState];
        if (!currentData) return;
        
        const dataPoint = {
            timestamp: Date.now(),
            heartRate: currentData.cardiovascular?.heartRate?.value || 0,
            bloodPressure: currentData.cardiovascular?.bloodPressure?.value || '0/0',
            oxygenSat: currentData.respiratory?.oxygenSat?.value || 0,
            coreTemp: currentData.metabolic?.coreTemp?.value || 0,
            state: currentState
        };
        
        historicalData.push(dataPoint);
    } catch (error) {
        console.warn('Error recording historical data:', error);
    }
}

// Continuous parameter updates for dynamic feel (optimized)
function simulateRealTimeChanges() {
    if (isTransitioning || !document.hasFocus()) return; // Pause when tab is not active
    
    const state = physiologicalStates[currentState];
    
    // Add small random variations to make it feel more realistic (only for key parameters)
    const keyParameters = ['heartRate', 'breathingRate', 'coreTemp'];
    
    keyParameters.forEach(paramKey => {
        const element = parameterElements[paramKey];
        if (element && element.textContent) {
            const currentValue = parseFloat(element.textContent);
            
            if (!isNaN(currentValue) && currentValue > 0) {
                const variation = (Math.random() - 0.5) * 0.01; // Reduced variation for smoother experience
                const newValue = currentValue * (1 + variation);
                element.textContent = newValue.toFixed(1);
            }
        }
    });
}

// Tab functionality
function initializeTabs() {
    // Scientific tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            // Remove active classes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active classes
            btn.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });
    
    // Reference tabs
    const refTabBtns = document.querySelectorAll('.ref-tab-btn');
    const refContents = document.querySelectorAll('.ref-content');
    
    refTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetRef = btn.dataset.ref;
            
            // Remove active classes
            refTabBtns.forEach(b => b.classList.remove('active'));
            refContents.forEach(content => content.classList.remove('active'));
            
            // Add active classes
            btn.classList.add('active');
            document.getElementById(targetRef + '-ref').classList.add('active');
        });
    });
}

// Initialize environmental controls
function initializeEnvironmentalControls() {
    // Environmental sliders - update parameters in real-time
    temperatureSlider.addEventListener('input', (e) => {
        environmentalFactors.temperature = parseInt(e.target.value);
        temperatureValue.textContent = e.target.value + '°C';
        updateEnvironmentalDisplay();
        updateParameters(currentState); // Update vital signs immediately
        updateHormones(currentState); // Update hormones immediately
        updateMolecular(currentState); // Update molecular parameters immediately
        updateCalculations(); // Update calculated metrics
    });
    
    altitudeSlider.addEventListener('input', (e) => {
        environmentalFactors.altitude = parseInt(e.target.value);
        altitudeValue.textContent = e.target.value + 'm';
        updateEnvironmentalDisplay();
        updateParameters(currentState); // Update vital signs immediately
        updateHormones(currentState); // Update hormones immediately
        updateMolecular(currentState); // Update molecular parameters immediately
        updateCalculations(); // Update calculated metrics
    });
    
    humiditySlider.addEventListener('input', (e) => {
        environmentalFactors.humidity = parseInt(e.target.value);
        humidityValue.textContent = e.target.value + '%';
        updateEnvironmentalDisplay();
        updateParameters(currentState); // Update vital signs immediately
        updateHormones(currentState); // Update hormones immediately
        updateMolecular(currentState); // Update molecular parameters immediately
        updateCalculations(); // Update calculated metrics
    });
    
    windSlider.addEventListener('input', (e) => {
        environmentalFactors.windSpeed = parseInt(e.target.value);
        windValue.textContent = e.target.value + ' km/h';
        updateEnvironmentalDisplay();
        updateParameters(currentState); // Update vital signs immediately
        updateHormones(currentState); // Update hormones immediately
        updateMolecular(currentState); // Update molecular parameters immediately
        updateCalculations(); // Update calculated metrics
    });
    
    // Environment button
    environmentBtn.addEventListener('click', () => {
        const isVisible = environmentPanel.style.display !== 'none';
        environmentPanel.style.display = isVisible ? 'none' : 'block';
        analysisPanel.style.display = 'none';
        timelinePanel.style.display = 'none';
        
        // Update button states
        environmentBtn.classList.toggle('active', !isVisible);
        analysisBtn.classList.remove('active');
        timelineBtn.classList.remove('active');
        
        if (!isVisible) {
            updateEnvironmentalDisplay();
        }
    });
}

// Initialize analysis functionality
function initializeAnalysis() {
    // Analysis tabs
    const analysisTabBtns = document.querySelectorAll('.analysis-tab-btn');
    const analysisContents = document.querySelectorAll('.analysis-content');
    
    analysisTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetAnalysis = btn.dataset.analysis;
            
            // Remove active classes
            analysisTabBtns.forEach(b => b.classList.remove('active'));
            analysisContents.forEach(content => content.classList.remove('active'));
            
            // Add active classes
            btn.classList.add('active');
            document.getElementById(targetAnalysis + '-analysis').classList.add('active');
        });
    });
    
    // Analysis button
    analysisBtn.addEventListener('click', () => {
        const isVisible = analysisPanel.style.display !== 'none';
        analysisPanel.style.display = isVisible ? 'none' : 'block';
        environmentPanel.style.display = 'none';
        timelinePanel.style.display = 'none';
        
        // Update button states
        analysisBtn.classList.toggle('active', !isVisible);
        environmentBtn.classList.remove('active');
        timelineBtn.classList.remove('active');
        
        if (!isVisible) {
            updateCalculations();
        }
    });
    
    // Export buttons
    document.getElementById('exportJSON').addEventListener('click', exportToJSON);
    document.getElementById('exportCSV').addEventListener('click', exportToCSV);
    
    document.getElementById('exportPDF').addEventListener('click', () => {
        alert('PDF export functionality would require additional libraries like jsPDF');
    });
    
    document.getElementById('exportImage').addEventListener('click', () => {
        // Export SVG as image
        const svgData = new XMLSerializer().serializeToString(bodySvg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'human-body-visualization.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            });
        };
        
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    });
    
    // Chart functionality (simplified)
    document.getElementById('clearHistory').addEventListener('click', () => {
        historicalData.length = 0;
        alert('Historical data cleared');
    });
}

// Initialize the application
function init() {
    // Set initial state
    updateParameters(currentState);
    updateHormones(currentState);
    updateMolecular(currentState);
    updateSystems(currentState);
    updateVisualization(currentState);
    updateInfoPanel(currentState);
    updateAnimations();
    
    // Initialize tab functionality
    initializeTabs();
    
    // Initialize environmental controls
    initializeEnvironmentalControls();
    
    // Initialize analysis functionality
    initializeAnalysis();
    
    // Initialize organ interactions
    initializeOrganInteractions();
    
    // Start real-time updates with optimized intervals
    setInterval(simulateRealTimeChanges, 3000); // Reduced frequency for better performance
    setInterval(recordHistoricalData, 10000); // Less frequent data recording
    setInterval(updateCalculations, 2000); // Less frequent calculations
    
    // Update animations when state changes (only when needed)
    // Removed the frequent animation update interval for better performance
}

// Start the application when the page loads
document.addEventListener('DOMContentLoaded', init);

// Fallback initialization for GitHub Pages
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Remove old hover effects code since we're using organ buttons now

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === '1') {
        transitionToState('homeostasis');
    } else if (e.key === '2') {
        transitionToState('marathon');
    }
});

// Add touch support for mobile devices
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Swipe detection
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentState === 'marathon') {
            transitionToState('homeostasis');
        } else if (deltaX < 0 && currentState === 'homeostasis') {
            transitionToState('marathon');
        }
    }
});

// Organ Information Database
const organDatabase = {
    heart: {
        name: "Heart",
        icon: "❤️",
        functions: [
            "Pumps blood throughout the circulatory system",
            "Maintains blood pressure and circulation",
            "Delivers oxygen and nutrients to tissues",
            "Removes waste products from cells"
        ],
        facts: [
            "Beats approximately 100,000 times per day",
            "Pumps about 2,000 gallons of blood daily",
            "Has four chambers: two atria and two ventricles",
            "Weighs between 8-12 ounces (250-350 grams)"
        ],
        homeostasisImpact: "During rest, the heart maintains a steady rhythm of 60-100 beats per minute, efficiently circulating blood with minimal energy expenditure.",
        marathonImpact: "During marathon running, heart rate increases dramatically to 150-180 bpm, cardiac output increases 4-5x, and stroke volume maximizes to meet oxygen demands.",
        environmentalSensitivity: "Heart rate increases with temperature (heat stress) and altitude (oxygen compensation). Cold temperatures initially increase heart rate due to vasoconstriction."
    },
    
    lungs: {
        name: "Lungs",
        icon: "🫁",
        functions: [
            "Exchange oxygen and carbon dioxide with blood",
            "Filter and humidify incoming air",
            "Regulate blood pH through CO2 removal",
            "Protect against airborne pathogens and particles"
        ],
        facts: [
            "Contain approximately 300-500 million alveoli",
            "Total surface area equivalent to a tennis court",
            "Process about 11,000 liters of air per day",
            "Right lung has 3 lobes, left lung has 2 lobes"
        ],
        homeostasisImpact: "At rest, lungs efficiently exchange gases with minimal effort, breathing 12-20 times per minute with 500mL tidal volume.",
        marathonImpact: "During intense exercise, breathing rate increases to 40-60 breaths/min, tidal volume increases to 2-3L, and oxygen extraction efficiency maximizes.",
        environmentalSensitivity: "Lung function decreases significantly at altitude due to reduced oxygen pressure. Cold air can trigger bronchospasm, while hot air increases breathing rate."
    },
    
    brain: {
        name: "Brain",
        icon: "🧠",
        functions: [
            "Controls all body functions and movements",
            "Processes sensory information and thoughts",
            "Regulates hormones and homeostasis",
            "Stores memories and enables learning"
        ],
        facts: [
            "Contains approximately 86 billion neurons",
            "Uses 20% of the body's total energy",
            "Weighs about 3 pounds (1.4 kg)",
            "Processes information at speeds up to 120 m/s"
        ],
        homeostasisImpact: "The brain maintains baseline neural activity, regulating autonomic functions and processing normal sensory input with efficient energy use.",
        marathonImpact: "During marathon running, the brain increases alertness, releases endorphins, and may experience 'runner's high' while managing fatigue and pain signals.",
        environmentalSensitivity: "Brain function is highly sensitive to oxygen levels (altitude sickness above 8,000ft) and temperature extremes, which can impair cognitive performance."
    },
    
    liver: {
        name: "Liver",
        icon: "🫘",
        functions: [
            "Detoxifies blood and metabolizes drugs",
            "Produces bile for fat digestion",
            "Stores glucose as glycogen",
            "Synthesizes proteins and clotting factors"
        ],
        facts: [
            "Largest internal organ, weighing 3-4 pounds",
            "Performs over 500 different functions",
            "Can regenerate up to 75% of its tissue",
            "Processes over 1 liter of blood per minute"
        ],
        homeostasisImpact: "During rest, the liver maintains steady glucose levels, processes toxins at baseline rates, and produces essential proteins for normal metabolism.",
        marathonImpact: "During marathon running, liver rapidly converts glycogen to glucose, increases protein synthesis for muscle repair, and processes increased metabolic waste.",
        environmentalSensitivity: "Liver function can be stressed by extreme temperatures (affecting enzyme activity) and altitude (reduced oxygen for metabolic processes)."
    },
    
    kidney: {
        name: "Kidneys",
        icon: "🫘",
        functions: [
            "Filter waste products from blood",
            "Regulate fluid and electrolyte balance",
            "Control blood pressure via renin production",
            "Produce hormones (EPO, calcitriol)"
        ],
        facts: [
            "Filter about 50 gallons of blood daily",
            "Each kidney contains ~1 million nephrons",
            "Produce 1-2 liters of urine per day",
            "Regulate pH by controlling bicarbonate levels"
        ],
        homeostasisImpact: "At rest, kidneys efficiently filter blood, maintain normal fluid balance, and regulate electrolytes with minimal energy expenditure.",
        marathonImpact: "During marathon running, kidney blood flow decreases by 25%, urine production drops significantly, and sodium retention increases to preserve fluid.",
        environmentalSensitivity: "Kidneys are highly sensitive to dehydration (hot/dry conditions) and altitude, where reduced oxygen can impair filtration function."
    },
    
    pancreas: {
        name: "Pancreas",
        icon: "🥞",
        functions: [
            "Produces insulin and glucagon hormones",
            "Secretes digestive enzymes",
            "Regulates blood glucose levels",
            "Aids in protein and fat digestion"
        ],
        facts: [
            "About 6 inches long and weighs 3 ounces",
            "Contains ~1 million islets of Langerhans",
            "Produces 1.5-3 liters of digestive juice daily",
            "Both endocrine and exocrine functions"
        ],
        homeostasisImpact: "During rest, pancreas maintains steady insulin/glucagon balance, keeping blood glucose at 80-100 mg/dL with efficient enzyme production.",
        marathonImpact: "During marathon running, pancreas reduces insulin and increases glucagon production to mobilize glucose stores and maintain energy supply.",
        environmentalSensitivity: "Pancreatic function can be affected by temperature extremes and stress hormones released during environmental challenges."
    },
    
    thyroid: {
        name: "Thyroid Gland",
        icon: "🦋",
        functions: [
            "Produces thyroid hormones (T3, T4)",
            "Regulates metabolism and energy production",
            "Controls growth and development",
            "Influences heart rate and body temperature"
        ],
        facts: [
            "Butterfly-shaped gland in the neck",
            "Weighs only 15-20 grams",
            "Produces hormones that affect every cell",
            "Controlled by TSH from pituitary gland"
        ],
        homeostasisImpact: "At rest, thyroid maintains baseline metabolic rate, supporting normal cellular functions and energy production at optimal levels.",
        marathonImpact: "During marathon running, thyroid hormone levels may increase to support elevated metabolism and energy demands of prolonged exercise.",
        environmentalSensitivity: "Thyroid function is sensitive to temperature extremes and iodine availability, with cold exposure potentially increasing hormone production."
    },
    
    adrenal: {
        name: "Adrenal Glands",
        icon: "⚡",
        functions: [
            "Produce stress hormones (cortisol, adrenaline)",
            "Regulate fight-or-flight responses",
            "Control electrolyte balance",
            "Manage blood pressure and metabolism"
        ],
        facts: [
            "Two small glands sitting atop each kidney",
            "Produce over 50 different hormones",
            "Cortex and medulla have different functions",
            "Essential for survival and stress response"
        ],
        homeostasisImpact: "During rest, adrenal glands produce baseline levels of cortisol and minimal adrenaline, maintaining normal stress response readiness.",
        marathonImpact: "During marathon running, adrenal glands massively increase adrenaline and cortisol production, enabling peak performance and stress adaptation.",
        environmentalSensitivity: "Adrenal glands are highly responsive to environmental stressors like temperature extremes, altitude, and humidity changes."
    },
    
    arteries: {
        name: "Arteries",
        icon: "🔴",
        functions: [
            "Carry oxygenated blood from heart to tissues",
            "Maintain blood pressure through elasticity",
            "Regulate blood flow to organs",
            "Respond to hormonal and neural signals"
        ],
        facts: [
            "Thick, muscular walls withstand high pressure",
            "Aorta is largest artery (1 inch diameter)",
            "Can constrict or dilate to control flow",
            "Contain smooth muscle and elastic fibers"
        ],
        homeostasisImpact: "At rest, arteries maintain steady blood flow and pressure, with normal elasticity providing efficient circulation to all organs.",
        marathonImpact: "During marathon running, arteries dilate significantly in active muscles while constricting in non-essential organs to maximize oxygen delivery.",
        environmentalSensitivity: "Arteries constrict in cold (conserving heat) and dilate in heat (promoting cooling), while altitude affects oxygen-carrying capacity."
    },
    
    veins: {
        name: "Veins",
        icon: "🔵",
        functions: [
            "Return deoxygenated blood to the heart",
            "Store blood as volume reservoir",
            "Contain one-way valves preventing backflow",
            "Assist in temperature regulation"
        ],
        facts: [
            "Thinner walls than arteries, lower pressure",
            "Contain 60-70% of total blood volume",
            "Have valves to prevent blood pooling",
            "Vena cava is largest vein"
        ],
        homeostasisImpact: "At rest, veins efficiently return blood to the heart with help from muscle contractions and one-way valves, maintaining normal circulation.",
        marathonImpact: "During marathon running, venous return increases dramatically due to muscle pump action, helping maintain cardiac output despite fluid losses.",
        environmentalSensitivity: "Veins dilate in heat (increasing cooling) and constrict in cold (conserving heat), while altitude can affect venous oxygen levels."
    },
    
    spinalcord: {
        name: "Spinal Cord",
        icon: "🧬",
        functions: [
            "Transmits signals between brain and body",
            "Controls reflexes and automatic responses",
            "Processes sensory and motor information",
            "Coordinates movement and sensation"
        ],
        facts: [
            "18 inches long, diameter of a finger",
            "Protected by vertebrae and cerebrospinal fluid",
            "Contains 31 pairs of spinal nerves",
            "Gray matter (neurons) and white matter (axons)"
        ],
        homeostasisImpact: "At rest, spinal cord efficiently transmits neural signals, processes basic reflexes, and maintains normal sensory-motor function.",
        marathonImpact: "During marathon running, spinal cord rapidly processes increased sensory input and motor commands while managing fatigue and pain signals.",
        environmentalSensitivity: "Spinal cord function can be affected by temperature extremes and reduced oxygen availability at high altitudes."
    }
};

// Organ Modal Functions
function showOrganInfo(organType) {
    const organ = organDatabase[organType];
    if (!organ) return;
    
    // Update modal content
    document.getElementById('organTitle').textContent = organ.name;
    document.getElementById('organIcon').textContent = organ.icon;
    
    // Update functions list
    const functionsList = document.getElementById('organFunctions');
    functionsList.innerHTML = '';
    organ.functions.forEach(func => {
        const li = document.createElement('li');
        li.textContent = func;
        functionsList.appendChild(li);
    });
    
    // Update facts list
    const factsList = document.getElementById('organFacts');
    factsList.innerHTML = '';
    organ.facts.forEach(fact => {
        const li = document.createElement('li');
        li.textContent = fact;
        factsList.appendChild(li);
    });
    
    // Update rest and exercise descriptions
    document.getElementById('organAtRest').textContent = organ.homeostasisImpact;
    document.getElementById('organDuringExercise').textContent = organ.marathonImpact;
    
    // Update environmental sensitivity
    document.getElementById('organEnvironmental').textContent = organ.environmentalSensitivity;
    
    // Show modal
    document.getElementById('organModal').style.display = 'flex';
}

function hideOrganModal() {
    document.getElementById('organModal').style.display = 'none';
}

// Initialize organ click handlers
function initializeOrganInteractions() {
    // Add click handlers to organ buttons
    const organButtons = document.querySelectorAll('.organ-btn');
    
    organButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const organType = button.getAttribute('data-organ');
            showOrganInfo(organType);
            
            // Add visual feedback
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        });
    });
    
    // Modal close handlers
    document.getElementById('organModal').addEventListener('click', (e) => {
        if (e.target.id === 'organModal') {
            hideOrganModal();
        }
    });
    
    document.querySelector('.organ-modal-close').addEventListener('click', hideOrganModal);
    
    // Keyboard handler for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideOrganModal();
        }
    });
}

console.log('Human Body Physiological Modeling System Initialized');
console.log('Use keyboard shortcuts: 1 for Homeostasis, 2 for Marathon Running');
console.log('Or swipe left/right on mobile devices to switch states');
console.log('Click on any organ to learn more about it!');
