/*********************************************** 
 * 5-34 Ready-Monolingual Persian Speaker *
 ***********************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = '5-34 ready-monolingual persian speaker';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
flowScheduler.add(GroupSelectionRoutineBegin());
flowScheduler.add(GroupSelectionRoutineEachFrame());
flowScheduler.add(GroupSelectionRoutineEnd());
flowScheduler.add(HeadphoneCheckRoutineBegin());
flowScheduler.add(HeadphoneCheckRoutineEachFrame());
flowScheduler.add(HeadphoneCheckRoutineEnd());
flowScheduler.add(IntroductionRoutineBegin());
flowScheduler.add(IntroductionRoutineEachFrame());
flowScheduler.add(IntroductionRoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(CountdownRoutineBegin());
flowScheduler.add(CountdownRoutineEachFrame());
flowScheduler.add(CountdownRoutineEnd());
flowScheduler.add(InitializeExperimentRoutineBegin());
flowScheduler.add(InitializeExperimentRoutineEachFrame());
flowScheduler.add(InitializeExperimentRoutineEnd());
const repeated_TrainingLoopGroup1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeated_TrainingLoopGroup1LoopBegin(repeated_TrainingLoopGroup1LoopScheduler));
flowScheduler.add(repeated_TrainingLoopGroup1LoopScheduler);
flowScheduler.add(repeated_TrainingLoopGroup1LoopEnd);







flowScheduler.add(WelcomeTestRoutineBegin());
flowScheduler.add(WelcomeTestRoutineEachFrame());
flowScheduler.add(WelcomeTestRoutineEnd());
const testPhase1LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testPhase1LoopLoopBegin(testPhase1LoopLoopScheduler));
flowScheduler.add(testPhase1LoopLoopScheduler);
flowScheduler.add(testPhase1LoopLoopEnd);


flowScheduler.add(FinishRoutineBegin());
flowScheduler.add(FinishRoutineEachFrame());
flowScheduler.add(FinishRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Monolingual Persian- Training Phase.xlsx', 'path': 'Monolingual Persian- Training Phase.xlsx'},
    {'name': 'Images/Speaker1.jpg', 'path': 'Images/Speaker1.jpg'},
    {'name': 'Images/Speaker2.jpg', 'path': 'Images/Speaker2.jpg'},
    {'name': 'Images/Speaker3.jpg', 'path': 'Images/Speaker3.jpg'},
    {'name': 'Images/Speaker4.jpg', 'path': 'Images/Speaker4.jpg'},
    {'name': 'Audio/Speaker1_Per/P1-1-Per.wav', 'path': 'Audio/Speaker1_Per/P1-1-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-2-Per.wav', 'path': 'Audio/Speaker1_Per/P1-2-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-3-Per.wav', 'path': 'Audio/Speaker1_Per/P1-3-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-4-Per.wav', 'path': 'Audio/Speaker1_Per/P1-4-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-5-Per.wav', 'path': 'Audio/Speaker1_Per/P1-5-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-6-Per.wav', 'path': 'Audio/Speaker1_Per/P1-6-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-7-Per.wav', 'path': 'Audio/Speaker1_Per/P1-7-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-8-Per.wav', 'path': 'Audio/Speaker1_Per/P1-8-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-9-Per.wav', 'path': 'Audio/Speaker1_Per/P1-9-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-10-Per.wav', 'path': 'Audio/Speaker1_Per/P1-10-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-11-Per.wav', 'path': 'Audio/Speaker1_Per/P1-11-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-12-Per.wav', 'path': 'Audio/Speaker1_Per/P1-12-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-13-Per.wav', 'path': 'Audio/Speaker1_Per/P1-13-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-15-Per.wav', 'path': 'Audio/Speaker1_Per/P1-15-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-16-Per.wav', 'path': 'Audio/Speaker1_Per/P1-16-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-17-Per.wav', 'path': 'Audio/Speaker1_Per/P1-17-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-18-Per.wav', 'path': 'Audio/Speaker1_Per/P1-18-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-19-Per.wav', 'path': 'Audio/Speaker1_Per/P1-19-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-20-Per.wav', 'path': 'Audio/Speaker1_Per/P1-20-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-1-Per.wav', 'path': 'Audio/Speaker2_Per/P2-1-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-2-Per.wav', 'path': 'Audio/Speaker2_Per/P2-2-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-3-Per.wav', 'path': 'Audio/Speaker2_Per/P2-3-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-4-Per.wav', 'path': 'Audio/Speaker2_Per/P2-4-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-5-Per.wav', 'path': 'Audio/Speaker2_Per/P2-5-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-6-Per.wav', 'path': 'Audio/Speaker2_Per/P2-6-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-7-Per.wav', 'path': 'Audio/Speaker2_Per/P2-7-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-8-Per.wav', 'path': 'Audio/Speaker2_Per/P2-8-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-9-Per.wav', 'path': 'Audio/Speaker2_Per/P2-9-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-10-Per.wav', 'path': 'Audio/Speaker2_Per/P2-10-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-11-Per.wav', 'path': 'Audio/Speaker2_Per/P2-11-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-12-Per.wav', 'path': 'Audio/Speaker2_Per/P2-12-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-13-Per.wav', 'path': 'Audio/Speaker2_Per/P2-13-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-14-Per.wav', 'path': 'Audio/Speaker2_Per/P2-14-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-15-Per.wav', 'path': 'Audio/Speaker2_Per/P2-15-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-16-Per.wav', 'path': 'Audio/Speaker2_Per/P2-16-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-17-Per.wav', 'path': 'Audio/Speaker2_Per/P2-17-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-18-Per.wav', 'path': 'Audio/Speaker2_Per/P2-18-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-19-Per.wav', 'path': 'Audio/Speaker2_Per/P2-19-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-20-Per.wav', 'path': 'Audio/Speaker2_Per/P2-20-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-1-Per.wav', 'path': 'Audio/Speaker3_Per/P3-1-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-2-Per.wav', 'path': 'Audio/Speaker3_Per/P3-2-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-3-Per.wav', 'path': 'Audio/Speaker3_Per/P3-3-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-4-Per.wav', 'path': 'Audio/Speaker3_Per/P3-4-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-5-Per.wav', 'path': 'Audio/Speaker3_Per/P3-5-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-6-Per.wav', 'path': 'Audio/Speaker3_Per/P3-6-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-7-Per.wav', 'path': 'Audio/Speaker3_Per/P3-7-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-8-Per.wav', 'path': 'Audio/Speaker3_Per/P3-8-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-9-Per.wav', 'path': 'Audio/Speaker3_Per/P3-9-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-10-Per.wav', 'path': 'Audio/Speaker3_Per/P3-10-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-11-Per.wav', 'path': 'Audio/Speaker3_Per/P3-11-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-12-Per.wav', 'path': 'Audio/Speaker3_Per/P3-12-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-13-Per.wav', 'path': 'Audio/Speaker3_Per/P3-13-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-14-Per.wav', 'path': 'Audio/Speaker3_Per/P3-14-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-15-Per.wav', 'path': 'Audio/Speaker3_Per/P3-15-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-16-Per.wav', 'path': 'Audio/Speaker3_Per/P3-16-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-17-Per.wav', 'path': 'Audio/Speaker3_Per/P3-17-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-18-Per.wav', 'path': 'Audio/Speaker3_Per/P3-18-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-19-Per.wav', 'path': 'Audio/Speaker3_Per/P3-19-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-20-Per.wav', 'path': 'Audio/Speaker3_Per/P3-20-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-1-Per.wav', 'path': 'Audio/Speaker4_Per/P4-1-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-2-Per.wav', 'path': 'Audio/Speaker4_Per/P4-2-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-3-Per.wav', 'path': 'Audio/Speaker4_Per/P4-3-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-4-Per.wav', 'path': 'Audio/Speaker4_Per/P4-4-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-5-Per.wav', 'path': 'Audio/Speaker4_Per/P4-5-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-6-Per.wav', 'path': 'Audio/Speaker4_Per/P4-6-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-7-Per.wav', 'path': 'Audio/Speaker4_Per/P4-7-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-8-Per.wav', 'path': 'Audio/Speaker4_Per/P4-8-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-9-Per.wav', 'path': 'Audio/Speaker4_Per/P4-9-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-10-Per.wav', 'path': 'Audio/Speaker4_Per/P4-10-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-11-Per.wav', 'path': 'Audio/Speaker4_Per/P4-11-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-12-Per.wav', 'path': 'Audio/Speaker4_Per/P4-12-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-13-Per.wav', 'path': 'Audio/Speaker4_Per/P4-13-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-14-Per.wav', 'path': 'Audio/Speaker4_Per/P4-14-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-15-Per.wav', 'path': 'Audio/Speaker4_Per/P4-15-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-16-Per.wav', 'path': 'Audio/Speaker4_Per/P4-16-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-17-Per.wav', 'path': 'Audio/Speaker4_Per/P4-17-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-18-Per.wav', 'path': 'Audio/Speaker4_Per/P4-18-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-19-Per.wav', 'path': 'Audio/Speaker4_Per/P4-19-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-20-Per.wav', 'path': 'Audio/Speaker4_Per/P4-20-Per.wav'},
    {'name': 'Monolingual Persian- Training Phase.xlsx', 'path': 'Monolingual Persian- Training Phase.xlsx'},
    {'name': 'Images/Speaker1.jpg', 'path': 'Images/Speaker1.jpg'},
    {'name': 'Images/Speaker2.jpg', 'path': 'Images/Speaker2.jpg'},
    {'name': 'Images/Speaker3.jpg', 'path': 'Images/Speaker3.jpg'},
    {'name': 'Images/Speaker4.jpg', 'path': 'Images/Speaker4.jpg'},
    {'name': 'Audio/Speaker1_Per/P1-1-Per.wav', 'path': 'Audio/Speaker1_Per/P1-1-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-2-Per.wav', 'path': 'Audio/Speaker1_Per/P1-2-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-3-Per.wav', 'path': 'Audio/Speaker1_Per/P1-3-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-4-Per.wav', 'path': 'Audio/Speaker1_Per/P1-4-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-5-Per.wav', 'path': 'Audio/Speaker1_Per/P1-5-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-6-Per.wav', 'path': 'Audio/Speaker1_Per/P1-6-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-7-Per.wav', 'path': 'Audio/Speaker1_Per/P1-7-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-8-Per.wav', 'path': 'Audio/Speaker1_Per/P1-8-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-9-Per.wav', 'path': 'Audio/Speaker1_Per/P1-9-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-10-Per.wav', 'path': 'Audio/Speaker1_Per/P1-10-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-11-Per.wav', 'path': 'Audio/Speaker1_Per/P1-11-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-12-Per.wav', 'path': 'Audio/Speaker1_Per/P1-12-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-13-Per.wav', 'path': 'Audio/Speaker1_Per/P1-13-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-15-Per.wav', 'path': 'Audio/Speaker1_Per/P1-15-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-16-Per.wav', 'path': 'Audio/Speaker1_Per/P1-16-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-17-Per.wav', 'path': 'Audio/Speaker1_Per/P1-17-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-18-Per.wav', 'path': 'Audio/Speaker1_Per/P1-18-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-19-Per.wav', 'path': 'Audio/Speaker1_Per/P1-19-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-20-Per.wav', 'path': 'Audio/Speaker1_Per/P1-20-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-1-Per.wav', 'path': 'Audio/Speaker2_Per/P2-1-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-2-Per.wav', 'path': 'Audio/Speaker2_Per/P2-2-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-3-Per.wav', 'path': 'Audio/Speaker2_Per/P2-3-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-4-Per.wav', 'path': 'Audio/Speaker2_Per/P2-4-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-5-Per.wav', 'path': 'Audio/Speaker2_Per/P2-5-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-6-Per.wav', 'path': 'Audio/Speaker2_Per/P2-6-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-7-Per.wav', 'path': 'Audio/Speaker2_Per/P2-7-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-8-Per.wav', 'path': 'Audio/Speaker2_Per/P2-8-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-9-Per.wav', 'path': 'Audio/Speaker2_Per/P2-9-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-10-Per.wav', 'path': 'Audio/Speaker2_Per/P2-10-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-11-Per.wav', 'path': 'Audio/Speaker2_Per/P2-11-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-12-Per.wav', 'path': 'Audio/Speaker2_Per/P2-12-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-13-Per.wav', 'path': 'Audio/Speaker2_Per/P2-13-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-14-Per.wav', 'path': 'Audio/Speaker2_Per/P2-14-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-15-Per.wav', 'path': 'Audio/Speaker2_Per/P2-15-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-16-Per.wav', 'path': 'Audio/Speaker2_Per/P2-16-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-17-Per.wav', 'path': 'Audio/Speaker2_Per/P2-17-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-18-Per.wav', 'path': 'Audio/Speaker2_Per/P2-18-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-19-Per.wav', 'path': 'Audio/Speaker2_Per/P2-19-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-20-Per.wav', 'path': 'Audio/Speaker2_Per/P2-20-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-1-Per.wav', 'path': 'Audio/Speaker3_Per/P3-1-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-2-Per.wav', 'path': 'Audio/Speaker3_Per/P3-2-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-3-Per.wav', 'path': 'Audio/Speaker3_Per/P3-3-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-4-Per.wav', 'path': 'Audio/Speaker3_Per/P3-4-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-5-Per.wav', 'path': 'Audio/Speaker3_Per/P3-5-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-6-Per.wav', 'path': 'Audio/Speaker3_Per/P3-6-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-7-Per.wav', 'path': 'Audio/Speaker3_Per/P3-7-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-8-Per.wav', 'path': 'Audio/Speaker3_Per/P3-8-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-9-Per.wav', 'path': 'Audio/Speaker3_Per/P3-9-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-10-Per.wav', 'path': 'Audio/Speaker3_Per/P3-10-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-11-Per.wav', 'path': 'Audio/Speaker3_Per/P3-11-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-12-Per.wav', 'path': 'Audio/Speaker3_Per/P3-12-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-13-Per.wav', 'path': 'Audio/Speaker3_Per/P3-13-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-14-Per.wav', 'path': 'Audio/Speaker3_Per/P3-14-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-15-Per.wav', 'path': 'Audio/Speaker3_Per/P3-15-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-16-Per.wav', 'path': 'Audio/Speaker3_Per/P3-16-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-17-Per.wav', 'path': 'Audio/Speaker3_Per/P3-17-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-18-Per.wav', 'path': 'Audio/Speaker3_Per/P3-18-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-19-Per.wav', 'path': 'Audio/Speaker3_Per/P3-19-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-20-Per.wav', 'path': 'Audio/Speaker3_Per/P3-20-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-1-Per.wav', 'path': 'Audio/Speaker4_Per/P4-1-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-2-Per.wav', 'path': 'Audio/Speaker4_Per/P4-2-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-3-Per.wav', 'path': 'Audio/Speaker4_Per/P4-3-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-4-Per.wav', 'path': 'Audio/Speaker4_Per/P4-4-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-5-Per.wav', 'path': 'Audio/Speaker4_Per/P4-5-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-6-Per.wav', 'path': 'Audio/Speaker4_Per/P4-6-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-7-Per.wav', 'path': 'Audio/Speaker4_Per/P4-7-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-8-Per.wav', 'path': 'Audio/Speaker4_Per/P4-8-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-9-Per.wav', 'path': 'Audio/Speaker4_Per/P4-9-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-10-Per.wav', 'path': 'Audio/Speaker4_Per/P4-10-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-11-Per.wav', 'path': 'Audio/Speaker4_Per/P4-11-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-12-Per.wav', 'path': 'Audio/Speaker4_Per/P4-12-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-13-Per.wav', 'path': 'Audio/Speaker4_Per/P4-13-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-14-Per.wav', 'path': 'Audio/Speaker4_Per/P4-14-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-15-Per.wav', 'path': 'Audio/Speaker4_Per/P4-15-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-16-Per.wav', 'path': 'Audio/Speaker4_Per/P4-16-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-17-Per.wav', 'path': 'Audio/Speaker4_Per/P4-17-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-18-Per.wav', 'path': 'Audio/Speaker4_Per/P4-18-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-19-Per.wav', 'path': 'Audio/Speaker4_Per/P4-19-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-20-Per.wav', 'path': 'Audio/Speaker4_Per/P4-20-Per.wav'},
    {'name': 'Monolingual Persian- Test Phase.xlsx', 'path': 'Monolingual Persian- Test Phase.xlsx'},
    {'name': 'Images/Speaker1.jpg', 'path': 'Images/Speaker1.jpg'},
    {'name': 'Images/Speaker2.jpg', 'path': 'Images/Speaker2.jpg'},
    {'name': 'Images/Speaker3.jpg', 'path': 'Images/Speaker3.jpg'},
    {'name': 'Images/Speaker4.jpg', 'path': 'Images/Speaker4.jpg'},
    {'name': 'Audio/Speaker1_Per/P1-1-Per.wav', 'path': 'Audio/Speaker1_Per/P1-1-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-2-Per.wav', 'path': 'Audio/Speaker1_Per/P1-2-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-3-Per.wav', 'path': 'Audio/Speaker1_Per/P1-3-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-4-Per.wav', 'path': 'Audio/Speaker1_Per/P1-4-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-5-Per.wav', 'path': 'Audio/Speaker1_Per/P1-5-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-6-Per.wav', 'path': 'Audio/Speaker1_Per/P1-6-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-7-Per.wav', 'path': 'Audio/Speaker1_Per/P1-7-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-8-Per.wav', 'path': 'Audio/Speaker1_Per/P1-8-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-9-Per.wav', 'path': 'Audio/Speaker1_Per/P1-9-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-10-Per.wav', 'path': 'Audio/Speaker1_Per/P1-10-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-11-Per.wav', 'path': 'Audio/Speaker1_Per/P1-11-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-12-Per.wav', 'path': 'Audio/Speaker1_Per/P1-12-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-13-Per.wav', 'path': 'Audio/Speaker1_Per/P1-13-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-15-Per.wav', 'path': 'Audio/Speaker1_Per/P1-15-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-16-Per.wav', 'path': 'Audio/Speaker1_Per/P1-16-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-17-Per.wav', 'path': 'Audio/Speaker1_Per/P1-17-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-18-Per.wav', 'path': 'Audio/Speaker1_Per/P1-18-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-19-Per.wav', 'path': 'Audio/Speaker1_Per/P1-19-Per.wav'},
    {'name': 'Audio/Speaker1_Per/P1-20-Per.wav', 'path': 'Audio/Speaker1_Per/P1-20-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-1-Per.wav', 'path': 'Audio/Speaker2_Per/P2-1-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-2-Per.wav', 'path': 'Audio/Speaker2_Per/P2-2-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-3-Per.wav', 'path': 'Audio/Speaker2_Per/P2-3-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-4-Per.wav', 'path': 'Audio/Speaker2_Per/P2-4-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-5-Per.wav', 'path': 'Audio/Speaker2_Per/P2-5-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-6-Per.wav', 'path': 'Audio/Speaker2_Per/P2-6-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-7-Per.wav', 'path': 'Audio/Speaker2_Per/P2-7-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-8-Per.wav', 'path': 'Audio/Speaker2_Per/P2-8-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-9-Per.wav', 'path': 'Audio/Speaker2_Per/P2-9-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-10-Per.wav', 'path': 'Audio/Speaker2_Per/P2-10-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-11-Per.wav', 'path': 'Audio/Speaker2_Per/P2-11-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-12-Per.wav', 'path': 'Audio/Speaker2_Per/P2-12-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-13-Per.wav', 'path': 'Audio/Speaker2_Per/P2-13-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-14-Per.wav', 'path': 'Audio/Speaker2_Per/P2-14-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-15-Per.wav', 'path': 'Audio/Speaker2_Per/P2-15-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-16-Per.wav', 'path': 'Audio/Speaker2_Per/P2-16-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-17-Per.wav', 'path': 'Audio/Speaker2_Per/P2-17-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-18-Per.wav', 'path': 'Audio/Speaker2_Per/P2-18-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-19-Per.wav', 'path': 'Audio/Speaker2_Per/P2-19-Per.wav'},
    {'name': 'Audio/Speaker2_Per/P2-20-Per.wav', 'path': 'Audio/Speaker2_Per/P2-20-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-1-Per.wav', 'path': 'Audio/Speaker3_Per/P3-1-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-2-Per.wav', 'path': 'Audio/Speaker3_Per/P3-2-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-3-Per.wav', 'path': 'Audio/Speaker3_Per/P3-3-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-4-Per.wav', 'path': 'Audio/Speaker3_Per/P3-4-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-5-Per.wav', 'path': 'Audio/Speaker3_Per/P3-5-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-6-Per.wav', 'path': 'Audio/Speaker3_Per/P3-6-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-7-Per.wav', 'path': 'Audio/Speaker3_Per/P3-7-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-8-Per.wav', 'path': 'Audio/Speaker3_Per/P3-8-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-9-Per.wav', 'path': 'Audio/Speaker3_Per/P3-9-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-10-Per.wav', 'path': 'Audio/Speaker3_Per/P3-10-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-11-Per.wav', 'path': 'Audio/Speaker3_Per/P3-11-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-12-Per.wav', 'path': 'Audio/Speaker3_Per/P3-12-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-13-Per.wav', 'path': 'Audio/Speaker3_Per/P3-13-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-14-Per.wav', 'path': 'Audio/Speaker3_Per/P3-14-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-15-Per.wav', 'path': 'Audio/Speaker3_Per/P3-15-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-16-Per.wav', 'path': 'Audio/Speaker3_Per/P3-16-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-17-Per.wav', 'path': 'Audio/Speaker3_Per/P3-17-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-18-Per.wav', 'path': 'Audio/Speaker3_Per/P3-18-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-19-Per.wav', 'path': 'Audio/Speaker3_Per/P3-19-Per.wav'},
    {'name': 'Audio/Speaker3_Per/P3-20-Per.wav', 'path': 'Audio/Speaker3_Per/P3-20-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-1-Per.wav', 'path': 'Audio/Speaker4_Per/P4-1-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-2-Per.wav', 'path': 'Audio/Speaker4_Per/P4-2-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-3-Per.wav', 'path': 'Audio/Speaker4_Per/P4-3-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-4-Per.wav', 'path': 'Audio/Speaker4_Per/P4-4-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-5-Per.wav', 'path': 'Audio/Speaker4_Per/P4-5-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-6-Per.wav', 'path': 'Audio/Speaker4_Per/P4-6-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-7-Per.wav', 'path': 'Audio/Speaker4_Per/P4-7-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-8-Per.wav', 'path': 'Audio/Speaker4_Per/P4-8-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-9-Per.wav', 'path': 'Audio/Speaker4_Per/P4-9-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-10-Per.wav', 'path': 'Audio/Speaker4_Per/P4-10-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-11-Per.wav', 'path': 'Audio/Speaker4_Per/P4-11-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-12-Per.wav', 'path': 'Audio/Speaker4_Per/P4-12-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-13-Per.wav', 'path': 'Audio/Speaker4_Per/P4-13-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-14-Per.wav', 'path': 'Audio/Speaker4_Per/P4-14-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-15-Per.wav', 'path': 'Audio/Speaker4_Per/P4-15-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-16-Per.wav', 'path': 'Audio/Speaker4_Per/P4-16-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-17-Per.wav', 'path': 'Audio/Speaker4_Per/P4-17-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-18-Per.wav', 'path': 'Audio/Speaker4_Per/P4-18-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-19-Per.wav', 'path': 'Audio/Speaker4_Per/P4-19-Per.wav'},
    {'name': 'Audio/Speaker4_Per/P4-20-Per.wav', 'path': 'Audio/Speaker4_Per/P4-20-Per.wav'},
    {'name': 'Images/Speaker1.jpg', 'path': 'Images/Speaker1.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'Audio/Speaker1_Per/P1-23-Per.wav', 'path': 'Audio/Speaker1_Per/P1-23-Per.wav'},
    {'name': 'Images/Speaker2.jpg', 'path': 'Images/Speaker2.jpg'},
    {'name': 'Audio/Speaker2_Per/P2-23-Per.wav', 'path': 'Audio/Speaker2_Per/P2-23-Per.wav'},
    {'name': 'Images/Speaker3.jpg', 'path': 'Images/Speaker3.jpg'},
    {'name': 'Audio/Speaker3_Per/P3-23-Per.wav', 'path': 'Audio/Speaker3_Per/P3-23-Per.wav'},
    {'name': 'Images/Speaker4.jpg', 'path': 'Images/Speaker4.jpg'},
    {'name': 'Audio/Speaker4_Per/P4-23-Per.wav', 'path': 'Audio/Speaker4_Per/P4-23-Per.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  group = null;
  
  // Initialize components for Routine "GroupSelection"
  GroupSelectionClock = new util.Clock();
  GroupInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'GroupInstructions',
    text: 'به آزمایش شناسایی گوینده خوش آمدید\n \nلطفا در محیطی آرام آزمایش را انجام دهید\n\nبرای گزینش گروه خود عدد ۱ یا ۲ یا ۳ را  انتخاب کنید',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_5
  group = null;
  
  // Initialize components for Routine "HeadphoneCheck"
  HeadphoneCheckClock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'اگر از هدفون استفاده میکنید روی باکس سفید کلیک کنید\n در غیر این صورت روی باکس کلیک نکنید',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  checkbox = new visual.Rect ({
    win: psychoJS.window, name: 'checkbox', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, pos: [0, (- 0.2)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('Black'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "Introduction"
  IntroductionClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'در ابتدا به صدای چهار گوینده گوش دهید تا با آنها آشنا شوید',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  sound_8 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_8.setVolume(1.0);
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  sound_10 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_10.setVolume(1.0);
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.33)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  sound_12 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_12.setVolume(1.0);
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  image_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_9', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  sound_14 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_14.setVolume(1.0);
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.33)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  InstructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionText',
    text: 'این آزمایش دو مرحله دارد: آموزش و آزمون\n\nدر طول هر مرحله شماره گوینده را وارد کنید\n\nدر مرحله آموزش پاسخ صحیح را دریافت خواهید کرد\n اما در مرحله آزمون بازخوردی دریافت نخواهید کرد',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Countdown"
  CountdownClock = new util.Clock();
  number1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'number1',
    text: '۱',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  number2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'number2',
    text: '۲\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  number3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'number3',
    text: '۳',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  start = new visual.TextStim({
    win: psychoJS.window,
    name: 'start',
    text: 'شروع!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  silence = new visual.TextStim({
    win: psychoJS.window,
    name: 'silence',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "InitializeExperiment"
  InitializeExperimentClock = new util.Clock();
  // Run 'Begin Experiment' code from code_12
  import * as time from 'time';
  total_trials = 0;
  correct_responses = 0;
  total_trials_group1 = 0;
  correct_responses_group1 = 0;
  correctResponses_group1 = 0;
  total_trials_group1 = 0;
  total_trials_group2 = 0;
  correct_responses_group2 = 0;
  total_trials_group3 = 0;
  correct_responses_group3 = 0;
  total_trials_group1 = 0;
  correct_responses_group1 = 0;
  correct_responses_group1 = 0;
  total_trials_group1 = 0;
  correct_responses_group2 = 0;
  total_trials_group2 = 0;
  correct_responses_group3 = 0;
  total_trials_group3 = 0;
  TARGET_ACCURACY = 0.85;
  response_mapping = {"1": "Speaker1", "2": "Speaker2", "3": "Speaker3", "4": "Speaker4"};
  proceed_to_test = false;
  retry_training = false;
  TrainingGroup = 1;
  sessionNumber = 1;
  trial_count = 0;
  break_after_trials = 40;
  break_duration = 300;
  break_flag = false;
  break_start_time = null;
  break_message = "take a break";
  
  // Initialize components for Routine "TrainingGroup1"
  TrainingGroup1Clock = new util.Clock();
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.6), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.2), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.2, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.6, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  sound1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound1.setVolume(1.0);
  Instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  ResponseKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from SessionManager
  trialN = 0;
  
  SessionNumberText = new visual.TextStim({
    win: psychoJS.window,
    name: 'SessionNumberText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "FeedbackRoutine1"
  FeedbackRoutine1Clock = new util.Clock();
  FeedbackText = new visual.TextStim({
    win: psychoJS.window,
    name: 'FeedbackText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Break"
  BreakClock = new util.Clock();
  break_message = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_message',
    text: 'لطفا کمی استراحت کنید\nدر غیر اینصورت برای ادامه روی مربع کلیک کنید',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse1.mouseClock = new util.Clock();
  checkbox1 = new visual.Rect ({
    win: psychoJS.window, name: 'checkbox1', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, pos: [0, (- 0.2)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  // Run 'Begin Experiment' code from code_17
  break_timer = new util.Clock();
  
  text_component = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_component',
    text: 'Any text\n\nincluding line breaks',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "CheckAccuracy1"
  CheckAccuracy1Clock = new util.Clock();
  // Initialize components for Routine "WelcomeTest"
  WelcomeTestClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Weolcome to the Test Phase!\nPlease enter the number corresponding to the speaker you hear.\nبه مرحله آزمون خوش آمدید\nلطفا پس از شنیدن جملات٬ شماره گوینده را وارد کنید',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "TestPhase1"
  TestPhase1Clock = new util.Clock();
  test1_image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_image1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.6), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  test1_image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_image2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.2), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  test1_image3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_image3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.2, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  test1_image4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_image4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.6, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  test1_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  test1_sound.setVolume(1.0);
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  test1_response_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Finish"
  FinishClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'پایان\nبا تشکر از مشارکت شما',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    // keep track of which components have finished
    trialComponents = [];
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function GroupSelectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GroupSelection' ---
    t = 0;
    GroupSelectionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('GroupSelection.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    GroupSelectionComponents = [];
    GroupSelectionComponents.push(GroupInstructions);
    GroupSelectionComponents.push(key_resp);
    
    for (const thisComponent of GroupSelectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function GroupSelectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GroupSelection' ---
    // get current time
    t = GroupSelectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *GroupInstructions* updates
    if (t >= 0.0 && GroupInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GroupInstructions.tStart = t;  // (not accounting for frame time here)
      GroupInstructions.frameNStart = frameN;  // exact frame index
      
      GroupInstructions.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (GroupInstructions.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      GroupInstructions.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['1'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Run 'Each Frame' code from code_5
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("1", keys)) {
        group = 1;
        continueRoutine = false;
    } else {
        if (_pj.in_es6("2", keys)) {
            group = 2;
            continueRoutine = false;
        } else {
            if (_pj.in_es6("3", keys)) {
                group = 3;
                continueRoutine = false;
            }
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GroupSelectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function GroupSelectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GroupSelection' ---
    for (const thisComponent of GroupSelectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('GroupSelection.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function HeadphoneCheckRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'HeadphoneCheck' ---
    t = 0;
    HeadphoneCheckClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('HeadphoneCheck.started', globalClock.getTime());
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from CheckBoxLogic
    checkbox_ticked = false;
    
    // Run 'Begin Routine' code from code_4
    psychoJS.window.mouseVisible = true;
    
    // keep track of which components have finished
    HeadphoneCheckComponents = [];
    HeadphoneCheckComponents.push(text_13);
    HeadphoneCheckComponents.push(mouse);
    HeadphoneCheckComponents.push(checkbox);
    
    for (const thisComponent of HeadphoneCheckComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function HeadphoneCheckRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'HeadphoneCheck' ---
    // get current time
    t = HeadphoneCheckClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_13.setAutoDraw(false);
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse.status = PsychoJS.Status.FINISHED;
        }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [checkbox]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *checkbox* updates
    if (t >= 0.0 && checkbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      checkbox.tStart = t;  // (not accounting for frame time here)
      checkbox.frameNStart = frameN;  // exact frame index
      
      checkbox.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (checkbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      checkbox.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from CheckBoxLogic
    if (mouse.isPressedIn(checkbox)) {
        checkbox_ticked = (! checkbox_ticked);
        if (checkbox_ticked) {
            checkbox.fillColor = "black";
        } else {
            checkbox.fillColor = "white";
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HeadphoneCheckComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function HeadphoneCheckRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'HeadphoneCheck' ---
    for (const thisComponent of HeadphoneCheckComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('HeadphoneCheck.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // Run 'End Routine' code from CheckBoxLogic
    psychoJS.experiment.addData("Headphone_Used", checkbox_ticked);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function IntroductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Introduction' ---
    t = 0;
    IntroductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(36.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Introduction.started', globalClock.getTime());
    image.setImage('Images/Speaker1.jpg');
    sound_8.setValue('Audio/Speaker1_Per/P1-23-Per.wav');
    sound_8.secs=5;
    sound_8.setVolume(1.0);
    text_4.setText('گوینده ۱');
    image_7.setImage('Images/Speaker2.jpg');
    sound_10.setValue('Audio/Speaker2_Per/P2-23-Per.wav');
    sound_10.secs=5;
    sound_10.setVolume(1.0);
    text_5.setText('گوینده ۲\n');
    image_8.setImage('Images/Speaker3.jpg');
    sound_12.setValue('Audio/Speaker3_Per/P3-23-Per.wav');
    sound_12.secs=5;
    sound_12.setVolume(1.0);
    text_6.setText('گوینده ۳');
    image_9.setImage('Images/Speaker4.jpg');
    sound_14.setValue('Audio/Speaker4_Per/P4-23-Per.wav');
    sound_14.secs=5;
    sound_14.setVolume(1.0);
    text_7.setText('گوینده ۴\n');
    // keep track of which components have finished
    IntroductionComponents = [];
    IntroductionComponents.push(text_2);
    IntroductionComponents.push(image);
    IntroductionComponents.push(sound_8);
    IntroductionComponents.push(text_4);
    IntroductionComponents.push(image_7);
    IntroductionComponents.push(sound_10);
    IntroductionComponents.push(text_5);
    IntroductionComponents.push(image_8);
    IntroductionComponents.push(sound_12);
    IntroductionComponents.push(text_6);
    IntroductionComponents.push(image_9);
    IntroductionComponents.push(sound_14);
    IntroductionComponents.push(text_7);
    
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function IntroductionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Introduction' ---
    // get current time
    t = IntroductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    
    // *image* updates
    if (t >= 7 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // start/stop sound_8
    if (t >= 7 && sound_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_8.tStart = t;  // (not accounting for frame time here)
      sound_8.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_8.play(); });  // screen flip
      sound_8.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_8.tStart + 0.5) {
        sound_8.stop();  // stop the sound (if longer than duration)
        sound_8.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_4* updates
    if (t >= 7 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    
    // *image_7* updates
    if (t >= 15 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }
    
    frameRemains = 15 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_7.setAutoDraw(false);
    }
    
    // start/stop sound_10
    if (t >= 15 && sound_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_10.tStart = t;  // (not accounting for frame time here)
      sound_10.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_10.play(); });  // screen flip
      sound_10.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 15 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_10.tStart + 0.5) {
        sound_10.stop();  // stop the sound (if longer than duration)
        sound_10.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_5* updates
    if (t >= 15 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 15 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    
    // *image_8* updates
    if (t >= 23 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }
    
    frameRemains = 23 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_8.setAutoDraw(false);
    }
    
    // start/stop sound_12
    if (t >= 23 && sound_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_12.tStart = t;  // (not accounting for frame time here)
      sound_12.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_12.play(); });  // screen flip
      sound_12.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 23 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_12.tStart + 0.5) {
        sound_12.stop();  // stop the sound (if longer than duration)
        sound_12.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_6* updates
    if (t >= 23 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 23 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    
    // *image_9* updates
    if (t >= 31 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }
    
    frameRemains = 31 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_9.setAutoDraw(false);
    }
    
    // start/stop sound_14
    if (t >= 31 && sound_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_14.tStart = t;  // (not accounting for frame time here)
      sound_14.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_14.play(); });  // screen flip
      sound_14.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 31 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_14.tStart + 0.5) {
        sound_14.stop();  // stop the sound (if longer than duration)
        sound_14.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_7* updates
    if (t >= 31 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    frameRemains = 31 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function IntroductionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Introduction' ---
    for (const thisComponent of IntroductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Introduction.stopped', globalClock.getTime());
    sound_8.stop();  // ensure sound has stopped at end of Routine
    sound_10.stop();  // ensure sound has stopped at end of Routine
    sound_12.stop();  // ensure sound has stopped at end of Routine
    sound_14.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(InstructionText);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstructionText* updates
    if (t >= 0.0 && InstructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionText.tStart = t;  // (not accounting for frame time here)
      InstructionText.frameNStart = frameN;  // exact frame index
      
      InstructionText.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (InstructionText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      InstructionText.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function CountdownRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Countdown' ---
    t = 0;
    CountdownClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Countdown.started', globalClock.getTime());
    // keep track of which components have finished
    CountdownComponents = [];
    CountdownComponents.push(number1);
    CountdownComponents.push(number2);
    CountdownComponents.push(number3);
    CountdownComponents.push(start);
    CountdownComponents.push(silence);
    
    for (const thisComponent of CountdownComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function CountdownRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Countdown' ---
    // get current time
    t = CountdownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *number1* updates
    if (t >= 0.0 && number1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      number1.tStart = t;  // (not accounting for frame time here)
      number1.frameNStart = frameN;  // exact frame index
      
      number1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (number1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      number1.setAutoDraw(false);
    }
    
    
    // *number2* updates
    if (t >= 1.5 && number2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      number2.tStart = t;  // (not accounting for frame time here)
      number2.frameNStart = frameN;  // exact frame index
      
      number2.setAutoDraw(true);
    }
    
    frameRemains = 1.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (number2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      number2.setAutoDraw(false);
    }
    
    
    // *number3* updates
    if (t >= 3 && number3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      number3.tStart = t;  // (not accounting for frame time here)
      number3.frameNStart = frameN;  // exact frame index
      
      number3.setAutoDraw(true);
    }
    
    frameRemains = 3 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (number3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      number3.setAutoDraw(false);
    }
    
    
    // *start* updates
    if (t >= 4.5 && start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start.tStart = t;  // (not accounting for frame time here)
      start.frameNStart = frameN;  // exact frame index
      
      start.setAutoDraw(true);
    }
    
    frameRemains = 4.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (start.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      start.setAutoDraw(false);
    }
    
    
    // *silence* updates
    if (t >= 6.5 && silence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      silence.tStart = t;  // (not accounting for frame time here)
      silence.frameNStart = frameN;  // exact frame index
      
      silence.setAutoDraw(true);
    }
    
    frameRemains = 6.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (silence.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      silence.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CountdownComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function CountdownRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Countdown' ---
    for (const thisComponent of CountdownComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Countdown.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function InitializeExperimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'InitializeExperiment' ---
    t = 0;
    InitializeExperimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('InitializeExperiment.started', globalClock.getTime());
    // keep track of which components have finished
    InitializeExperimentComponents = [];
    
    for (const thisComponent of InitializeExperimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function InitializeExperimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'InitializeExperiment' ---
    // get current time
    t = InitializeExperimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InitializeExperimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function InitializeExperimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'InitializeExperiment' ---
    for (const thisComponent of InitializeExperimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('InitializeExperiment.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_12
    sessionNumber += 1;
    
    // the Routine "InitializeExperiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function repeated_TrainingLoopGroup1LoopBegin(repeated_TrainingLoopGroup1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeated_TrainingLoopGroup1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Monolingual Persian- Training Phase.xlsx',
      seed: undefined, name: 'repeated_TrainingLoopGroup1'
    });
    psychoJS.experiment.addLoop(repeated_TrainingLoopGroup1); // add the loop to the experiment
    currentLoop = repeated_TrainingLoopGroup1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRepeated_TrainingLoopGroup1 of repeated_TrainingLoopGroup1) {
      snapshot = repeated_TrainingLoopGroup1.getSnapshot();
      repeated_TrainingLoopGroup1LoopScheduler.add(importConditions(snapshot));
      const TrainingLoopGroup1LoopScheduler = new Scheduler(psychoJS);
      repeated_TrainingLoopGroup1LoopScheduler.add(TrainingLoopGroup1LoopBegin(TrainingLoopGroup1LoopScheduler, snapshot));
      repeated_TrainingLoopGroup1LoopScheduler.add(TrainingLoopGroup1LoopScheduler);
      repeated_TrainingLoopGroup1LoopScheduler.add(TrainingLoopGroup1LoopEnd);
      repeated_TrainingLoopGroup1LoopScheduler.add(CheckAccuracy1RoutineBegin(snapshot));
      repeated_TrainingLoopGroup1LoopScheduler.add(CheckAccuracy1RoutineEachFrame());
      repeated_TrainingLoopGroup1LoopScheduler.add(CheckAccuracy1RoutineEnd(snapshot));
      repeated_TrainingLoopGroup1LoopScheduler.add(repeated_TrainingLoopGroup1LoopEndIteration(repeated_TrainingLoopGroup1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function TrainingLoopGroup1LoopBegin(TrainingLoopGroup1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TrainingLoopGroup1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Monolingual Persian- Training Phase.xlsx',
      seed: undefined, name: 'TrainingLoopGroup1'
    });
    psychoJS.experiment.addLoop(TrainingLoopGroup1); // add the loop to the experiment
    currentLoop = TrainingLoopGroup1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrainingLoopGroup1 of TrainingLoopGroup1) {
      snapshot = TrainingLoopGroup1.getSnapshot();
      TrainingLoopGroup1LoopScheduler.add(importConditions(snapshot));
      TrainingLoopGroup1LoopScheduler.add(TrainingGroup1RoutineBegin(snapshot));
      TrainingLoopGroup1LoopScheduler.add(TrainingGroup1RoutineEachFrame());
      TrainingLoopGroup1LoopScheduler.add(TrainingGroup1RoutineEnd(snapshot));
      TrainingLoopGroup1LoopScheduler.add(FeedbackRoutine1RoutineBegin(snapshot));
      TrainingLoopGroup1LoopScheduler.add(FeedbackRoutine1RoutineEachFrame());
      TrainingLoopGroup1LoopScheduler.add(FeedbackRoutine1RoutineEnd(snapshot));
      TrainingLoopGroup1LoopScheduler.add(BreakRoutineBegin(snapshot));
      TrainingLoopGroup1LoopScheduler.add(BreakRoutineEachFrame());
      TrainingLoopGroup1LoopScheduler.add(BreakRoutineEnd(snapshot));
      TrainingLoopGroup1LoopScheduler.add(TrainingLoopGroup1LoopEndIteration(TrainingLoopGroup1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function TrainingLoopGroup1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(TrainingLoopGroup1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function TrainingLoopGroup1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function repeated_TrainingLoopGroup1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repeated_TrainingLoopGroup1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function repeated_TrainingLoopGroup1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function testPhase1LoopLoopBegin(testPhase1LoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testPhase1Loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Monolingual Persian- Test Phase.xlsx',
      seed: undefined, name: 'testPhase1Loop'
    });
    psychoJS.experiment.addLoop(testPhase1Loop); // add the loop to the experiment
    currentLoop = testPhase1Loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTestPhase1Loop of testPhase1Loop) {
      snapshot = testPhase1Loop.getSnapshot();
      testPhase1LoopLoopScheduler.add(importConditions(snapshot));
      testPhase1LoopLoopScheduler.add(TestPhase1RoutineBegin(snapshot));
      testPhase1LoopLoopScheduler.add(TestPhase1RoutineEachFrame());
      testPhase1LoopLoopScheduler.add(TestPhase1RoutineEnd(snapshot));
      testPhase1LoopLoopScheduler.add(testPhase1LoopLoopEndIteration(testPhase1LoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function testPhase1LoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(testPhase1Loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function testPhase1LoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function TrainingGroup1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TrainingGroup1' ---
    t = 0;
    TrainingGroup1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('TrainingGroup1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_7
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! _pj.in_es6("correctResponses", globals()))) {
        correctResponses = 0;
    }
    if ((! _pj.in_es6("total_trials", globals()))) {
        total_trials = 0;
    }
    response_mapping = {"1": "Speaker1", "2": "Speaker2", "3": "Speaker3", "4": "Speaker4"};
    console.log(`Response Mapping: ${response_mapping}`);
    
    image_1.setImage(SpeakerImage1);
    image_2.setImage(SpeakerImage2);
    image_3.setImage(SpeakerImage3);
    image_4.setImage(SpeakerImage4);
    sound1.setValue(TrainingSound);
    sound1.setVolume(1.0);
    Instruction.setText('گوینده کیست؟ شماره گوینده را وارد کنید\n');
    ResponseKey.keys = undefined;
    ResponseKey.rt = undefined;
    _ResponseKey_allKeys = [];
    // Run 'Begin Routine' code from SessionManager
    if ((trialN === 80)) {
        trialN = 1;
    } else {
        trialN += 1;
    }
    
    SessionNumberText.setText((trialN.toString() + " out of 80"));
    // keep track of which components have finished
    TrainingGroup1Components = [];
    TrainingGroup1Components.push(image_1);
    TrainingGroup1Components.push(image_2);
    TrainingGroup1Components.push(image_3);
    TrainingGroup1Components.push(image_4);
    TrainingGroup1Components.push(sound1);
    TrainingGroup1Components.push(Instruction);
    TrainingGroup1Components.push(ResponseKey);
    TrainingGroup1Components.push(SessionNumberText);
    
    for (const thisComponent of TrainingGroup1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function TrainingGroup1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TrainingGroup1' ---
    // get current time
    t = TrainingGroup1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_1* updates
    if (t >= 0.0 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index
      
      image_1.setAutoDraw(true);
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    // start/stop sound1
    if (t >= 0.0 && sound1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound1.tStart = t;  // (not accounting for frame time here)
      sound1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound1.play(); });  // screen flip
      sound1.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound1.getDuration() + sound1.tStart)     && sound1.status === PsychoJS.Status.STARTED) {
      sound1.stop();  // stop the sound (if longer than duration)
      sound1.status = PsychoJS.Status.FINISHED;
    }
    
    // *Instruction* updates
    if (t >= 0.0 && Instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction.tStart = t;  // (not accounting for frame time here)
      Instruction.frameNStart = frameN;  // exact frame index
      
      Instruction.setAutoDraw(true);
    }
    
    
    // *ResponseKey* updates
    if (t >= 0.0 && ResponseKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ResponseKey.tStart = t;  // (not accounting for frame time here)
      ResponseKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ResponseKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ResponseKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ResponseKey.clearEvents(); });
    }
    
    if (ResponseKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = ResponseKey.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _ResponseKey_allKeys = _ResponseKey_allKeys.concat(theseKeys);
      if (_ResponseKey_allKeys.length > 0) {
        ResponseKey.keys = _ResponseKey_allKeys[_ResponseKey_allKeys.length - 1].name;  // just the last key pressed
        ResponseKey.rt = _ResponseKey_allKeys[_ResponseKey_allKeys.length - 1].rt;
        ResponseKey.duration = _ResponseKey_allKeys[_ResponseKey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *SessionNumberText* updates
    if (t >= 0.0 && SessionNumberText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SessionNumberText.tStart = t;  // (not accounting for frame time here)
      SessionNumberText.frameNStart = frameN;  // exact frame index
      
      SessionNumberText.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrainingGroup1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function TrainingGroup1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TrainingGroup1' ---
    for (const thisComponent of TrainingGroup1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TrainingGroup1.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_7
    CorrectAnswer = EnglishCorrectAnswer;
    if ((ResponseKey.keys.length > 0)) {
        participant_response_label = response_mapping.get(ResponseKey.keys[0], "Invalid");
        if ((participant_response_label === CorrectAnswer)) {
            correctResponses_group1 += 1;
            feedbackText = "\u0635\u062d\u06cc\u062d \u0627\u0633\u062a";
        } else {
            feedbackText = `نادرست! پاسخ صحیح ${PersianCorrectAnswer} است`;
        }
        total_trials_group1 += 1;
    }
    console.log(`Feedback Text: ${feedbackText}`);
    psychoJS.experiment.addData("feedbackText", feedbackText);
    psychoJS.experiment.addData("correct_responses_group1", correctResponses_group1);
    psychoJS.experiment.addData("total_trials_group1", total_trials_group1);
    
    sound1.stop();  // ensure sound has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ResponseKey.corr, level);
    }
    psychoJS.experiment.addData('ResponseKey.keys', ResponseKey.keys);
    if (typeof ResponseKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ResponseKey.rt', ResponseKey.rt);
        psychoJS.experiment.addData('ResponseKey.duration', ResponseKey.duration);
        routineTimer.reset();
        }
    
    ResponseKey.stop();
    // Run 'End Routine' code from SessionManager
    sessionNumber += 1;
    console.log(`Updated session number: ${sessionNumber}`);
    
    // the Routine "TrainingGroup1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function FeedbackRoutine1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FeedbackRoutine1' ---
    t = 0;
    FeedbackRoutine1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('FeedbackRoutine1.started', globalClock.getTime());
    FeedbackText.setText(feedbackText);
    // keep track of which components have finished
    FeedbackRoutine1Components = [];
    FeedbackRoutine1Components.push(FeedbackText);
    
    for (const thisComponent of FeedbackRoutine1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function FeedbackRoutine1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FeedbackRoutine1' ---
    // get current time
    t = FeedbackRoutine1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FeedbackText* updates
    if (t >= 0.0 && FeedbackText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FeedbackText.tStart = t;  // (not accounting for frame time here)
      FeedbackText.frameNStart = frameN;  // exact frame index
      
      FeedbackText.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FeedbackText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FeedbackText.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FeedbackRoutine1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function FeedbackRoutine1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FeedbackRoutine1' ---
    for (const thisComponent of FeedbackRoutine1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('FeedbackRoutine1.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function BreakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Break' ---
    t = 0;
    BreakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Break.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_6
    if ((TrainingLoopGroup1.thisN !== 39)) {
        continueRoutine = false;
    }
    
    // setup some python lists for storing info about the mouse1
    // current position of the mouse:
    mouse1.x = [];
    mouse1.y = [];
    mouse1.leftButton = [];
    mouse1.midButton = [];
    mouse1.rightButton = [];
    mouse1.time = [];
    mouse1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from code_16
    checkbox_ticked = false;
    
    // Run 'Begin Routine' code from for_mouse
    psychoJS.window.mouseVisible = true;
    
    // Run 'Begin Routine' code from code_17
    break_timer.reset();
    
    // keep track of which components have finished
    BreakComponents = [];
    BreakComponents.push(break_message);
    BreakComponents.push(mouse1);
    BreakComponents.push(checkbox1);
    BreakComponents.push(text_component);
    
    for (const thisComponent of BreakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function BreakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Break' ---
    // get current time
    t = BreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_message* updates
    if (t >= 0.0 && break_message.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_message.tStart = t;  // (not accounting for frame time here)
      break_message.frameNStart = frameN;  // exact frame index
      
      break_message.setAutoDraw(true);
    }
    
    // *mouse1* updates
    if (t >= 0.0 && mouse1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse1.tStart = t;  // (not accounting for frame time here)
      mouse1.frameNStart = frameN;  // exact frame index
      
      mouse1.status = PsychoJS.Status.STARTED;
      mouse1.mouseClock.reset();
      prevButtonState = mouse1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [checkbox]) {
            if (obj.contains(mouse1)) {
              gotValidClick = true;
              mouse1.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse1.getPos();
          mouse1.x.push(_mouseXYs[0]);
          mouse1.y.push(_mouseXYs[1]);
          mouse1.leftButton.push(_mouseButtons[0]);
          mouse1.midButton.push(_mouseButtons[1]);
          mouse1.rightButton.push(_mouseButtons[2]);
          mouse1.time.push(mouse1.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *checkbox1* updates
    if (t >= 0.0 && checkbox1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      checkbox1.tStart = t;  // (not accounting for frame time here)
      checkbox1.frameNStart = frameN;  // exact frame index
      
      checkbox1.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from code_16
    if (mouse.isPressedIn(checkbox1)) {
        checkbox_ticked = (! checkbox_ticked);
        if (checkbox_ticked) {
            checkbox.fillColor = "black";
        } else {
            checkbox.fillColor = "white";
        }
    }
    
    // Run 'Each Frame' code from code_17
    remaining_time = (360 - break_timer.getTime());
    text_component.setText(`زمان باقی‌مانده: ${util.pad(Number.parseFloat(remaining_time).toFixed(1), 1)} ثانیه`);
    text_component.setFont("Arial");
    if ((break_timer.getTime() > 360)) {
        continueRoutine = false;
    }
    
    
    // *text_component* updates
    if (t >= 0.0 && text_component.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_component.tStart = t;  // (not accounting for frame time here)
      text_component.frameNStart = frameN;  // exact frame index
      
      text_component.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BreakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function BreakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Break' ---
    for (const thisComponent of BreakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Break.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse1.x) {  psychoJS.experiment.addData('mouse1.x', mouse1.x[0])};
    if (mouse1.y) {  psychoJS.experiment.addData('mouse1.y', mouse1.y[0])};
    if (mouse1.leftButton) {  psychoJS.experiment.addData('mouse1.leftButton', mouse1.leftButton[0])};
    if (mouse1.midButton) {  psychoJS.experiment.addData('mouse1.midButton', mouse1.midButton[0])};
    if (mouse1.rightButton) {  psychoJS.experiment.addData('mouse1.rightButton', mouse1.rightButton[0])};
    if (mouse1.time) {  psychoJS.experiment.addData('mouse1.time', mouse1.time[0])};
    if (mouse1.clicked_name) {  psychoJS.experiment.addData('mouse1.clicked_name', mouse1.clicked_name[0])};
    
    // Run 'End Routine' code from code_16
    psychoJS.experiment.addData("Proceed_Break", checkbox_ticked);
    
    // Run 'End Routine' code from code_17
    final_time = break_timer.getTime();
    
    // the Routine "Break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function CheckAccuracy1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CheckAccuracy1' ---
    t = 0;
    CheckAccuracy1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('CheckAccuracy1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_10
    TARGET_ACCURACY = 0.85;
    accuracy_group1 = ((total_trials_group1 > 0) ? (correctResponses_group1 / total_trials_group1) : 0.0);
    if ((accuracy_group1 >= TARGET_ACCURACY)) {
        proceed_to_test = true;
        repeated_TrainingLoopGroup1.finished = true;
    } else {
        proceed_to_test = false;
        correctResponses_group1 = 0;
        total_trials_group1 = 0;
    }
    console.log(`Accuracy: ${accuracy_group1}`);
    console.log(`Proceed to test: ${proceed_to_test}`);
    psychoJS.experiment.addData("accuracy_group1", accuracy_group1);
    psychoJS.experiment.addData("proceed_to_test", proceed_to_test);
    
    // keep track of which components have finished
    CheckAccuracy1Components = [];
    
    for (const thisComponent of CheckAccuracy1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function CheckAccuracy1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CheckAccuracy1' ---
    // get current time
    t = CheckAccuracy1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CheckAccuracy1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function CheckAccuracy1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CheckAccuracy1' ---
    for (const thisComponent of CheckAccuracy1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('CheckAccuracy1.stopped', globalClock.getTime());
    // the Routine "CheckAccuracy1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function WelcomeTestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WelcomeTest' ---
    t = 0;
    WelcomeTestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('WelcomeTest.started', globalClock.getTime());
    // keep track of which components have finished
    WelcomeTestComponents = [];
    WelcomeTestComponents.push(text_12);
    
    for (const thisComponent of WelcomeTestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function WelcomeTestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WelcomeTest' ---
    // get current time
    t = WelcomeTestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_12.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeTestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function WelcomeTestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WelcomeTest' ---
    for (const thisComponent of WelcomeTestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WelcomeTest.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function TestPhase1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TestPhase1' ---
    t = 0;
    TestPhase1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('TestPhase1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_8
    if ((! proceed_to_test)) {
        continueRoutine = false;
    }
    
    test1_image1.setImage('Images/Speaker1.jpg');
    test1_image2.setImage('Images/Speaker2.jpg');
    test1_image3.setImage('Images/Speaker3.jpg');
    test1_image4.setImage('Images/Speaker4.jpg');
    test1_sound.setValue(TestingSound);
    test1_sound.setVolume(1.0);
    text_3.setText('گوینده کیست؟ شماره گوینده را وارد کنید');
    test1_response_keyboard.keys = undefined;
    test1_response_keyboard.rt = undefined;
    _test1_response_keyboard_allKeys = [];
    // Run 'Begin Routine' code from log_response_test1
    console.log(`Starting TestPhase1`);
    test1_response_keyboard.keys = [];
    
    // keep track of which components have finished
    TestPhase1Components = [];
    TestPhase1Components.push(test1_image1);
    TestPhase1Components.push(test1_image2);
    TestPhase1Components.push(test1_image3);
    TestPhase1Components.push(test1_image4);
    TestPhase1Components.push(test1_sound);
    TestPhase1Components.push(text_3);
    TestPhase1Components.push(test1_response_keyboard);
    
    for (const thisComponent of TestPhase1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function TestPhase1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TestPhase1' ---
    // get current time
    t = TestPhase1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1_image1* updates
    if (t >= 0.0 && test1_image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_image1.tStart = t;  // (not accounting for frame time here)
      test1_image1.frameNStart = frameN;  // exact frame index
      
      test1_image1.setAutoDraw(true);
    }
    
    
    // *test1_image2* updates
    if (t >= 0.0 && test1_image2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_image2.tStart = t;  // (not accounting for frame time here)
      test1_image2.frameNStart = frameN;  // exact frame index
      
      test1_image2.setAutoDraw(true);
    }
    
    
    // *test1_image3* updates
    if (t >= 0.0 && test1_image3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_image3.tStart = t;  // (not accounting for frame time here)
      test1_image3.frameNStart = frameN;  // exact frame index
      
      test1_image3.setAutoDraw(true);
    }
    
    
    // *test1_image4* updates
    if (t >= 0.0 && test1_image4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_image4.tStart = t;  // (not accounting for frame time here)
      test1_image4.frameNStart = frameN;  // exact frame index
      
      test1_image4.setAutoDraw(true);
    }
    
    // start/stop test1_sound
    if (t >= 0.0 && test1_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_sound.tStart = t;  // (not accounting for frame time here)
      test1_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ test1_sound.play(); });  // screen flip
      test1_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (test1_sound.getDuration() + test1_sound.tStart)     && test1_sound.status === PsychoJS.Status.STARTED) {
      test1_sound.stop();  // stop the sound (if longer than duration)
      test1_sound.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *test1_response_keyboard* updates
    if (t >= 0.0 && test1_response_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1_response_keyboard.tStart = t;  // (not accounting for frame time here)
      test1_response_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { test1_response_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { test1_response_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { test1_response_keyboard.clearEvents(); });
    }
    
    if (test1_response_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = test1_response_keyboard.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _test1_response_keyboard_allKeys = _test1_response_keyboard_allKeys.concat(theseKeys);
      if (_test1_response_keyboard_allKeys.length > 0) {
        test1_response_keyboard.keys = _test1_response_keyboard_allKeys[_test1_response_keyboard_allKeys.length - 1].name;  // just the last key pressed
        test1_response_keyboard.rt = _test1_response_keyboard_allKeys[_test1_response_keyboard_allKeys.length - 1].rt;
        test1_response_keyboard.duration = _test1_response_keyboard_allKeys[_test1_response_keyboard_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TestPhase1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function TestPhase1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TestPhase1' ---
    for (const thisComponent of TestPhase1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TestPhase1.stopped', globalClock.getTime());
    test1_sound.stop();  // ensure sound has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(test1_response_keyboard.corr, level);
    }
    psychoJS.experiment.addData('test1_response_keyboard.keys', test1_response_keyboard.keys);
    if (typeof test1_response_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('test1_response_keyboard.rt', test1_response_keyboard.rt);
        psychoJS.experiment.addData('test1_response_keyboard.duration', test1_response_keyboard.duration);
        routineTimer.reset();
        }
    
    test1_response_keyboard.stop();
    // Run 'End Routine' code from log_response_test1
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((_pj.in_es6("test1_response_keyboard", locals()) && (test1_response_keyboard.keys !== null))) {
        psychoJS.experiment.addData("test1_response", test1_response_keyboard.keys);
    } else {
        psychoJS.experiment.addData("test1_response", "No response");
    }
    psychoJS.experiment.addData("test1_image_file1", SpeakerPhoto1);
    psychoJS.experiment.addData("test1_image_file2", SpeakerPhoto2);
    psychoJS.experiment.addData("test1_image_file3", SpeakerPhoto3);
    psychoJS.experiment.addData("test1_image_file4", SpeakerPhoto4);
    psychoJS.experiment.addData("test1_sound_file", TestingSound);
    psychoJS.experiment.addData("english_correct_answer", EnglishCorrectResponse);
    psychoJS.experiment.addData("persian_correct_answer", PersianCorrectResponse);
    
    // the Routine "TestPhase1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function FinishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Finish' ---
    t = 0;
    FinishClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Finish.started', globalClock.getTime());
    // keep track of which components have finished
    FinishComponents = [];
    FinishComponents.push(text_11);
    
    for (const thisComponent of FinishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function FinishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Finish' ---
    // get current time
    t = FinishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_11.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FinishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function FinishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Finish' ---
    for (const thisComponent of FinishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Finish.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
