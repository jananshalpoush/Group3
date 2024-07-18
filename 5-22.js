/************* 
 * 5-22 *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = '5-22';  // from the Builder filename that created this script
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
flowScheduler.add(IntroductionRoutineBegin());
flowScheduler.add(IntroductionRoutineEachFrame());
flowScheduler.add(IntroductionRoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(InitializeExperimentRoutineBegin());
flowScheduler.add(InitializeExperimentRoutineEachFrame());
flowScheduler.add(InitializeExperimentRoutineEnd());
const TrainingLoopGroup1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrainingLoopGroup1LoopBegin(TrainingLoopGroup1LoopScheduler));
flowScheduler.add(TrainingLoopGroup1LoopScheduler);
flowScheduler.add(TrainingLoopGroup1LoopEnd);



const TrainingLoopGroup2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrainingLoopGroup2LoopBegin(TrainingLoopGroup2LoopScheduler));
flowScheduler.add(TrainingLoopGroup2LoopScheduler);
flowScheduler.add(TrainingLoopGroup2LoopEnd);



const TrainingLoopGroup3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrainingLoopGroup3LoopBegin(TrainingLoopGroup3LoopScheduler));
flowScheduler.add(TrainingLoopGroup3LoopScheduler);
flowScheduler.add(TrainingLoopGroup3LoopEnd);



flowScheduler.add(TransitionRoutineRoutineBegin());
flowScheduler.add(TransitionRoutineRoutineEachFrame());
flowScheduler.add(TransitionRoutineRoutineEnd());
flowScheduler.add(WelcomeTestRoutineBegin());
flowScheduler.add(WelcomeTestRoutineEachFrame());
flowScheduler.add(WelcomeTestRoutineEnd());
const testPhase1LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testPhase1LoopLoopBegin(testPhase1LoopLoopScheduler));
flowScheduler.add(testPhase1LoopLoopScheduler);
flowScheduler.add(testPhase1LoopLoopEnd);


const testPhase2LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testPhase2LoopLoopBegin(testPhase2LoopLoopScheduler));
flowScheduler.add(testPhase2LoopLoopScheduler);
flowScheduler.add(testPhase2LoopLoopEnd);


const testPhase3LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testPhase3LoopLoopBegin(testPhase3LoopLoopScheduler));
flowScheduler.add(testPhase3LoopLoopScheduler);
flowScheduler.add(testPhase3LoopLoopEnd);


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
    {'name': 'Persian Trained- Training Phase.xlsx', 'path': 'Persian Trained- Training Phase.xlsx'},
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
    {'name': 'Persian Trained- Test Phase.xlsx', 'path': 'Persian Trained- Test Phase.xlsx'},
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

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.4';
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
    text: 'Press 1 for Group 1, 2 for Group 2, 3 for Group 3.\nبرای گزینش گروه خود عدد ۱ یا ۲ یا ۳ را  انتخاب کنید',
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
  
  // Initialize components for Routine "Introduction"
  IntroductionClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Introduction: \nYou will hear four speakers in English and Persian to help you familiarize yourself with them.\nدر ابتدا به صدای چهار گوینده گوش دهید تا با انها اشنا شوید',
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
    text: 'Welcome to the Speaker Identification Task Experiment\n\nThis experiment is designed in two phases: Training Phase and Test Phase. \nPress the number of the speaker on the keyboard during each trial. \n\nبه ازمایش شناسایی گوینده خوش امدید\n\nاین ازمایش دو مرحله دارد: اموزش و ازمون\nدر طول هر مرحله شماره گوینده را وارد کنید\nدر مرحله آموزش پاسخ صحیح را دریافت خواهید کرد\n اما در مرحله آزمون بازخوردی دریافت نخواهید کرد',
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
  total_trials = 0;
  correct_responses = 0;
  TARGET_ACCURACY = 0.85;
  response_mapping = {"1": "Speaker1", "2": "Speaker2", "3": "Speaker3", "4": "Speaker4"};
  TrainingGroup = 1;
  
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
  
  // Initialize components for Routine "TrainingGroup2"
  TrainingGroup2Clock = new util.Clock();
  image_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_11', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.6), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  SpeakerPicture2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SpeakerPicture2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.2), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.2, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.6, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  Sound2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  Sound2.setVolume(1.0);
  Instruction2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  Response2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "FeedbackRoutine2"
  FeedbackRoutine2Clock = new util.Clock();
  FeedbackText2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FeedbackText2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
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
  
  // Initialize components for Routine "TransitionRoutine"
  TransitionRoutineClock = new util.Clock();
  // Initialize components for Routine "WelcomeTest"
  WelcomeTestClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Weolcome to the Test Phase!\nPlease enter the number corresponding to the speaker you hear.\nبه مرحله ازمون خوش امدید\nلطفا پس از شنیدن جملات٬ شماره گوینده را وارد کنید',
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
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  test1_image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_image2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.2), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  test1_image3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_image3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.2, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  test1_image4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1_image4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.6, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
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
    depth: -5.0 
  });
  
  test1_response_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TestPhase2"
  TestPhase2Clock = new util.Clock();
  test2_image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test2_image1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.6), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  test2_image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test2_image2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.2), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  test2_image3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test2_image3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.2, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  test2_image4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test2_image4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.6, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  test2_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  test2_sound.setVolume(1.0);
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  test2_response_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
      let theseKeys = key_resp.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
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

function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
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
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

function TrainingLoopGroup1LoopBegin(TrainingLoopGroup1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TrainingLoopGroup1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1 if group == 1 else 0, method: TrialHandler.Method.RANDOM,
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

function TrainingLoopGroup2LoopBegin(TrainingLoopGroup2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TrainingLoopGroup2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1 if group == 2 else 0, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Persian Trained- Training Phase.xlsx',
      seed: undefined, name: 'TrainingLoopGroup2'
    });
    psychoJS.experiment.addLoop(TrainingLoopGroup2); // add the loop to the experiment
    currentLoop = TrainingLoopGroup2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrainingLoopGroup2 of TrainingLoopGroup2) {
      snapshot = TrainingLoopGroup2.getSnapshot();
      TrainingLoopGroup2LoopScheduler.add(importConditions(snapshot));
      TrainingLoopGroup2LoopScheduler.add(TrainingGroup2RoutineBegin(snapshot));
      TrainingLoopGroup2LoopScheduler.add(TrainingGroup2RoutineEachFrame());
      TrainingLoopGroup2LoopScheduler.add(TrainingGroup2RoutineEnd(snapshot));
      TrainingLoopGroup2LoopScheduler.add(FeedbackRoutine2RoutineBegin(snapshot));
      TrainingLoopGroup2LoopScheduler.add(FeedbackRoutine2RoutineEachFrame());
      TrainingLoopGroup2LoopScheduler.add(FeedbackRoutine2RoutineEnd(snapshot));
      TrainingLoopGroup2LoopScheduler.add(TrainingLoopGroup2LoopEndIteration(TrainingLoopGroup2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function TrainingLoopGroup2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(TrainingLoopGroup2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function TrainingLoopGroup2LoopEndIteration(scheduler, snapshot) {
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

function TrainingLoopGroup3LoopBegin(TrainingLoopGroup3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TrainingLoopGroup3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1 if group == 3 else 0, method: TrialHandler.Method.RANDOM,
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

function testPhase2LoopLoopBegin(testPhase2LoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testPhase2Loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Persian Trained- Test Phase.xlsx',
      seed: undefined, name: 'testPhase2Loop'
    });
    psychoJS.experiment.addLoop(testPhase2Loop); // add the loop to the experiment
    currentLoop = testPhase2Loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTestPhase2Loop of testPhase2Loop) {
      snapshot = testPhase2Loop.getSnapshot();
      testPhase2LoopLoopScheduler.add(importConditions(snapshot));
      testPhase2LoopLoopScheduler.add(TestPhase2RoutineBegin(snapshot));
      testPhase2LoopLoopScheduler.add(TestPhase2RoutineEachFrame());
      testPhase2LoopLoopScheduler.add(TestPhase2RoutineEnd(snapshot));
      testPhase2LoopLoopScheduler.add(testPhase2LoopLoopEndIteration(testPhase2LoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function testPhase2LoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(testPhase2Loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function testPhase2LoopLoopEndIteration(scheduler, snapshot) {
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
    console.log(`Response Mapping: ${response_mapping}`);
    
    image_1.setImage(SpeakerImage1);
    image_2.setImage(SpeakerImage2);
    image_3.setImage(SpeakerImage3);
    image_4.setImage(SpeakerImage4);
    sound1.setValue(TrainingSound);
    sound1.setVolume(1.0);
    Instruction.setText('Who is speaking? press the number corresponding to the speaker.\nگوینده کیست؟ شماره گوینده را وارد کنید\n');
    ResponseKey.keys = undefined;
    ResponseKey.rt = undefined;
    _ResponseKey_allKeys = [];
    // keep track of which components have finished
    TrainingGroup1Components = [];
    TrainingGroup1Components.push(image_1);
    TrainingGroup1Components.push(image_2);
    TrainingGroup1Components.push(image_3);
    TrainingGroup1Components.push(image_4);
    TrainingGroup1Components.push(sound1);
    TrainingGroup1Components.push(Instruction);
    TrainingGroup1Components.push(ResponseKey);
    
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
    participant_response_label = response_mapping.get(ResponseKey.keys[0], "Invalid");
    if ((participant_response_label === CorrectAnswer)) {
        correct_responses += 1;
        feedbackText = "Correct! \u0635\u062d\u06cc\u062d \u0627\u0633\u062a";
    } else {
        feedbackText = `Incorrect! The correct answer is ${EnglishCorrectAnswer}. نادرست! پاسخ صحیح ${PersianCorrectAnswer} است`;
    }
    console.log(`Feedback Text: ${feedbackText}`);
    psychoJS.experiment.addData("feedbackText", feedbackText);
    
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
    // Run 'End Routine' code from code_4
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
    if (((_pj.in_es6("ResponseKey", globals()) && _pj.in_es6("keys", ResponseKey)) && (ResponseKey.keys.length > 0))) {
        participant_response_label = ResponseKey.keys.slice((- 1))[0];
        if ((participant_response_label === CorrectAnswer)) {
            correct_responses += 1;
        }
        total_trials += 1;
    }
    psychoJS.experiment.addData("correct_responses", correct_responses);
    psychoJS.experiment.addData("total_trials", total_trials);
    
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
    // Run 'Begin Routine' code from code_6
    if (((total_trials > 0) && ((correct_responses / total_trials) >= TARGET_ACCURACY))) {
        continue_to_test_phases = true;
        TrainingLoopGroup1.finished = true;
    } else {
        continue_to_test_phases = false;
    }
    
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

function TrainingGroup2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TrainingGroup2' ---
    t = 0;
    TrainingGroup2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('TrainingGroup2.started', globalClock.getTime());
    // Run 'Begin Routine' code from var_1
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
    response_mapping = {"1": "Speaker1", "2": "Speaker2", "3": "Speaker3", "4": "Speaker4"};
    console.log(`Response Mapping: ${response_mapping}`);
    
    image_11.setImage(SpeakerImage1);
    SpeakerPicture2.setImage(SpeakerImage2);
    image_5.setImage(SpeakerImage3);
    image_6.setImage(SpeakerImage4);
    Sound2.setValue(TrainingSound);
    Sound2.setVolume(1.0);
    Instruction2.setText('Who is speaking? press the number corresponding to the speaker.\nگوینده کیست؟ شماره گوینده را وارد کنید');
    Response2.keys = undefined;
    Response2.rt = undefined;
    _Response2_allKeys = [];
    // keep track of which components have finished
    TrainingGroup2Components = [];
    TrainingGroup2Components.push(image_11);
    TrainingGroup2Components.push(SpeakerPicture2);
    TrainingGroup2Components.push(image_5);
    TrainingGroup2Components.push(image_6);
    TrainingGroup2Components.push(Sound2);
    TrainingGroup2Components.push(Instruction2);
    TrainingGroup2Components.push(Response2);
    
    for (const thisComponent of TrainingGroup2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function TrainingGroup2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TrainingGroup2' ---
    // get current time
    t = TrainingGroup2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_11* updates
    if (t >= 0.0 && image_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_11.tStart = t;  // (not accounting for frame time here)
      image_11.frameNStart = frameN;  // exact frame index
      
      image_11.setAutoDraw(true);
    }
    
    
    // *SpeakerPicture2* updates
    if (t >= 0.0 && SpeakerPicture2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SpeakerPicture2.tStart = t;  // (not accounting for frame time here)
      SpeakerPicture2.frameNStart = frameN;  // exact frame index
      
      SpeakerPicture2.setAutoDraw(true);
    }
    
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }
    
    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }
    
    // start/stop Sound2
    if (t >= 0.0 && Sound2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound2.tStart = t;  // (not accounting for frame time here)
      Sound2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ Sound2.play(); });  // screen flip
      Sound2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (Sound2.getDuration() + Sound2.tStart)     && Sound2.status === PsychoJS.Status.STARTED) {
      Sound2.stop();  // stop the sound (if longer than duration)
      Sound2.status = PsychoJS.Status.FINISHED;
    }
    
    // *Instruction2* updates
    if (t >= 0.0 && Instruction2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction2.tStart = t;  // (not accounting for frame time here)
      Instruction2.frameNStart = frameN;  // exact frame index
      
      Instruction2.setAutoDraw(true);
    }
    
    
    // *Response2* updates
    if (t >= 0.0 && Response2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Response2.tStart = t;  // (not accounting for frame time here)
      Response2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Response2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Response2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Response2.clearEvents(); });
    }
    
    if (Response2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Response2.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Response2_allKeys = _Response2_allKeys.concat(theseKeys);
      if (_Response2_allKeys.length > 0) {
        Response2.keys = _Response2_allKeys[_Response2_allKeys.length - 1].name;  // just the last key pressed
        Response2.rt = _Response2_allKeys[_Response2_allKeys.length - 1].rt;
        Response2.duration = _Response2_allKeys[_Response2_allKeys.length - 1].duration;
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
    for (const thisComponent of TrainingGroup2Components)
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

function TrainingGroup2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TrainingGroup2' ---
    for (const thisComponent of TrainingGroup2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TrainingGroup2.stopped', globalClock.getTime());
    // Run 'End Routine' code from var_1
    CorrectAnswer = EnglishCorrectAnswer;
    if ((Response2.keys.length > 0)) {
        participant_response_label = response_mapping.get(Response2.keys[0], "Invalid");
        if ((participant_response_label === CorrectAnswer)) {
            correctResponses += 1;
            feedbackText = "Correct! \u0635\u062d\u06cc\u062d \u0627\u0633\u062a";
        } else {
            feedbackText = `Incorrect! The correct answer is ${EnglishCorrectAnswer}. نادرست! پاسخ صحیح ${PersianCorrectAnswer} است`;
        }
    }
    console.log(`Feedback Text: ${feedbackText}`);
    psychoJS.experiment.addData("feedbackText", feedbackText);
    
    Sound2.stop();  // ensure sound has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Response2.corr, level);
    }
    psychoJS.experiment.addData('Response2.keys', Response2.keys);
    if (typeof Response2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Response2.rt', Response2.rt);
        psychoJS.experiment.addData('Response2.duration', Response2.duration);
        routineTimer.reset();
        }
    
    Response2.stop();
    // Run 'End Routine' code from code_9
    if ((Response2.keys.length > 0)) {
        participant_response_label = Response2.keys.slice((- 1))[0];
        if ((participant_response_label === CorrectAnswer)) {
            correct_responses += 1;
        }
        total_trials += 1;
    }
    psychoJS.experiment.addData("correct_responses", correct_responses);
    psychoJS.experiment.addData("total_trials", total_trials);
    
    // the Routine "TrainingGroup2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function FeedbackRoutine2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FeedbackRoutine2' ---
    t = 0;
    FeedbackRoutine2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('FeedbackRoutine2.started', globalClock.getTime());
    FeedbackText2.setText(feedbackText);
    // Run 'Begin Routine' code from code_11
    if (((total_trials > 0) && ((correct_responses / total_trials) >= TARGET_ACCURACY))) {
        continue_to_test_phases = true;
        TrainingLoopGroup1.finished = true;
    } else {
        continue_to_test_phases = false;
    }
    
    // keep track of which components have finished
    FeedbackRoutine2Components = [];
    FeedbackRoutine2Components.push(FeedbackText2);
    
    for (const thisComponent of FeedbackRoutine2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function FeedbackRoutine2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FeedbackRoutine2' ---
    // get current time
    t = FeedbackRoutine2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FeedbackText2* updates
    if (t >= 0.0 && FeedbackText2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FeedbackText2.tStart = t;  // (not accounting for frame time here)
      FeedbackText2.frameNStart = frameN;  // exact frame index
      
      FeedbackText2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FeedbackText2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FeedbackText2.setAutoDraw(false);
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
    for (const thisComponent of FeedbackRoutine2Components)
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

function FeedbackRoutine2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FeedbackRoutine2' ---
    for (const thisComponent of FeedbackRoutine2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('FeedbackRoutine2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
    }
    console.log(`Feedback Text: ${feedbackText}`);
    psychoJS.experiment.addData("feedbackText", feedbackText);
    
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
    // Run 'End Routine' code from code_10
    if ((Response3.keys.length > 0)) {
        participant_response_label = Response3.keys.slice((- 1))[0];
        if ((participant_response_label === CorrectAnswer)) {
            correct_responses += 1;
        }
        total_trials += 1;
    }
    psychoJS.experiment.addData("correct_responses", correct_responses);
    psychoJS.experiment.addData("total_trials", total_trials);
    
    // the Routine "TrainingGroup3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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

function TransitionRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TransitionRoutine' ---
    t = 0;
    TransitionRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('TransitionRoutine.started', globalClock.getTime());
    // Run 'Begin Routine' code from transition_logic
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
    required_trials = 80;
    min_accuracy = 0.85;
    if ((TrainingGroup === 1)) {
        correct_responses = (_pj.in_es6("TrainingLoopGroup1", globals()) ? TrainingLoopGroup1.nCorrect : 0);
        total_responses = (_pj.in_es6("TrainingLoopGroup1", globals()) ? TrainingLoopGroup1.nTotal : 0);
    } else {
        if ((TrainingGroup === 2)) {
            correct_responses = (_pj.in_es6("TrainingLoopGroup2", globals()) ? TrainingLoopGroup2.nCorrect : 0);
            total_responses = (_pj.in_es6("TrainingLoopGroup2", globals()) ? TrainingLoopGroup2.nTotal : 0);
        } else {
            if ((TrainingGroup === 3)) {
                correct_responses = (_pj.in_es6("TrainingLoopGroup3", globals()) ? TrainingLoopGroup3.nCorrect : 0);
                total_responses = (_pj.in_es6("TrainingLoopGroup3", globals()) ? TrainingLoopGroup3.nTotal : 0);
            }
        }
    }
    if ((total_responses > 0)) {
        accuracy = (correct_responses / total_responses);
    } else {
        accuracy = 0;
    }
    if (((total_responses >= required_trials) && (accuracy >= min_accuracy))) {
        if ((TrainingGroup === 1)) {
            nextRoutine = "TestPhase1";
        } else {
            if ((TrainingGroup === 2)) {
                nextRoutine = "TestPhase2";
            } else {
                if ((TrainingGroup === 3)) {
                    nextRoutine = "TestPhase3";
                }
            }
        }
    } else {
        if ((TrainingGroup === 1)) {
            nextRoutine = "TrainingGroup1";
        } else {
            if ((TrainingGroup === 2)) {
                nextRoutine = "TrainingGroup2";
            } else {
                if ((TrainingGroup === 3)) {
                    nextRoutine = "TrainingGroup3";
                }
            }
        }
    }
    
    // keep track of which components have finished
    TransitionRoutineComponents = [];
    
    for (const thisComponent of TransitionRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function TransitionRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TransitionRoutine' ---
    // get current time
    t = TransitionRoutineClock.getTime();
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
    for (const thisComponent of TransitionRoutineComponents)
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

function TransitionRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TransitionRoutine' ---
    for (const thisComponent of TransitionRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TransitionRoutine.stopped', globalClock.getTime());
    // Run 'End Routine' code from transition_logic
    if ((nextRoutine === "TestPhase1")) {
        testPhase1Loop.finished = false;
    } else {
        if ((nextRoutine === "TestPhase2")) {
            testPhase2Loop.finished = false;
        } else {
            if ((nextRoutine === "TestPhase3")) {
                testPhase3Loop.finished = false;
            } else {
                if ((nextRoutine === "TrainingGroup1")) {
                    TrainingLoopGroup1.finished = false;
                } else {
                    if ((nextRoutine === "TrainingGroup2")) {
                        TrainingLoopGroup2.finished = false;
                    } else {
                        if ((nextRoutine === "TrainingGroup3")) {
                            TrainingLoopGroup3.finished = false;
                        }
                    }
                }
            }
        }
    }
    psychoJS.experiment.addData("nextRoutine", nextRoutine);
    continueRoutine = false;
    
    // the Routine "TransitionRoutine" was not non-slip safe, so reset the non-slip timer
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
    test1_image1.setImage('Images/Speaker1.jpg');
    test1_image2.setImage('Images/Speaker2.jpg');
    test1_image3.setImage('Images/Speaker3.jpg');
    test1_image4.setImage('Images/Speaker4.jpg');
    test1_sound.setValue(TestingSound);
    test1_sound.setVolume(1.0);
    text_3.setText('Who is speaking? press the number corresponding to the speaker.\nگوینده کیست؟ شماره گوینده را وارد کنید');
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
    psychoJS.experiment.addData("english_correct_answer", EnglishCorrectAnswer);
    psychoJS.experiment.addData("persian_correct_answer", PersianCorrectAnswer);
    
    // the Routine "TestPhase1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function TestPhase2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TestPhase2' ---
    t = 0;
    TestPhase2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('TestPhase2.started', globalClock.getTime());
    test2_image1.setImage(SpeakerPhoto1);
    test2_image2.setImage(SpeakerPhoto2);
    test2_image3.setImage(SpeakerPhoto3);
    test2_image4.setImage(SpeakerPhoto4);
    test2_sound.setValue(TestingSound);
    test2_sound.setVolume(1.0);
    text_8.setText('Who is speaking? press the number corresponding to the speaker.\nگوینده کیست؟ شماره گوینده را وارد کنید');
    test2_response_keyboard.keys = undefined;
    test2_response_keyboard.rt = undefined;
    _test2_response_keyboard_allKeys = [];
    // Run 'Begin Routine' code from log_response_test2
    console.log(`Starting TestPhase2`);
    test2_response_keyboard.keys = [];
    
    // keep track of which components have finished
    TestPhase2Components = [];
    TestPhase2Components.push(test2_image1);
    TestPhase2Components.push(test2_image2);
    TestPhase2Components.push(test2_image3);
    TestPhase2Components.push(test2_image4);
    TestPhase2Components.push(test2_sound);
    TestPhase2Components.push(text_8);
    TestPhase2Components.push(test2_response_keyboard);
    
    for (const thisComponent of TestPhase2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function TestPhase2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TestPhase2' ---
    // get current time
    t = TestPhase2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test2_image1* updates
    if (t >= 0.0 && test2_image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test2_image1.tStart = t;  // (not accounting for frame time here)
      test2_image1.frameNStart = frameN;  // exact frame index
      
      test2_image1.setAutoDraw(true);
    }
    
    
    // *test2_image2* updates
    if (t >= 0.0 && test2_image2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test2_image2.tStart = t;  // (not accounting for frame time here)
      test2_image2.frameNStart = frameN;  // exact frame index
      
      test2_image2.setAutoDraw(true);
    }
    
    
    // *test2_image3* updates
    if (t >= 0.0 && test2_image3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test2_image3.tStart = t;  // (not accounting for frame time here)
      test2_image3.frameNStart = frameN;  // exact frame index
      
      test2_image3.setAutoDraw(true);
    }
    
    
    // *test2_image4* updates
    if (t >= 0.0 && test2_image4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test2_image4.tStart = t;  // (not accounting for frame time here)
      test2_image4.frameNStart = frameN;  // exact frame index
      
      test2_image4.setAutoDraw(true);
    }
    
    // start/stop test2_sound
    if (t >= 0.0 && test2_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test2_sound.tStart = t;  // (not accounting for frame time here)
      test2_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ test2_sound.play(); });  // screen flip
      test2_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (test2_sound.getDuration() + test2_sound.tStart)     && test2_sound.status === PsychoJS.Status.STARTED) {
      test2_sound.stop();  // stop the sound (if longer than duration)
      test2_sound.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // *test2_response_keyboard* updates
    if (t >= 0.0 && test2_response_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test2_response_keyboard.tStart = t;  // (not accounting for frame time here)
      test2_response_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { test2_response_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { test2_response_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { test2_response_keyboard.clearEvents(); });
    }
    
    if (test2_response_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = test2_response_keyboard.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _test2_response_keyboard_allKeys = _test2_response_keyboard_allKeys.concat(theseKeys);
      if (_test2_response_keyboard_allKeys.length > 0) {
        test2_response_keyboard.keys = _test2_response_keyboard_allKeys[_test2_response_keyboard_allKeys.length - 1].name;  // just the last key pressed
        test2_response_keyboard.rt = _test2_response_keyboard_allKeys[_test2_response_keyboard_allKeys.length - 1].rt;
        test2_response_keyboard.duration = _test2_response_keyboard_allKeys[_test2_response_keyboard_allKeys.length - 1].duration;
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
    for (const thisComponent of TestPhase2Components)
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

function TestPhase2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TestPhase2' ---
    for (const thisComponent of TestPhase2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TestPhase2.stopped', globalClock.getTime());
    test2_sound.stop();  // ensure sound has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(test2_response_keyboard.corr, level);
    }
    psychoJS.experiment.addData('test2_response_keyboard.keys', test2_response_keyboard.keys);
    if (typeof test2_response_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('test2_response_keyboard.rt', test2_response_keyboard.rt);
        psychoJS.experiment.addData('test2_response_keyboard.duration', test2_response_keyboard.duration);
        routineTimer.reset();
        }
    
    test2_response_keyboard.stop();
    // Run 'End Routine' code from log_response_test2
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
    if ((_pj.in_es6("test2_response_keyboard", locals()) && (test2_response_keyboard.keys !== null))) {
        psychoJS.experiment.addData("test2_response", test2_response_keyboard.keys);
    } else {
        psychoJS.experiment.addData("test2_response", "No response");
    }
    psychoJS.experiment.addData("test2_image_file1", SpeakerPhoto1);
    psychoJS.experiment.addData("test2_image_file2", SpeakerPhoto2);
    psychoJS.experiment.addData("test2_image_file3", SpeakerPhoto3);
    psychoJS.experiment.addData("test2_image_file4", SpeakerPhoto4);
    psychoJS.experiment.addData("test2_sound_file", TestingSound);
    psychoJS.experiment.addData("english_correct_answer", EnglishCorrectAnswer);
    psychoJS.experiment.addData("persian_correct_answer", PersianCorrectAnswer);
    
    // the Routine "TestPhase2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

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
