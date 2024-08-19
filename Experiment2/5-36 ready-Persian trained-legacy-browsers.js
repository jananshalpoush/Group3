/*********************************** 
 * 5-36 Ready-Persian Trained *
 ***********************************/


// store info about the experiment session:
let expName = '5-36 ready-Persian trained';  // from the Builder filename that created this script
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
const repeated_TrainingLoopGroup2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeated_TrainingLoopGroup2LoopBegin(repeated_TrainingLoopGroup2LoopScheduler));
flowScheduler.add(repeated_TrainingLoopGroup2LoopScheduler);
flowScheduler.add(repeated_TrainingLoopGroup2LoopEnd);







flowScheduler.add(WelcomeTestRoutineBegin());
flowScheduler.add(WelcomeTestRoutineEachFrame());
flowScheduler.add(WelcomeTestRoutineEnd());
const testPhase2LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testPhase2LoopLoopBegin(testPhase2LoopLoopScheduler));
flowScheduler.add(testPhase2LoopLoopScheduler);
flowScheduler.add(testPhase2LoopLoopEnd);


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
    text: '۲',
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
  TrainingGroup = 2;
  sessionNumber = 1;
  trial_count = 0;
  break_after_trials = 40;
  break_duration = 360;
  break_flag = false;
  break_start_time = null;
  break_message = "take a break";
  
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
  
  // Run 'Begin Experiment' code from SessionManager
  trialN = 0;
  
  SessionNumberTest = new visual.TextStim({
    win: psychoJS.window,
    name: 'SessionNumberTest',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
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
  
  mouse2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse2.mouseClock = new util.Clock();
  checkbox2 = new visual.Rect ({
    win: psychoJS.window, name: 'checkbox2', 
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
  
  // Run 'Begin Experiment' code from code_19
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
  
  // Initialize components for Routine "CheckAccuracy2"
  CheckAccuracy2Clock = new util.Clock();
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
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  test2_image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test2_image2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.2), 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  test2_image3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test2_image3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.2, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  test2_image4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test2_image4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.6, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
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
    depth: -6.0 
  });
  
  test2_response_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Finish"
  FinishClock = new util.Clock();
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
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    GroupSelectionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
      let theseKeys = key_resp.getKeys({keyList: ['2'], waitRelease: false});
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
    GroupSelectionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    GroupSelectionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    // Run 'Begin Routine' code from code_10
    psychoJS.window.mouseVisible = true;
    
    // keep track of which components have finished
    HeadphoneCheckComponents = [];
    HeadphoneCheckComponents.push(text_13);
    HeadphoneCheckComponents.push(mouse);
    HeadphoneCheckComponents.push(checkbox);
    
    HeadphoneCheckComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    HeadphoneCheckComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function HeadphoneCheckRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'HeadphoneCheck' ---
    HeadphoneCheckComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    // the Routine "HeadphoneCheck" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
    
    IntroductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    IntroductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    IntroductionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    CountdownComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    CountdownComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    CountdownComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    InitializeExperimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    InitializeExperimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    InitializeExperimentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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

function repeated_TrainingLoopGroup2LoopBegin(repeated_TrainingLoopGroup2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeated_TrainingLoopGroup2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Persian Trained- Training Phase.xlsx',
      seed: undefined, name: 'repeated_TrainingLoopGroup2'
    });
    psychoJS.experiment.addLoop(repeated_TrainingLoopGroup2); // add the loop to the experiment
    currentLoop = repeated_TrainingLoopGroup2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    repeated_TrainingLoopGroup2.forEach(function() {
      snapshot = repeated_TrainingLoopGroup2.getSnapshot();
    
      repeated_TrainingLoopGroup2LoopScheduler.add(importConditions(snapshot));
      const TrainingLoopGroup2LoopScheduler = new Scheduler(psychoJS);
      repeated_TrainingLoopGroup2LoopScheduler.add(TrainingLoopGroup2LoopBegin(TrainingLoopGroup2LoopScheduler, snapshot));
      repeated_TrainingLoopGroup2LoopScheduler.add(TrainingLoopGroup2LoopScheduler);
      repeated_TrainingLoopGroup2LoopScheduler.add(TrainingLoopGroup2LoopEnd);
      repeated_TrainingLoopGroup2LoopScheduler.add(CheckAccuracy2RoutineBegin(snapshot));
      repeated_TrainingLoopGroup2LoopScheduler.add(CheckAccuracy2RoutineEachFrame());
      repeated_TrainingLoopGroup2LoopScheduler.add(CheckAccuracy2RoutineEnd(snapshot));
      repeated_TrainingLoopGroup2LoopScheduler.add(repeated_TrainingLoopGroup2LoopEndIteration(repeated_TrainingLoopGroup2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

function TrainingLoopGroup2LoopBegin(TrainingLoopGroup2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TrainingLoopGroup2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Persian Trained- Training Phase.xlsx',
      seed: undefined, name: 'TrainingLoopGroup2'
    });
    psychoJS.experiment.addLoop(TrainingLoopGroup2); // add the loop to the experiment
    currentLoop = TrainingLoopGroup2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    TrainingLoopGroup2.forEach(function() {
      snapshot = TrainingLoopGroup2.getSnapshot();
    
      TrainingLoopGroup2LoopScheduler.add(importConditions(snapshot));
      TrainingLoopGroup2LoopScheduler.add(TrainingGroup2RoutineBegin(snapshot));
      TrainingLoopGroup2LoopScheduler.add(TrainingGroup2RoutineEachFrame());
      TrainingLoopGroup2LoopScheduler.add(TrainingGroup2RoutineEnd(snapshot));
      TrainingLoopGroup2LoopScheduler.add(FeedbackRoutine2RoutineBegin(snapshot));
      TrainingLoopGroup2LoopScheduler.add(FeedbackRoutine2RoutineEachFrame());
      TrainingLoopGroup2LoopScheduler.add(FeedbackRoutine2RoutineEnd(snapshot));
      TrainingLoopGroup2LoopScheduler.add(BreakRoutineBegin(snapshot));
      TrainingLoopGroup2LoopScheduler.add(BreakRoutineEachFrame());
      TrainingLoopGroup2LoopScheduler.add(BreakRoutineEnd(snapshot));
      TrainingLoopGroup2LoopScheduler.add(TrainingLoopGroup2LoopEndIteration(TrainingLoopGroup2LoopScheduler, snapshot));
    });
    
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

async function repeated_TrainingLoopGroup2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repeated_TrainingLoopGroup2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function repeated_TrainingLoopGroup2LoopEndIteration(scheduler, snapshot) {
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
    testPhase2Loop.forEach(function() {
      snapshot = testPhase2Loop.getSnapshot();
    
      testPhase2LoopLoopScheduler.add(importConditions(snapshot));
      testPhase2LoopLoopScheduler.add(TestPhase2RoutineBegin(snapshot));
      testPhase2LoopLoopScheduler.add(TestPhase2RoutineEachFrame());
      testPhase2LoopLoopScheduler.add(TestPhase2RoutineEnd(snapshot));
      testPhase2LoopLoopScheduler.add(testPhase2LoopLoopEndIteration(testPhase2LoopLoopScheduler, snapshot));
    });
    
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
    if ((! _pj.in_es6("total_trials", globals()))) {
        total_trials = 0;
    }
    response_mapping = {"1": "Speaker1", "2": "Speaker2", "3": "Speaker3", "4": "Speaker4"};
    console.log(`Response Mapping: ${response_mapping}`);
    
    image_11.setImage(SpeakerImage1);
    SpeakerPicture2.setImage(SpeakerImage2);
    image_5.setImage(SpeakerImage3);
    image_6.setImage(SpeakerImage4);
    Sound2.setValue(TrainingSound);
    Sound2.setVolume(1.0);
    Instruction2.setText('گوینده کیست؟ شماره گوینده را وارد کنید');
    Response2.keys = undefined;
    Response2.rt = undefined;
    _Response2_allKeys = [];
    // Run 'Begin Routine' code from SessionManager
    if ((trialN === 80)) {
        trialN = 1;
    } else {
        trialN += 1;
    }
    
    SessionNumberTest.setText((trialN.toString() + " out of 80"));
    // keep track of which components have finished
    TrainingGroup2Components = [];
    TrainingGroup2Components.push(image_11);
    TrainingGroup2Components.push(SpeakerPicture2);
    TrainingGroup2Components.push(image_5);
    TrainingGroup2Components.push(image_6);
    TrainingGroup2Components.push(Sound2);
    TrainingGroup2Components.push(Instruction2);
    TrainingGroup2Components.push(Response2);
    TrainingGroup2Components.push(SessionNumberTest);
    
    TrainingGroup2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    
    // *SessionNumberTest* updates
    if (t >= 0.0 && SessionNumberTest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SessionNumberTest.tStart = t;  // (not accounting for frame time here)
      SessionNumberTest.frameNStart = frameN;  // exact frame index
      
      SessionNumberTest.setAutoDraw(true);
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
    TrainingGroup2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    TrainingGroup2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('TrainingGroup2.stopped', globalClock.getTime());
    // Run 'End Routine' code from var_1
    CorrectAnswer = EnglishCorrectAnswer;
    if ((Response2.keys.length > 0)) {
        participant_response_label = response_mapping.get(Response2.keys[0], "Invalid");
        if ((participant_response_label === CorrectAnswer)) {
            correctResponses += 1;
            feedbackText = "\u0635\u062d\u06cc\u062d \u0627\u0633\u062a";
        } else {
            feedbackText = `نادرست! پاسخ صحیح ${PersianCorrectAnswer} است`;
        }
        total_trials += 1;
    }
    console.log(`Feedback Text: ${feedbackText}`);
    psychoJS.experiment.addData("feedbackText", feedbackText);
    psychoJS.experiment.addData("correct_responses_group2", correctResponses);
    psychoJS.experiment.addData("total_trials_group2", total_trials);
    
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
    // Run 'End Routine' code from SessionManager
    sessionNumber += 1;
    console.log(`Updated session number: ${sessionNumber}`);
    
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
    
    FeedbackRoutine2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    FeedbackRoutine2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    FeedbackRoutine2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('FeedbackRoutine2.stopped', globalClock.getTime());
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
    // Run 'Begin Routine' code from code_16
    if ((TrainingLoopGroup2.thisN !== 39)) {
        continueRoutine = false;
    }
    
    // setup some python lists for storing info about the mouse2
    // current position of the mouse:
    mouse2.x = [];
    mouse2.y = [];
    mouse2.leftButton = [];
    mouse2.midButton = [];
    mouse2.rightButton = [];
    mouse2.time = [];
    mouse2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from code_17
    checkbox_ticked = false;
    
    // Run 'Begin Routine' code from for_mouse
    psychoJS.window.mouseVisible = true;
    
    // Run 'Begin Routine' code from code_19
    break_timer.reset();
    
    // keep track of which components have finished
    BreakComponents = [];
    BreakComponents.push(break_message);
    BreakComponents.push(mouse2);
    BreakComponents.push(checkbox2);
    BreakComponents.push(text_component);
    
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *mouse2* updates
    if (t >= 0.0 && mouse2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse2.tStart = t;  // (not accounting for frame time here)
      mouse2.frameNStart = frameN;  // exact frame index
      
      mouse2.status = PsychoJS.Status.STARTED;
      mouse2.mouseClock.reset();
      prevButtonState = mouse2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [checkbox2]) {
            if (obj.contains(mouse2)) {
              gotValidClick = true;
              mouse2.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse2.getPos();
          mouse2.x.push(_mouseXYs[0]);
          mouse2.y.push(_mouseXYs[1]);
          mouse2.leftButton.push(_mouseButtons[0]);
          mouse2.midButton.push(_mouseButtons[1]);
          mouse2.rightButton.push(_mouseButtons[2]);
          mouse2.time.push(mouse2.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *checkbox2* updates
    if (t >= 0.0 && checkbox2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      checkbox2.tStart = t;  // (not accounting for frame time here)
      checkbox2.frameNStart = frameN;  // exact frame index
      
      checkbox2.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from code_17
    if (mouse.isPressedIn(checkbox2)) {
        checkbox_ticked = (! checkbox_ticked);
        if (checkbox_ticked) {
            checkbox.fillColor = "black";
        } else {
            checkbox.fillColor = "white";
        }
    }
    
    // Run 'Each Frame' code from code_19
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
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    BreakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Break.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse2.x) {  psychoJS.experiment.addData('mouse2.x', mouse2.x[0])};
    if (mouse2.y) {  psychoJS.experiment.addData('mouse2.y', mouse2.y[0])};
    if (mouse2.leftButton) {  psychoJS.experiment.addData('mouse2.leftButton', mouse2.leftButton[0])};
    if (mouse2.midButton) {  psychoJS.experiment.addData('mouse2.midButton', mouse2.midButton[0])};
    if (mouse2.rightButton) {  psychoJS.experiment.addData('mouse2.rightButton', mouse2.rightButton[0])};
    if (mouse2.time) {  psychoJS.experiment.addData('mouse2.time', mouse2.time[0])};
    if (mouse2.clicked_name) {  psychoJS.experiment.addData('mouse2.clicked_name', mouse2.clicked_name[0])};
    
    // Run 'End Routine' code from code_17
    psychoJS.experiment.addData("Proceed_Break", checkbox_ticked);
    
    // Run 'End Routine' code from code_19
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

function CheckAccuracy2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CheckAccuracy2' ---
    t = 0;
    CheckAccuracy2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('CheckAccuracy2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_9
    TARGET_ACCURACY = 0.85;
    accuracy_group2 = ((total_trials_group2 > 0) ? (correctResponses_group2 / total_trials_group2) : 0.0);
    if ((accuracy_group2 >= TARGET_ACCURACY)) {
        proceed_to_test = true;
        repeated_TrainingLoopGroup2.finished = true;
    } else {
        proceed_to_test = false;
        correctResponses_group2 = 0;
        total_trials_group2 = 0;
    }
    console.log(`Accuracy: ${accuracy_group2}`);
    console.log(`Proceed to test: ${proceed_to_test}`);
    psychoJS.experiment.addData("accuracy_group2", accuracy_group2);
    psychoJS.experiment.addData("proceed_to_test", proceed_to_test);
    
    // keep track of which components have finished
    CheckAccuracy2Components = [];
    
    CheckAccuracy2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function CheckAccuracy2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CheckAccuracy2' ---
    // get current time
    t = CheckAccuracy2Clock.getTime();
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
    CheckAccuracy2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function CheckAccuracy2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CheckAccuracy2' ---
    CheckAccuracy2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('CheckAccuracy2.stopped', globalClock.getTime());
    // the Routine "CheckAccuracy2" was not non-slip safe, so reset the non-slip timer
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
    
    WelcomeTestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    WelcomeTestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    WelcomeTestComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('WelcomeTest.stopped', globalClock.getTime());
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
    // Run 'Begin Routine' code from code_13
    if ((! proceed_to_test)) {
        continueRoutine = false;
    }
    
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
    
    TestPhase2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    TestPhase2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    TestPhase2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    psychoJS.experiment.addData("english_correct_answer", EnglishCorrectResponse);
    psychoJS.experiment.addData("persian_correct_answer", PersianCorrectResponse);
    
    // the Routine "TestPhase2" was not non-slip safe, so reset the non-slip timer
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
    
    FinishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    FinishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    FinishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
