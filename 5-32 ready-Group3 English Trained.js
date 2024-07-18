/****************************************** 
 * 5-32 Ready-Group3 English Trained *
 ******************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = '5-32 ready-Group3 English Trained';  // from the Builder filename that created this script
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
flowScheduler.add(InitializeExperimentRoutineBegin());
flowScheduler.add(InitializeExperimentRoutineEachFrame());
flowScheduler.add(InitializeExperimentRoutineEnd());
const repeated_TrainingLoopGroup3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeated_TrainingLoopGroup3LoopBegin(repeated_TrainingLoopGroup3LoopScheduler));
flowScheduler.add(repeated_TrainingLoopGroup3LoopScheduler);
flowScheduler.add(repeated_TrainingLoopGroup3LoopEnd);






flowScheduler.add(WelcomeTestRoutineBegin());
flowScheduler.add(WelcomeTestRoutineEachFrame());
flowScheduler.add(WelcomeTestRoutineEnd());
const testPhase3LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testPhase3LoopLoopBegin(testPhase3LoopLoopScheduler));
flowScheduler.add(testPhase3LoopLoopScheduler);
flowScheduler.add(testPhase3LoopLoopEnd);


flowScheduler.add(finishRoutineBegin());
flowScheduler.add(finishRoutineEachFrame());
flowScheduler.add(finishRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'English Trained- Training Phase.xlsx', 'path': 'English Trained- Training Phase.xlsx'},
    {'name': 'Images/Speaker1.jpg', 'path': 'Images/Speaker1.jpg'},
    {'name': 'Images/Speaker2.jpg', 'path': 'Images/Speaker2.jpg'},
    {'name': 'Images/Speaker3.jpg', 'path': 'Images/Speaker3.jpg'},
    {'name': 'Images/Speaker4.jpg', 'path': 'Images/Speaker4.jpg'},
    {'name': 'Audio/Speaker1_En/P1-1-En.wav', 'path': 'Audio/Speaker1_En/P1-1-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-2-En.wav', 'path': 'Audio/Speaker1_En/P1-2-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-3-En.wav', 'path': 'Audio/Speaker1_En/P1-3-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-4-En.wav', 'path': 'Audio/Speaker1_En/P1-4-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-5-En.wav', 'path': 'Audio/Speaker1_En/P1-5-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-6-En.wav', 'path': 'Audio/Speaker1_En/P1-6-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-7-En.wav', 'path': 'Audio/Speaker1_En/P1-7-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-8-En.wav', 'path': 'Audio/Speaker1_En/P1-8-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-9-En.wav', 'path': 'Audio/Speaker1_En/P1-9-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-10-En.wav', 'path': 'Audio/Speaker1_En/P1-10-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-11-En.wav', 'path': 'Audio/Speaker1_En/P1-11-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-12-En.wav', 'path': 'Audio/Speaker1_En/P1-12-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-13-En.wav', 'path': 'Audio/Speaker1_En/P1-13-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-15-En.wav', 'path': 'Audio/Speaker1_En/P1-15-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-16-En.wav', 'path': 'Audio/Speaker1_En/P1-16-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-17-En.wav', 'path': 'Audio/Speaker1_En/P1-17-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-18-En.wav', 'path': 'Audio/Speaker1_En/P1-18-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-19-En.wav', 'path': 'Audio/Speaker1_En/P1-19-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-20-En.wav', 'path': 'Audio/Speaker1_En/P1-20-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-1-En.wav', 'path': 'Audio/Speaker2_En/P2-1-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-2-En.wav', 'path': 'Audio/Speaker2_En/P2-2-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-3-En.wav', 'path': 'Audio/Speaker2_En/P2-3-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-4-En.wav', 'path': 'Audio/Speaker2_En/P2-4-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-5-En.wav', 'path': 'Audio/Speaker2_En/P2-5-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-6-En.wav', 'path': 'Audio/Speaker2_En/P2-6-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-7-En.wav', 'path': 'Audio/Speaker2_En/P2-7-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-8-En.wav', 'path': 'Audio/Speaker2_En/P2-8-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-9-En.wav', 'path': 'Audio/Speaker2_En/P2-9-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-10-En.wav', 'path': 'Audio/Speaker2_En/P2-10-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-11-En.wav', 'path': 'Audio/Speaker2_En/P2-11-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-12-En.wav', 'path': 'Audio/Speaker2_En/P2-12-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-13-En.wav', 'path': 'Audio/Speaker2_En/P2-13-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-14-En.wav', 'path': 'Audio/Speaker2_En/P2-14-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-15-En.wav', 'path': 'Audio/Speaker2_En/P2-15-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-16-En.wav', 'path': 'Audio/Speaker2_En/P2-16-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-17-En.wav', 'path': 'Audio/Speaker2_En/P2-17-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-18-En.wav', 'path': 'Audio/Speaker2_En/P2-18-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-19-En.wav', 'path': 'Audio/Speaker2_En/P2-19-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-20-En.wav', 'path': 'Audio/Speaker2_En/P2-20-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-1-En.wav', 'path': 'Audio/Speaker3_En/P3-1-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-2-En.wav', 'path': 'Audio/Speaker3_En/P3-2-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-3-En.wav', 'path': 'Audio/Speaker3_En/P3-3-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-4-En.wav', 'path': 'Audio/Speaker3_En/P3-4-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-5-En.wav', 'path': 'Audio/Speaker3_En/P3-5-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-6-En.wav', 'path': 'Audio/Speaker3_En/P3-6-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-7-En.wav', 'path': 'Audio/Speaker3_En/P3-7-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-8-En.wav', 'path': 'Audio/Speaker3_En/P3-8-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-9-En.wav', 'path': 'Audio/Speaker3_En/P3-9-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-10-En.wav', 'path': 'Audio/Speaker3_En/P3-10-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-11-En.wav', 'path': 'Audio/Speaker3_En/P3-11-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-12-En.wav', 'path': 'Audio/Speaker3_En/P3-12-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-13-En.wav', 'path': 'Audio/Speaker3_En/P3-13-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-14-En.wav', 'path': 'Audio/Speaker3_En/P3-14-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-15-En.wav', 'path': 'Audio/Speaker3_En/P3-15-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-16-En.wav', 'path': 'Audio/Speaker3_En/P3-16-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-17-En.wav', 'path': 'Audio/Speaker3_En/P3-17-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-18-En.wav', 'path': 'Audio/Speaker3_En/P3-18-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-19-En.wav', 'path': 'Audio/Speaker3_En/P3-19-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-20-En.wav', 'path': 'Audio/Speaker3_En/P3-20-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-1-En.wav', 'path': 'Audio/Speaker4_En/P4-1-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-2-En.wav', 'path': 'Audio/Speaker4_En/P4-2-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-3-En.wav', 'path': 'Audio/Speaker4_En/P4-3-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-4-En.wav', 'path': 'Audio/Speaker4_En/P4-4-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-5-En.wav', 'path': 'Audio/Speaker4_En/P4-5-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-6-En.wav', 'path': 'Audio/Speaker4_En/P4-6-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-7-En.wav', 'path': 'Audio/Speaker4_En/P4-7-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-8-En.wav', 'path': 'Audio/Speaker4_En/P4-8-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-9-En.wav', 'path': 'Audio/Speaker4_En/P4-9-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-10-En.wav', 'path': 'Audio/Speaker4_En/P4-10-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-11-En.wav', 'path': 'Audio/Speaker4_En/P4-11-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-12-En.wav', 'path': 'Audio/Speaker4_En/P4-12-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-13-En.wav', 'path': 'Audio/Speaker4_En/P4-13-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-14-En.wav', 'path': 'Audio/Speaker4_En/P4-14-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-15-En.wav', 'path': 'Audio/Speaker4_En/P4-15-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-16-En.wav', 'path': 'Audio/Speaker4_En/P4-16-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-17-En.wav', 'path': 'Audio/Speaker4_En/P4-17-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-18-En.wav', 'path': 'Audio/Speaker4_En/P4-18-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-19-En.wav', 'path': 'Audio/Speaker4_En/P4-19-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-20-En.wav', 'path': 'Audio/Speaker4_En/P4-20-En.wav'},
    {'name': 'English Trained- Training Phase.xlsx', 'path': 'English Trained- Training Phase.xlsx'},
    {'name': 'Images/Speaker1.jpg', 'path': 'Images/Speaker1.jpg'},
    {'name': 'Images/Speaker2.jpg', 'path': 'Images/Speaker2.jpg'},
    {'name': 'Images/Speaker3.jpg', 'path': 'Images/Speaker3.jpg'},
    {'name': 'Images/Speaker4.jpg', 'path': 'Images/Speaker4.jpg'},
    {'name': 'Audio/Speaker1_En/P1-1-En.wav', 'path': 'Audio/Speaker1_En/P1-1-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-2-En.wav', 'path': 'Audio/Speaker1_En/P1-2-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-3-En.wav', 'path': 'Audio/Speaker1_En/P1-3-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-4-En.wav', 'path': 'Audio/Speaker1_En/P1-4-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-5-En.wav', 'path': 'Audio/Speaker1_En/P1-5-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-6-En.wav', 'path': 'Audio/Speaker1_En/P1-6-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-7-En.wav', 'path': 'Audio/Speaker1_En/P1-7-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-8-En.wav', 'path': 'Audio/Speaker1_En/P1-8-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-9-En.wav', 'path': 'Audio/Speaker1_En/P1-9-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-10-En.wav', 'path': 'Audio/Speaker1_En/P1-10-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-11-En.wav', 'path': 'Audio/Speaker1_En/P1-11-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-12-En.wav', 'path': 'Audio/Speaker1_En/P1-12-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-13-En.wav', 'path': 'Audio/Speaker1_En/P1-13-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-15-En.wav', 'path': 'Audio/Speaker1_En/P1-15-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-16-En.wav', 'path': 'Audio/Speaker1_En/P1-16-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-17-En.wav', 'path': 'Audio/Speaker1_En/P1-17-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-18-En.wav', 'path': 'Audio/Speaker1_En/P1-18-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-19-En.wav', 'path': 'Audio/Speaker1_En/P1-19-En.wav'},
    {'name': 'Audio/Speaker1_En/P1-20-En.wav', 'path': 'Audio/Speaker1_En/P1-20-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-1-En.wav', 'path': 'Audio/Speaker2_En/P2-1-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-2-En.wav', 'path': 'Audio/Speaker2_En/P2-2-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-3-En.wav', 'path': 'Audio/Speaker2_En/P2-3-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-4-En.wav', 'path': 'Audio/Speaker2_En/P2-4-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-5-En.wav', 'path': 'Audio/Speaker2_En/P2-5-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-6-En.wav', 'path': 'Audio/Speaker2_En/P2-6-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-7-En.wav', 'path': 'Audio/Speaker2_En/P2-7-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-8-En.wav', 'path': 'Audio/Speaker2_En/P2-8-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-9-En.wav', 'path': 'Audio/Speaker2_En/P2-9-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-10-En.wav', 'path': 'Audio/Speaker2_En/P2-10-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-11-En.wav', 'path': 'Audio/Speaker2_En/P2-11-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-12-En.wav', 'path': 'Audio/Speaker2_En/P2-12-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-13-En.wav', 'path': 'Audio/Speaker2_En/P2-13-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-14-En.wav', 'path': 'Audio/Speaker2_En/P2-14-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-15-En.wav', 'path': 'Audio/Speaker2_En/P2-15-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-16-En.wav', 'path': 'Audio/Speaker2_En/P2-16-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-17-En.wav', 'path': 'Audio/Speaker2_En/P2-17-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-18-En.wav', 'path': 'Audio/Speaker2_En/P2-18-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-19-En.wav', 'path': 'Audio/Speaker2_En/P2-19-En.wav'},
    {'name': 'Audio/Speaker2_En/P2-20-En.wav', 'path': 'Audio/Speaker2_En/P2-20-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-1-En.wav', 'path': 'Audio/Speaker3_En/P3-1-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-2-En.wav', 'path': 'Audio/Speaker3_En/P3-2-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-3-En.wav', 'path': 'Audio/Speaker3_En/P3-3-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-4-En.wav', 'path': 'Audio/Speaker3_En/P3-4-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-5-En.wav', 'path': 'Audio/Speaker3_En/P3-5-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-6-En.wav', 'path': 'Audio/Speaker3_En/P3-6-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-7-En.wav', 'path': 'Audio/Speaker3_En/P3-7-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-8-En.wav', 'path': 'Audio/Speaker3_En/P3-8-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-9-En.wav', 'path': 'Audio/Speaker3_En/P3-9-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-10-En.wav', 'path': 'Audio/Speaker3_En/P3-10-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-11-En.wav', 'path': 'Audio/Speaker3_En/P3-11-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-12-En.wav', 'path': 'Audio/Speaker3_En/P3-12-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-13-En.wav', 'path': 'Audio/Speaker3_En/P3-13-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-14-En.wav', 'path': 'Audio/Speaker3_En/P3-14-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-15-En.wav', 'path': 'Audio/Speaker3_En/P3-15-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-16-En.wav', 'path': 'Audio/Speaker3_En/P3-16-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-17-En.wav', 'path': 'Audio/Speaker3_En/P3-17-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-18-En.wav', 'path': 'Audio/Speaker3_En/P3-18-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-19-En.wav', 'path': 'Audio/Speaker3_En/P3-19-En.wav'},
    {'name': 'Audio/Speaker3_En/P3-20-En.wav', 'path': 'Audio/Speaker3_En/P3-20-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-1-En.wav', 'path': 'Audio/Speaker4_En/P4-1-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-2-En.wav', 'path': 'Audio/Speaker4_En/P4-2-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-3-En.wav', 'path': 'Audio/Speaker4_En/P4-3-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-4-En.wav', 'path': 'Audio/Speaker4_En/P4-4-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-5-En.wav', 'path': 'Audio/Speaker4_En/P4-5-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-6-En.wav', 'path': 'Audio/Speaker4_En/P4-6-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-7-En.wav', 'path': 'Audio/Speaker4_En/P4-7-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-8-En.wav', 'path': 'Audio/Speaker4_En/P4-8-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-9-En.wav', 'path': 'Audio/Speaker4_En/P4-9-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-10-En.wav', 'path': 'Audio/Speaker4_En/P4-10-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-11-En.wav', 'path': 'Audio/Speaker4_En/P4-11-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-12-En.wav', 'path': 'Audio/Speaker4_En/P4-12-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-13-En.wav', 'path': 'Audio/Speaker4_En/P4-13-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-14-En.wav', 'path': 'Audio/Speaker4_En/P4-14-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-15-En.wav', 'path': 'Audio/Speaker4_En/P4-15-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-16-En.wav', 'path': 'Audio/Speaker4_En/P4-16-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-17-En.wav', 'path': 'Audio/Speaker4_En/P4-17-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-18-En.wav', 'path': 'Audio/Speaker4_En/P4-18-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-19-En.wav', 'path': 'Audio/Speaker4_En/P4-19-En.wav'},
    {'name': 'Audio/Speaker4_En/P4-20-En.wav', 'path': 'Audio/Speaker4_En/P4-20-En.wav'},
    {'name': 'English Trained- Test Phase.xlsx', 'path': 'English Trained- Test Phase.xlsx'},
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
    {'name': 'Audio/Speaker1_En/P1-23-En.wav', 'path': 'Audio/Speaker1_En/P1-23-En.wav'},
    {'name': 'Audio/Speaker1_Per/P1-23-Per.wav', 'path': 'Audio/Speaker1_Per/P1-23-Per.wav'},
    {'name': 'Images/Speaker2.jpg', 'path': 'Images/Speaker2.jpg'},
    {'name': 'Audio/Speaker2_En/P2-23-En.wav', 'path': 'Audio/Speaker2_En/P2-23-En.wav'},
    {'name': 'Audio/Speaker2_Per/P2-23-Per.wav', 'path': 'Audio/Speaker2_Per/P2-23-Per.wav'},
    {'name': 'Images/Speaker3.jpg', 'path': 'Images/Speaker3.jpg'},
    {'name': 'Audio/Speaker3_En/P3-23-En.wav', 'path': 'Audio/Speaker3_En/P3-23-En.wav'},
    {'name': 'Audio/Speaker3_Per/P3-23-Per.wav', 'path': 'Audio/Speaker3_Per/P3-23-Per.wav'},
    {'name': 'Images/Speaker4.jpg', 'path': 'Images/Speaker4.jpg'},
    {'name': 'Audio/Speaker4_En/P4-23-En.wav', 'path': 'Audio/Speaker4_En/P4-23-En.wav'},
    {'name': 'Audio/Speaker4_Per/P4-23-Per.wav', 'path': 'Audio/Speaker4_Per/P4-23-Per.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
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


var trialClock;
var group;
var GroupSelectionClock;
var GroupInstructions;
var key_resp;
var HeadphoneCheckClock;
var text_13;
var mouse;
var checkbox;
var IntroductionClock;
var text_2;
var image;
var sound_7;
var sound_8;
var text_4;
var image_7;
var sound_9;
var sound_10;
var text_5;
var image_8;
var sound_11;
var sound_12;
var text_6;
var image_9;
var sound_13;
var sound_14;
var text_7;
var InstructionsClock;
var InstructionText;
var InitializeExperimentClock;
var total_trials_group1;
var correct_responses_group1;
var total_trials_group2;
var correct_responses_group2;
var total_trials_group3;
var correct_responses_group3;
var TARGET_ACCURACY;
var response_mapping;
var proceed_to_test;
var retry_training;
var TrainingGroup;
var TrainingGroup3Clock;
var SpeakerPicture3;
var image_15;
var image_16;
var image_17;
var Sound3;
var Instruction3;
var Response3;
var FeedbackRoutine3Clock;
var FeedbackText3;
var CheckAccuracy3Clock;
var WelcomeTestClock;
var text_12;
var TestPhase3Clock;
var test3_image1;
var test3_image2;
var test3_image3;
var test3_image4;
var test3_sound;
var text_10;
var test3_response_keyboard;
var finishClock;
var text_11;
var globalClock;
var routineTimer;
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
    text: 'Welcome to the Speaker Identification Task Experiment\n\nPlease make sure to do the experiment in a quiet room.\n\nPress 1 for Group 1, 2 for Group 2, 3 for Group 3.\n\nبه آزمایش شناسایی گوینده خوش آمدید\n \nلطفا در محیطی آرام آزمایش را انجام دهید\n\nبرای گزینش گروه خود عدد ۱ یا ۲ یا ۳ را  انتخاب کنید',
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
    text: 'Please tick the box if you are using headphones. Leave it unticked if you are not.\n\nاگر از هدفون استفاده میکنید روی باکس سفید کلیک کنید\n در غیر این صورت روی باکس کلیک نکنید',
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
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "Introduction"
  IntroductionClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Introduction: \nYou will hear four speakers in English and Persian to help you familiarize yourself with them.\nدر ابتدا به صدای چهار گوینده گوش دهید تا با آنها آشنا شوید',
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
  sound_7 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_7.setVolume(1.0);
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
    depth: -4.0 
  });
  
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  sound_9 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_9.setVolume(1.0);
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
    depth: -8.0 
  });
  
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  sound_11 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_11.setVolume(1.0);
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
    depth: -12.0 
  });
  
  image_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_9', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  sound_13 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_13.setVolume(1.0);
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
    depth: -16.0 
  });
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  InstructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionText',
    text: 'This experiment has two phases: Training and Test.\nPress the number of the speaker on the keyboard after each sentence.\nIn the Training Phase, you will receive feedback. In the Test Phase, there will be no feedback.\n\nاین آزمایش دو مرحله دارد: آموزش و آزمون\nدر طول هر مرحله شماره گوینده را وارد کنید\nدر مرحله آموزش پاسخ صحیح را دریافت خواهید کرد\n اما در مرحله آزمون بازخوردی دریافت نخواهید کرد',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "InitializeExperiment"
  InitializeExperimentClock = new util.Clock();
  // Run 'Begin Experiment' code from code_12
  total_trials_group1 = 0;
  correct_responses_group1 = 0;
  total_trials_group2 = 0;
  correct_responses_group2 = 0;
  total_trials_group3 = 0;
  correct_responses_group3 = 0;
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
  
  // Initialize components for Routine "TrainingGroup3"
  TrainingGroup3Clock = new util.Clock();
  SpeakerPicture3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SpeakerPicture3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.6), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_15 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_15', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.2), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_16 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_16', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.2, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_17 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_17', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.6, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  Sound3 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  Sound3.setVolume(1.0);
  Instruction3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  Response3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "FeedbackRoutine3"
  FeedbackRoutine3Clock = new util.Clock();
  FeedbackText3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FeedbackText3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "CheckAccuracy3"
  CheckAccuracy3Clock = new util.Clock();
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
  
  // Initialize components for Routine "TestPhase3"
  TestPhase3Clock = new util.Clock();
  test3_image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test3_image1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.6), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  test3_image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test3_image2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.2), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  test3_image3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test3_image3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.2, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  test3_image4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test3_image4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.6, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  test3_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  test3_sound.setVolume(1.0);
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  test3_response_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "finish"
  finishClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'The End!\nThank you for your participation.\n\nپایان\nبا تشکر از مشارکت شما',
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


var t;
var frameN;
var continueRoutine;
var trialComponents;
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


var _key_resp_allKeys;
var GroupSelectionComponents;
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


var frameRemains;
var _pj;
var keys;
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
      let theseKeys = key_resp.getKeys({keyList: ['3'], waitRelease: false});
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


var gotValidClick;
var checkbox_ticked;
var HeadphoneCheckComponents;
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


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
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


var IntroductionComponents;
function IntroductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Introduction' ---
    t = 0;
    IntroductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(45.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Introduction.started', globalClock.getTime());
    image.setImage('Images/Speaker1.jpg');
    sound_7.setValue('Audio/Speaker1_En/P1-23-En.wav');
    sound_7.secs=5;
    sound_7.setVolume(1.0);
    sound_8.setValue('Audio/Speaker1_Per/P1-23-Per.wav');
    sound_8.secs=5;
    sound_8.setVolume(1.0);
    text_4.setText('Speaker 1\nگوینده ۱');
    image_7.setImage('Images/Speaker2.jpg');
    sound_9.setValue('Audio/Speaker2_En/P2-23-En.wav');
    sound_9.secs=5;
    sound_9.setVolume(1.0);
    sound_10.setValue('Audio/Speaker2_Per/P2-23-Per.wav');
    sound_10.secs=5;
    sound_10.setVolume(1.0);
    text_5.setText('Speaker 2\nگوینده ۲\n');
    image_8.setImage('Images/Speaker3.jpg');
    sound_11.setValue('Audio/Speaker3_En/P3-23-En.wav');
    sound_11.secs=5;
    sound_11.setVolume(1.0);
    sound_12.setValue('Audio/Speaker3_Per/P3-23-Per.wav');
    sound_12.secs=5;
    sound_12.setVolume(1.0);
    text_6.setText('Speaker 3\nگوینده ۳');
    image_9.setImage('Images/Speaker4.jpg');
    sound_13.setValue('Audio/Speaker4_En/P4-23-En.wav');
    sound_13.secs=5;
    sound_13.setVolume(1.0);
    sound_14.setValue('Audio/Speaker4_Per/P4-23-Per.wav');
    sound_14.secs=5;
    sound_14.setVolume(1.0);
    text_7.setText('Speaker 4\nگوینده ۴\n');
    // keep track of which components have finished
    IntroductionComponents = [];
    IntroductionComponents.push(text_2);
    IntroductionComponents.push(image);
    IntroductionComponents.push(sound_7);
    IntroductionComponents.push(sound_8);
    IntroductionComponents.push(text_4);
    IntroductionComponents.push(image_7);
    IntroductionComponents.push(sound_9);
    IntroductionComponents.push(sound_10);
    IntroductionComponents.push(text_5);
    IntroductionComponents.push(image_8);
    IntroductionComponents.push(sound_11);
    IntroductionComponents.push(sound_12);
    IntroductionComponents.push(text_6);
    IntroductionComponents.push(image_9);
    IntroductionComponents.push(sound_13);
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
    if (t >= 5 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 5 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // start/stop sound_7
    if (t >= 5 && sound_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_7.tStart = t;  // (not accounting for frame time here)
      sound_7.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_7.play(); });  // screen flip
      sound_7.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_7.tStart + 0.5) {
        sound_7.stop();  // stop the sound (if longer than duration)
        sound_7.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_8
    if (t >= 10 && sound_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_8.tStart = t;  // (not accounting for frame time here)
      sound_8.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_8.play(); });  // screen flip
      sound_8.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 10 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_8.tStart + 0.5) {
        sound_8.stop();  // stop the sound (if longer than duration)
        sound_8.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_4* updates
    if (t >= 5 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 5 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    
    frameRemains = 15 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_7.setAutoDraw(false);
    }
    
    // start/stop sound_9
    if (t >= 15 && sound_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_9.tStart = t;  // (not accounting for frame time here)
      sound_9.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_9.play(); });  // screen flip
      sound_9.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 15 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_9.tStart + 0.5) {
        sound_9.stop();  // stop the sound (if longer than duration)
        sound_9.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_10
    if (t >= 20 && sound_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_10.tStart = t;  // (not accounting for frame time here)
      sound_10.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_10.play(); });  // screen flip
      sound_10.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 20 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    
    frameRemains = 15 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    
    // *image_8* updates
    if (t >= 25 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }
    
    frameRemains = 25 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_8.setAutoDraw(false);
    }
    
    // start/stop sound_11
    if (t >= 25 && sound_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_11.tStart = t;  // (not accounting for frame time here)
      sound_11.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_11.play(); });  // screen flip
      sound_11.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 25 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_11.tStart + 0.5) {
        sound_11.stop();  // stop the sound (if longer than duration)
        sound_11.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_12
    if (t >= 30 && sound_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_12.tStart = t;  // (not accounting for frame time here)
      sound_12.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_12.play(); });  // screen flip
      sound_12.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 30 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_12.tStart + 0.5) {
        sound_12.stop();  // stop the sound (if longer than duration)
        sound_12.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_6* updates
    if (t >= 25 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 25 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    
    // *image_9* updates
    if (t >= 35 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }
    
    frameRemains = 35 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_9.setAutoDraw(false);
    }
    
    // start/stop sound_13
    if (t >= 35 && sound_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_13.tStart = t;  // (not accounting for frame time here)
      sound_13.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_13.play(); });  // screen flip
      sound_13.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 35 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_13.tStart + 0.5) {
        sound_13.stop();  // stop the sound (if longer than duration)
        sound_13.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_14
    if (t >= 40 && sound_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_14.tStart = t;  // (not accounting for frame time here)
      sound_14.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_14.play(); });  // screen flip
      sound_14.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 40 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_14.tStart + 0.5) {
        sound_14.stop();  // stop the sound (if longer than duration)
        sound_14.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_7* updates
    if (t >= 35 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    frameRemains = 35 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    sound_7.stop();  // ensure sound has stopped at end of Routine
    sound_8.stop();  // ensure sound has stopped at end of Routine
    sound_9.stop();  // ensure sound has stopped at end of Routine
    sound_10.stop();  // ensure sound has stopped at end of Routine
    sound_11.stop();  // ensure sound has stopped at end of Routine
    sound_12.stop();  // ensure sound has stopped at end of Routine
    sound_13.stop();  // ensure sound has stopped at end of Routine
    sound_14.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var InstructionsComponents;
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


var InitializeExperimentComponents;
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
    // the Routine "InitializeExperiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var repeated_TrainingLoopGroup3;
function repeated_TrainingLoopGroup3LoopBegin(repeated_TrainingLoopGroup3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeated_TrainingLoopGroup3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'English Trained- Training Phase.xlsx',
      seed: undefined, name: 'repeated_TrainingLoopGroup3'
    });
    psychoJS.experiment.addLoop(repeated_TrainingLoopGroup3); // add the loop to the experiment
    currentLoop = repeated_TrainingLoopGroup3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRepeated_TrainingLoopGroup3 of repeated_TrainingLoopGroup3) {
      snapshot = repeated_TrainingLoopGroup3.getSnapshot();
      repeated_TrainingLoopGroup3LoopScheduler.add(importConditions(snapshot));
      const TrainingLoopGroup3LoopScheduler = new Scheduler(psychoJS);
      repeated_TrainingLoopGroup3LoopScheduler.add(TrainingLoopGroup3LoopBegin(TrainingLoopGroup3LoopScheduler, snapshot));
      repeated_TrainingLoopGroup3LoopScheduler.add(TrainingLoopGroup3LoopScheduler);
      repeated_TrainingLoopGroup3LoopScheduler.add(TrainingLoopGroup3LoopEnd);
      repeated_TrainingLoopGroup3LoopScheduler.add(CheckAccuracy3RoutineBegin(snapshot));
      repeated_TrainingLoopGroup3LoopScheduler.add(CheckAccuracy3RoutineEachFrame());
      repeated_TrainingLoopGroup3LoopScheduler.add(CheckAccuracy3RoutineEnd(snapshot));
      repeated_TrainingLoopGroup3LoopScheduler.add(repeated_TrainingLoopGroup3LoopEndIteration(repeated_TrainingLoopGroup3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var TrainingLoopGroup3;
function TrainingLoopGroup3LoopBegin(TrainingLoopGroup3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TrainingLoopGroup3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'English Trained- Training Phase.xlsx',
      seed: undefined, name: 'TrainingLoopGroup3'
    });
    psychoJS.experiment.addLoop(TrainingLoopGroup3); // add the loop to the experiment
    currentLoop = TrainingLoopGroup3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrainingLoopGroup3 of TrainingLoopGroup3) {
      snapshot = TrainingLoopGroup3.getSnapshot();
      TrainingLoopGroup3LoopScheduler.add(importConditions(snapshot));
      TrainingLoopGroup3LoopScheduler.add(TrainingGroup3RoutineBegin(snapshot));
      TrainingLoopGroup3LoopScheduler.add(TrainingGroup3RoutineEachFrame());
      TrainingLoopGroup3LoopScheduler.add(TrainingGroup3RoutineEnd(snapshot));
      TrainingLoopGroup3LoopScheduler.add(FeedbackRoutine3RoutineBegin(snapshot));
      TrainingLoopGroup3LoopScheduler.add(FeedbackRoutine3RoutineEachFrame());
      TrainingLoopGroup3LoopScheduler.add(FeedbackRoutine3RoutineEnd(snapshot));
      TrainingLoopGroup3LoopScheduler.add(TrainingLoopGroup3LoopEndIteration(TrainingLoopGroup3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function TrainingLoopGroup3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(TrainingLoopGroup3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function TrainingLoopGroup3LoopEndIteration(scheduler, snapshot) {
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


async function repeated_TrainingLoopGroup3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repeated_TrainingLoopGroup3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function repeated_TrainingLoopGroup3LoopEndIteration(scheduler, snapshot) {
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


var testPhase3Loop;
function testPhase3LoopLoopBegin(testPhase3LoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testPhase3Loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'English Trained- Test Phase.xlsx',
      seed: undefined, name: 'testPhase3Loop'
    });
    psychoJS.experiment.addLoop(testPhase3Loop); // add the loop to the experiment
    currentLoop = testPhase3Loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTestPhase3Loop of testPhase3Loop) {
      snapshot = testPhase3Loop.getSnapshot();
      testPhase3LoopLoopScheduler.add(importConditions(snapshot));
      testPhase3LoopLoopScheduler.add(TestPhase3RoutineBegin(snapshot));
      testPhase3LoopLoopScheduler.add(TestPhase3RoutineEachFrame());
      testPhase3LoopLoopScheduler.add(TestPhase3RoutineEnd(snapshot));
      testPhase3LoopLoopScheduler.add(testPhase3LoopLoopEndIteration(testPhase3LoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function testPhase3LoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(testPhase3Loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function testPhase3LoopLoopEndIteration(scheduler, snapshot) {
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


var correctResponses;
var total_trials;
var _Response3_allKeys;
var TrainingGroup3Components;
function TrainingGroup3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TrainingGroup3' ---
    t = 0;
    TrainingGroup3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('TrainingGroup3.started', globalClock.getTime());
    // Run 'Begin Routine' code from var
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
    
    SpeakerPicture3.setImage(SpeakerImage1);
    image_15.setImage(SpeakerImage2);
    image_16.setImage(SpeakerImage3);
    image_17.setImage(SpeakerImage4);
    Sound3.setValue(TrainingSound);
    Sound3.setVolume(1.0);
    Instruction3.setText('Who is speaking? press the number corresponding to the speaker.\nگوینده کیست؟ شماره گوینده را وارد کنید');
    Response3.keys = undefined;
    Response3.rt = undefined;
    _Response3_allKeys = [];
    // keep track of which components have finished
    TrainingGroup3Components = [];
    TrainingGroup3Components.push(SpeakerPicture3);
    TrainingGroup3Components.push(image_15);
    TrainingGroup3Components.push(image_16);
    TrainingGroup3Components.push(image_17);
    TrainingGroup3Components.push(Sound3);
    TrainingGroup3Components.push(Instruction3);
    TrainingGroup3Components.push(Response3);
    
    for (const thisComponent of TrainingGroup3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TrainingGroup3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TrainingGroup3' ---
    // get current time
    t = TrainingGroup3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SpeakerPicture3* updates
    if (t >= 0.0 && SpeakerPicture3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SpeakerPicture3.tStart = t;  // (not accounting for frame time here)
      SpeakerPicture3.frameNStart = frameN;  // exact frame index
      
      SpeakerPicture3.setAutoDraw(true);
    }
    
    
    // *image_15* updates
    if (t >= 0.0 && image_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_15.tStart = t;  // (not accounting for frame time here)
      image_15.frameNStart = frameN;  // exact frame index
      
      image_15.setAutoDraw(true);
    }
    
    
    // *image_16* updates
    if (t >= 0.0 && image_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_16.tStart = t;  // (not accounting for frame time here)
      image_16.frameNStart = frameN;  // exact frame index
      
      image_16.setAutoDraw(true);
    }
    
    
    // *image_17* updates
    if (t >= 0.0 && image_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_17.tStart = t;  // (not accounting for frame time here)
      image_17.frameNStart = frameN;  // exact frame index
      
      image_17.setAutoDraw(true);
    }
    
    // start/stop Sound3
    if (t >= 0.0 && Sound3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound3.tStart = t;  // (not accounting for frame time here)
      Sound3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ Sound3.play(); });  // screen flip
      Sound3.status = PsychoJS.Status.STARTED;
    }
    if (t >= (Sound3.getDuration() + Sound3.tStart)     && Sound3.status === PsychoJS.Status.STARTED) {
      Sound3.stop();  // stop the sound (if longer than duration)
      Sound3.status = PsychoJS.Status.FINISHED;
    }
    
    // *Instruction3* updates
    if (t >= 0.0 && Instruction3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction3.tStart = t;  // (not accounting for frame time here)
      Instruction3.frameNStart = frameN;  // exact frame index
      
      Instruction3.setAutoDraw(true);
    }
    
    
    // *Response3* updates
    if (t >= 0.0 && Response3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Response3.tStart = t;  // (not accounting for frame time here)
      Response3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Response3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Response3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Response3.clearEvents(); });
    }
    
    if (Response3.status === PsychoJS.Status.STARTED) {
      let theseKeys = Response3.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Response3_allKeys = _Response3_allKeys.concat(theseKeys);
      if (_Response3_allKeys.length > 0) {
        Response3.keys = _Response3_allKeys[_Response3_allKeys.length - 1].name;  // just the last key pressed
        Response3.rt = _Response3_allKeys[_Response3_allKeys.length - 1].rt;
        Response3.duration = _Response3_allKeys[_Response3_allKeys.length - 1].duration;
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
    for (const thisComponent of TrainingGroup3Components)
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


var CorrectAnswer;
var participant_response_label;
var feedbackText;
function TrainingGroup3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TrainingGroup3' ---
    for (const thisComponent of TrainingGroup3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TrainingGroup3.stopped', globalClock.getTime());
    // Run 'End Routine' code from var
    CorrectAnswer = EnglishCorrectAnswer;
    if ((Response3.keys.length > 0)) {
        participant_response_label = response_mapping.get(Response3.keys[0], "Invalid");
        if ((participant_response_label === CorrectAnswer)) {
            correctResponses += 1;
            feedbackText = "Correct! \u0635\u062d\u06cc\u062d \u0627\u0633\u062a";
        } else {
            feedbackText = `Incorrect! The correct answer is ${EnglishCorrectAnswer}. نادرست! پاسخ صحیح ${PersianCorrectAnswer} است`;
        }
        total_trials += 1;
    }
    console.log(`Feedback Text: ${feedbackText}`);
    psychoJS.experiment.addData("feedbackText", feedbackText);
    psychoJS.experiment.addData("correct_responses_group3", correctResponses);
    psychoJS.experiment.addData("total_trials_group3", total_trials);
    
    Sound3.stop();  // ensure sound has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Response3.corr, level);
    }
    psychoJS.experiment.addData('Response3.keys', Response3.keys);
    if (typeof Response3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Response3.rt', Response3.rt);
        psychoJS.experiment.addData('Response3.duration', Response3.duration);
        routineTimer.reset();
        }
    
    Response3.stop();
    // the Routine "TrainingGroup3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FeedbackRoutine3Components;
function FeedbackRoutine3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FeedbackRoutine3' ---
    t = 0;
    FeedbackRoutine3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('FeedbackRoutine3.started', globalClock.getTime());
    FeedbackText3.setText(feedbackText);
    // keep track of which components have finished
    FeedbackRoutine3Components = [];
    FeedbackRoutine3Components.push(FeedbackText3);
    
    for (const thisComponent of FeedbackRoutine3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutine3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FeedbackRoutine3' ---
    // get current time
    t = FeedbackRoutine3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FeedbackText3* updates
    if (t >= 0.0 && FeedbackText3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FeedbackText3.tStart = t;  // (not accounting for frame time here)
      FeedbackText3.frameNStart = frameN;  // exact frame index
      
      FeedbackText3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FeedbackText3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FeedbackText3.setAutoDraw(false);
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
    for (const thisComponent of FeedbackRoutine3Components)
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


function FeedbackRoutine3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FeedbackRoutine3' ---
    for (const thisComponent of FeedbackRoutine3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('FeedbackRoutine3.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var accuracy;
var CheckAccuracy3Components;
function CheckAccuracy3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CheckAccuracy3' ---
    t = 0;
    CheckAccuracy3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('CheckAccuracy3.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_15
    TARGET_ACCURACY = 0.85;
    accuracy = ((total_trials > 0) ? (correctResponses / total_trials) : 0.0);
    if ((accuracy >= TARGET_ACCURACY)) {
        proceed_to_test = true;
        repeated_TrainingLoopGroup3.finished = true;
    } else {
        proceed_to_test = false;
        correctResponses = 0;
        total_trials = 0;
    }
    console.log(`Accuracy: ${accuracy}`);
    console.log(`Proceed to test: ${proceed_to_test}`);
    psychoJS.experiment.addData("accuracy_group3", accuracy);
    psychoJS.experiment.addData("proceed_to_test", proceed_to_test);
    
    // keep track of which components have finished
    CheckAccuracy3Components = [];
    
    for (const thisComponent of CheckAccuracy3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CheckAccuracy3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CheckAccuracy3' ---
    // get current time
    t = CheckAccuracy3Clock.getTime();
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
    for (const thisComponent of CheckAccuracy3Components)
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


function CheckAccuracy3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CheckAccuracy3' ---
    for (const thisComponent of CheckAccuracy3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('CheckAccuracy3.stopped', globalClock.getTime());
    // the Routine "CheckAccuracy3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WelcomeTestComponents;
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


var _test3_response_keyboard_allKeys;
var TestPhase3Components;
function TestPhase3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TestPhase3' ---
    t = 0;
    TestPhase3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('TestPhase3.started', globalClock.getTime());
    test3_image1.setImage(SpeakerPhoto1);
    test3_image2.setImage(SpeakerPhoto2);
    test3_image3.setImage(SpeakerPhoto3);
    test3_image4.setImage(SpeakerPhoto4);
    test3_sound.setValue(TestingSound);
    test3_sound.setVolume(1.0);
    text_10.setText('Who is speaking? press the number corresponding to the speaker.\nگوینده کیست؟ شماره گوینده را وارد کنید');
    test3_response_keyboard.keys = undefined;
    test3_response_keyboard.rt = undefined;
    _test3_response_keyboard_allKeys = [];
    // Run 'Begin Routine' code from log_response_test3
    console.log(`Starting TestPhase3`);
    test3_response_keyboard.keys = [];
    
    // keep track of which components have finished
    TestPhase3Components = [];
    TestPhase3Components.push(test3_image1);
    TestPhase3Components.push(test3_image2);
    TestPhase3Components.push(test3_image3);
    TestPhase3Components.push(test3_image4);
    TestPhase3Components.push(test3_sound);
    TestPhase3Components.push(text_10);
    TestPhase3Components.push(test3_response_keyboard);
    
    for (const thisComponent of TestPhase3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TestPhase3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TestPhase3' ---
    // get current time
    t = TestPhase3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test3_image1* updates
    if (t >= 0.0 && test3_image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test3_image1.tStart = t;  // (not accounting for frame time here)
      test3_image1.frameNStart = frameN;  // exact frame index
      
      test3_image1.setAutoDraw(true);
    }
    
    
    // *test3_image2* updates
    if (t >= 0.0 && test3_image2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test3_image2.tStart = t;  // (not accounting for frame time here)
      test3_image2.frameNStart = frameN;  // exact frame index
      
      test3_image2.setAutoDraw(true);
    }
    
    
    // *test3_image3* updates
    if (t >= 0.0 && test3_image3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test3_image3.tStart = t;  // (not accounting for frame time here)
      test3_image3.frameNStart = frameN;  // exact frame index
      
      test3_image3.setAutoDraw(true);
    }
    
    
    // *test3_image4* updates
    if (t >= 0.0 && test3_image4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test3_image4.tStart = t;  // (not accounting for frame time here)
      test3_image4.frameNStart = frameN;  // exact frame index
      
      test3_image4.setAutoDraw(true);
    }
    
    // start/stop test3_sound
    if (t >= 0.0 && test3_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test3_sound.tStart = t;  // (not accounting for frame time here)
      test3_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ test3_sound.play(); });  // screen flip
      test3_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (test3_sound.getDuration() + test3_sound.tStart)     && test3_sound.status === PsychoJS.Status.STARTED) {
      test3_sound.stop();  // stop the sound (if longer than duration)
      test3_sound.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    
    // *test3_response_keyboard* updates
    if (t >= 0.0 && test3_response_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test3_response_keyboard.tStart = t;  // (not accounting for frame time here)
      test3_response_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { test3_response_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { test3_response_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { test3_response_keyboard.clearEvents(); });
    }
    
    if (test3_response_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = test3_response_keyboard.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _test3_response_keyboard_allKeys = _test3_response_keyboard_allKeys.concat(theseKeys);
      if (_test3_response_keyboard_allKeys.length > 0) {
        test3_response_keyboard.keys = _test3_response_keyboard_allKeys[_test3_response_keyboard_allKeys.length - 1].name;  // just the last key pressed
        test3_response_keyboard.rt = _test3_response_keyboard_allKeys[_test3_response_keyboard_allKeys.length - 1].rt;
        test3_response_keyboard.duration = _test3_response_keyboard_allKeys[_test3_response_keyboard_allKeys.length - 1].duration;
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
    for (const thisComponent of TestPhase3Components)
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


function TestPhase3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TestPhase3' ---
    for (const thisComponent of TestPhase3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TestPhase3.stopped', globalClock.getTime());
    test3_sound.stop();  // ensure sound has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(test3_response_keyboard.corr, level);
    }
    psychoJS.experiment.addData('test3_response_keyboard.keys', test3_response_keyboard.keys);
    if (typeof test3_response_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('test3_response_keyboard.rt', test3_response_keyboard.rt);
        psychoJS.experiment.addData('test3_response_keyboard.duration', test3_response_keyboard.duration);
        routineTimer.reset();
        }
    
    test3_response_keyboard.stop();
    // Run 'End Routine' code from log_response_test3
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
    if ((_pj.in_es6("test3_response_keyboard", locals()) && (test3_response_keyboard.keys !== null))) {
        psychoJS.experiment.addData("test3_response", test3_response_keyboard.keys);
    } else {
        psychoJS.experiment.addData("test3_response", "No response");
    }
    psychoJS.experiment.addData("test3_image_file1", SpeakerPhoto1);
    psychoJS.experiment.addData("test3_image_file2", SpeakerPhoto2);
    psychoJS.experiment.addData("test3_image_file3", SpeakerPhoto3);
    psychoJS.experiment.addData("test3_image_file4", SpeakerPhoto4);
    psychoJS.experiment.addData("test3_sound_file", TestingSound);
    psychoJS.experiment.addData("english_correct_answer", EnglishCorrectAnswer);
    psychoJS.experiment.addData("persian_correct_answer", PersianCorrectAnswer);
    
    // the Routine "TestPhase3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finishComponents;
function finishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finish' ---
    t = 0;
    finishClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('finish.started', globalClock.getTime());
    // keep track of which components have finished
    finishComponents = [];
    finishComponents.push(text_11);
    
    for (const thisComponent of finishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finish' ---
    // get current time
    t = finishClock.getTime();
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
    for (const thisComponent of finishComponents)
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


function finishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finish' ---
    for (const thisComponent of finishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('finish.stopped', globalClock.getTime());
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
