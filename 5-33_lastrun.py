#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.1.4),
    on Tue Jul  2 14:44:53 2024
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.1.4'
expName = '5-33'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1512, 982]
_loggingLevel = logging.getLevel('warning')
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']
    # override logging level
    _loggingLevel = logging.getLevel(
        prefs.piloting['pilotLoggingLevel']
    )

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/ohtalab2/Desktop/Experiment Folder/5-33_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # this outputs to the screen, not a file
    logging.console.setLevel(_loggingLevel)
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log', level=_loggingLevel)
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height', 
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.mouseVisible = False
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    ioSession = '1'
    if 'session' in expInfo:
        ioSession = str(expInfo['session'])
    ioServer = io.launchHubServer(window=win, **ioConfig)
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('key_resp') is None:
        # initialise key_resp
        key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp',
        )
    # create speaker 'sound_7'
    deviceManager.addDevice(
        deviceName='sound_7',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound_8'
    deviceManager.addDevice(
        deviceName='sound_8',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound_9'
    deviceManager.addDevice(
        deviceName='sound_9',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound_10'
    deviceManager.addDevice(
        deviceName='sound_10',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound_11'
    deviceManager.addDevice(
        deviceName='sound_11',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound_12'
    deviceManager.addDevice(
        deviceName='sound_12',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound_13'
    deviceManager.addDevice(
        deviceName='sound_13',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound_14'
    deviceManager.addDevice(
        deviceName='sound_14',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound1'
    deviceManager.addDevice(
        deviceName='sound1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('ResponseKey') is None:
        # initialise ResponseKey
        ResponseKey = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='ResponseKey',
        )
    # create speaker 'test1_sound'
    deviceManager.addDevice(
        deviceName='test1_sound',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('test1_response_keyboard') is None:
        # initialise test1_response_keyboard
        test1_response_keyboard = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='test1_response_keyboard',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "trial" ---
    # Run 'Begin Experiment' code from code
    group = None
    
    
    # --- Initialize components for Routine "GroupSelection" ---
    GroupInstructions = visual.TextStim(win=win, name='GroupInstructions',
        text='Press 1 for Group 1, 2 for Group 2, 3 for Group 3.\nبرای گزینش گروه خود عدد ۱ یا ۲ یا ۳ را  انتخاب کنید',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    key_resp = keyboard.Keyboard(deviceName='key_resp')
    # Run 'Begin Experiment' code from code_5
    group = None
    
    # --- Initialize components for Routine "Introduction" ---
    text_2 = visual.TextStim(win=win, name='text_2',
        text='Introduction: \nYou will hear four speakers in English and Persian to help you familiarize yourself with them.\nدر ابتدا به صدای چهار گوینده گوش دهید تا با انها اشنا شوید',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    image = visual.ImageStim(
        win=win,
        name='image', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    sound_7 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_7',    name='sound_7'
    )
    sound_7.setVolume(1.0)
    sound_8 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_8',    name='sound_8'
    )
    sound_8.setVolume(1.0)
    text_4 = visual.TextStim(win=win, name='text_4',
        text='',
        font='Arial',
        pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-4.0);
    image_7 = visual.ImageStim(
        win=win,
        name='image_7', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    sound_9 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_9',    name='sound_9'
    )
    sound_9.setVolume(1.0)
    sound_10 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_10',    name='sound_10'
    )
    sound_10.setVolume(1.0)
    text_5 = visual.TextStim(win=win, name='text_5',
        text='',
        font='Arial',
        pos=(0, -0.33), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-8.0);
    image_8 = visual.ImageStim(
        win=win,
        name='image_8', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    sound_11 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_11',    name='sound_11'
    )
    sound_11.setVolume(1.0)
    sound_12 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_12',    name='sound_12'
    )
    sound_12.setVolume(1.0)
    text_6 = visual.TextStim(win=win, name='text_6',
        text='',
        font='Arial',
        pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-12.0);
    image_9 = visual.ImageStim(
        win=win,
        name='image_9', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-13.0)
    sound_13 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_13',    name='sound_13'
    )
    sound_13.setVolume(1.0)
    sound_14 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_14',    name='sound_14'
    )
    sound_14.setVolume(1.0)
    text_7 = visual.TextStim(win=win, name='text_7',
        text='',
        font='Arial',
        pos=(0, -0.33), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-16.0);
    
    # --- Initialize components for Routine "Instructions" ---
    InstructionText = visual.TextStim(win=win, name='InstructionText',
        text='Welcome to the Speaker Identification Task Experiment\n\nThis experiment is designed in two phases: Training Phase and Test Phase. \nPress the number of the speaker on the keyboard during each trial. \n\nبه ازمایش شناسایی گوینده خوش امدید\n\nاین ازمایش دو مرحله دارد: اموزش و ازمون\nدر طول هر مرحله شماره گوینده را وارد کنید\nدر مرحله آموزش پاسخ صحیح را دریافت خواهید کرد\n اما در مرحله آزمون بازخوردی دریافت نخواهید کرد',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    
    # --- Initialize components for Routine "InitializeExperiment" ---
    # Run 'Begin Experiment' code from code_12
    # Initialize global variables
    total_trials = 0
    correct_responses = 0
    total_trials_group1 = 0
    correct_responses_group1 = 0
    correctResponses_group1 = 0
    total_trials_group1 = 0
    total_trials_group2 = 0
    correct_responses_group2 = 0
    total_trials_group3 = 0
    correct_responses_group3 = 0
    total_trials_group1 = 0
    correct_responses_group1 = 0
    
    # Initialize counters for correct responses and total trials for each group
    correct_responses_group1 = 0
    total_trials_group1 = 0
    
    correct_responses_group2 = 0
    total_trials_group2 = 0
    
    correct_responses_group3 = 0
    total_trials_group3 = 0
    
    TARGET_ACCURACY = 0.85
    
    # Response mapping dictionary
    response_mapping = {
        '1': 'Speaker1',
        '2': 'Speaker2',
        '3': 'Speaker3',
        '4': 'Speaker4'
    }
    
    # Initialize flags
    proceed_to_test = False  # Flag to determine if participant should proceed to test phase
    retry_training = False  # Flag to determine if participant should retry training phase
    
    # Initialize TrainingGroup (you can set this value based on your experimental design)
    TrainingGroup = 1  # or 2, or 3 depending on your experiment setup
    
    # --- Initialize components for Routine "TrainingGroup1" ---
    image_1 = visual.ImageStim(
        win=win,
        name='image_1', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.6, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    image_2 = visual.ImageStim(
        win=win,
        name='image_2', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.2, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    image_3 = visual.ImageStim(
        win=win,
        name='image_3', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.2, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    image_4 = visual.ImageStim(
        win=win,
        name='image_4', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.6, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    sound1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound1',    name='sound1'
    )
    sound1.setVolume(1.0)
    Instruction = visual.TextStim(win=win, name='Instruction',
        text='',
        font='Arial',
        pos=(0, -0.35), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-6.0);
    ResponseKey = keyboard.Keyboard(deviceName='ResponseKey')
    
    # --- Initialize components for Routine "FeedbackRoutine1" ---
    FeedbackText = visual.TextStim(win=win, name='FeedbackText',
        text='',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    
    # --- Initialize components for Routine "CheckAccuracy1" ---
    
    # --- Initialize components for Routine "WelcomeTest" ---
    text_12 = visual.TextStim(win=win, name='text_12',
        text='Weolcome to the Test Phase!\nPlease enter the number corresponding to the speaker you hear.\nبه مرحله ازمون خوش امدید\nلطفا پس از شنیدن جملات٬ شماره گوینده را وارد کنید',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    
    # --- Initialize components for Routine "TestPhase1" ---
    test1_image1 = visual.ImageStim(
        win=win,
        name='test1_image1', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.6, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    test1_image2 = visual.ImageStim(
        win=win,
        name='test1_image2', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.2, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    test1_image3 = visual.ImageStim(
        win=win,
        name='test1_image3', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.2, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    test1_image4 = visual.ImageStim(
        win=win,
        name='test1_image4', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.6, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    test1_sound = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='test1_sound',    name='test1_sound'
    )
    test1_sound.setVolume(1.0)
    text_3 = visual.TextStim(win=win, name='text_3',
        text='',
        font='Arial',
        pos=(0, -0.35), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-6.0);
    test1_response_keyboard = keyboard.Keyboard(deviceName='test1_response_keyboard')
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "trial" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('trial.started', globalClock.getTime(format='float'))
    # keep track of which components have finished
    trialComponents = []
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial" ---
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('trial.stopped', globalClock.getTime(format='float'))
    thisExp.nextEntry()
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "GroupSelection" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('GroupSelection.started', globalClock.getTime(format='float'))
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    GroupSelectionComponents = [GroupInstructions, key_resp]
    for thisComponent in GroupSelectionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "GroupSelection" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 5.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *GroupInstructions* updates
        
        # if GroupInstructions is starting this frame...
        if GroupInstructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            GroupInstructions.frameNStart = frameN  # exact frame index
            GroupInstructions.tStart = t  # local t and not account for scr refresh
            GroupInstructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(GroupInstructions, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'GroupInstructions.started')
            # update status
            GroupInstructions.status = STARTED
            GroupInstructions.setAutoDraw(True)
        
        # if GroupInstructions is active this frame...
        if GroupInstructions.status == STARTED:
            # update params
            pass
        
        # if GroupInstructions is stopping this frame...
        if GroupInstructions.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > GroupInstructions.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                GroupInstructions.tStop = t  # not accounting for scr refresh
                GroupInstructions.tStopRefresh = tThisFlipGlobal  # on global time
                GroupInstructions.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'GroupInstructions.stopped')
                # update status
                GroupInstructions.status = FINISHED
                GroupInstructions.setAutoDraw(False)
        
        # *key_resp* updates
        waitOnFlip = False
        
        # if key_resp is starting this frame...
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp.started')
            # update status
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp is stopping this frame...
        if key_resp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp.tStop = t  # not accounting for scr refresh
                key_resp.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.stopped')
                # update status
                key_resp.status = FINISHED
                key_resp.status = FINISHED
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['2'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                key_resp.duration = _key_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        # Run 'Each Frame' code from code_5
        keys = event.getKeys()
        if '1' in keys:
            group = 1
            continueRoutine = False
        elif '2' in keys:
            group = 2
            continueRoutine = False
        elif '3' in keys:
            group = 3
            continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in GroupSelectionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "GroupSelection" ---
    for thisComponent in GroupSelectionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('GroupSelection.stopped', globalClock.getTime(format='float'))
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    thisExp.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        thisExp.addData('key_resp.rt', key_resp.rt)
        thisExp.addData('key_resp.duration', key_resp.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-5.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "Introduction" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Introduction.started', globalClock.getTime(format='float'))
    image.setImage('Images/Speaker1.jpg')
    sound_7.setSound('Audio/Speaker1_En/P1-23-En.wav', secs=5, hamming=True)
    sound_7.setVolume(1.0, log=False)
    sound_7.seek(0)
    sound_8.setSound('Audio/Speaker1_Per/P1-23-Per.wav', secs=5, hamming=True)
    sound_8.setVolume(1.0, log=False)
    sound_8.seek(0)
    text_4.setText('Speaker 1\nگوینده ۱')
    image_7.setImage('Images/Speaker2.jpg')
    sound_9.setSound('Audio/Speaker2_En/P2-23-En.wav', secs=5, hamming=True)
    sound_9.setVolume(1.0, log=False)
    sound_9.seek(0)
    sound_10.setSound('Audio/Speaker2_Per/P2-23-Per.wav', secs=5, hamming=True)
    sound_10.setVolume(1.0, log=False)
    sound_10.seek(0)
    text_5.setText('Speaker 2\nگوینده ۲\n')
    image_8.setImage('Images/Speaker3.jpg')
    sound_11.setSound('Audio/Speaker3_En/P3-23-En.wav', secs=5, hamming=True)
    sound_11.setVolume(1.0, log=False)
    sound_11.seek(0)
    sound_12.setSound('Audio/Speaker3_Per/P3-23-Per.wav', secs=5, hamming=True)
    sound_12.setVolume(1.0, log=False)
    sound_12.seek(0)
    text_6.setText('Speaker 3\nگوینده ۳')
    image_9.setImage('Images/Speaker4.jpg')
    sound_13.setSound('Audio/Speaker4_En/P4-23-En.wav', secs=5, hamming=True)
    sound_13.setVolume(1.0, log=False)
    sound_13.seek(0)
    sound_14.setSound('Audio/Speaker4_Per/P4-23-Per.wav', secs=5, hamming=True)
    sound_14.setVolume(1.0, log=False)
    sound_14.seek(0)
    text_7.setText('Speaker 4\nگوینده ۴\n')
    # keep track of which components have finished
    IntroductionComponents = [text_2, image, sound_7, sound_8, text_4, image_7, sound_9, sound_10, text_5, image_8, sound_11, sound_12, text_6, image_9, sound_13, sound_14, text_7]
    for thisComponent in IntroductionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Introduction" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 45.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        
        # if text_2 is starting this frame...
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_2.started')
            # update status
            text_2.status = STARTED
            text_2.setAutoDraw(True)
        
        # if text_2 is active this frame...
        if text_2.status == STARTED:
            # update params
            pass
        
        # if text_2 is stopping this frame...
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.tStopRefresh = tThisFlipGlobal  # on global time
                text_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2.stopped')
                # update status
                text_2.status = FINISHED
                text_2.setAutoDraw(False)
        
        # *image* updates
        
        # if image is starting this frame...
        if image.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
            # keep track of start time/frame for later
            image.frameNStart = frameN  # exact frame index
            image.tStart = t  # local t and not account for scr refresh
            image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image.started')
            # update status
            image.status = STARTED
            image.setAutoDraw(True)
        
        # if image is active this frame...
        if image.status == STARTED:
            # update params
            pass
        
        # if image is stopping this frame...
        if image.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                image.tStop = t  # not accounting for scr refresh
                image.tStopRefresh = tThisFlipGlobal  # on global time
                image.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image.stopped')
                # update status
                image.status = FINISHED
                image.setAutoDraw(False)
        
        # if sound_7 is starting this frame...
        if sound_7.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
            # keep track of start time/frame for later
            sound_7.frameNStart = frameN  # exact frame index
            sound_7.tStart = t  # local t and not account for scr refresh
            sound_7.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_7.started', tThisFlipGlobal)
            # update status
            sound_7.status = STARTED
            sound_7.play(when=win)  # sync with win flip
        
        # if sound_7 is stopping this frame...
        if sound_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_7.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                sound_7.tStop = t  # not accounting for scr refresh
                sound_7.tStopRefresh = tThisFlipGlobal  # on global time
                sound_7.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_7.stopped')
                # update status
                sound_7.status = FINISHED
                sound_7.stop()
        # update sound_7 status according to whether it's playing
        if sound_7.isPlaying:
            sound_7.status = STARTED
        elif sound_7.isFinished:
            sound_7.status = FINISHED
        
        # if sound_8 is starting this frame...
        if sound_8.status == NOT_STARTED and tThisFlip >= 10-frameTolerance:
            # keep track of start time/frame for later
            sound_8.frameNStart = frameN  # exact frame index
            sound_8.tStart = t  # local t and not account for scr refresh
            sound_8.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_8.started', tThisFlipGlobal)
            # update status
            sound_8.status = STARTED
            sound_8.play(when=win)  # sync with win flip
        
        # if sound_8 is stopping this frame...
        if sound_8.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_8.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                sound_8.tStop = t  # not accounting for scr refresh
                sound_8.tStopRefresh = tThisFlipGlobal  # on global time
                sound_8.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_8.stopped')
                # update status
                sound_8.status = FINISHED
                sound_8.stop()
        # update sound_8 status according to whether it's playing
        if sound_8.isPlaying:
            sound_8.status = STARTED
        elif sound_8.isFinished:
            sound_8.status = FINISHED
        
        # *text_4* updates
        
        # if text_4 is starting this frame...
        if text_4.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
            # keep track of start time/frame for later
            text_4.frameNStart = frameN  # exact frame index
            text_4.tStart = t  # local t and not account for scr refresh
            text_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_4.started')
            # update status
            text_4.status = STARTED
            text_4.setAutoDraw(True)
        
        # if text_4 is active this frame...
        if text_4.status == STARTED:
            # update params
            pass
        
        # if text_4 is stopping this frame...
        if text_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_4.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                text_4.tStop = t  # not accounting for scr refresh
                text_4.tStopRefresh = tThisFlipGlobal  # on global time
                text_4.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_4.stopped')
                # update status
                text_4.status = FINISHED
                text_4.setAutoDraw(False)
        
        # *image_7* updates
        
        # if image_7 is starting this frame...
        if image_7.status == NOT_STARTED and tThisFlip >= 15-frameTolerance:
            # keep track of start time/frame for later
            image_7.frameNStart = frameN  # exact frame index
            image_7.tStart = t  # local t and not account for scr refresh
            image_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_7.started')
            # update status
            image_7.status = STARTED
            image_7.setAutoDraw(True)
        
        # if image_7 is active this frame...
        if image_7.status == STARTED:
            # update params
            pass
        
        # if image_7 is stopping this frame...
        if image_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_7.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                image_7.tStop = t  # not accounting for scr refresh
                image_7.tStopRefresh = tThisFlipGlobal  # on global time
                image_7.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_7.stopped')
                # update status
                image_7.status = FINISHED
                image_7.setAutoDraw(False)
        
        # if sound_9 is starting this frame...
        if sound_9.status == NOT_STARTED and tThisFlip >= 15-frameTolerance:
            # keep track of start time/frame for later
            sound_9.frameNStart = frameN  # exact frame index
            sound_9.tStart = t  # local t and not account for scr refresh
            sound_9.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_9.started', tThisFlipGlobal)
            # update status
            sound_9.status = STARTED
            sound_9.play(when=win)  # sync with win flip
        
        # if sound_9 is stopping this frame...
        if sound_9.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_9.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                sound_9.tStop = t  # not accounting for scr refresh
                sound_9.tStopRefresh = tThisFlipGlobal  # on global time
                sound_9.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_9.stopped')
                # update status
                sound_9.status = FINISHED
                sound_9.stop()
        # update sound_9 status according to whether it's playing
        if sound_9.isPlaying:
            sound_9.status = STARTED
        elif sound_9.isFinished:
            sound_9.status = FINISHED
        
        # if sound_10 is starting this frame...
        if sound_10.status == NOT_STARTED and tThisFlip >= 20-frameTolerance:
            # keep track of start time/frame for later
            sound_10.frameNStart = frameN  # exact frame index
            sound_10.tStart = t  # local t and not account for scr refresh
            sound_10.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_10.started', tThisFlipGlobal)
            # update status
            sound_10.status = STARTED
            sound_10.play(when=win)  # sync with win flip
        
        # if sound_10 is stopping this frame...
        if sound_10.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_10.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                sound_10.tStop = t  # not accounting for scr refresh
                sound_10.tStopRefresh = tThisFlipGlobal  # on global time
                sound_10.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_10.stopped')
                # update status
                sound_10.status = FINISHED
                sound_10.stop()
        # update sound_10 status according to whether it's playing
        if sound_10.isPlaying:
            sound_10.status = STARTED
        elif sound_10.isFinished:
            sound_10.status = FINISHED
        
        # *text_5* updates
        
        # if text_5 is starting this frame...
        if text_5.status == NOT_STARTED and tThisFlip >= 15-frameTolerance:
            # keep track of start time/frame for later
            text_5.frameNStart = frameN  # exact frame index
            text_5.tStart = t  # local t and not account for scr refresh
            text_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_5.started')
            # update status
            text_5.status = STARTED
            text_5.setAutoDraw(True)
        
        # if text_5 is active this frame...
        if text_5.status == STARTED:
            # update params
            pass
        
        # if text_5 is stopping this frame...
        if text_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_5.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                text_5.tStop = t  # not accounting for scr refresh
                text_5.tStopRefresh = tThisFlipGlobal  # on global time
                text_5.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_5.stopped')
                # update status
                text_5.status = FINISHED
                text_5.setAutoDraw(False)
        
        # *image_8* updates
        
        # if image_8 is starting this frame...
        if image_8.status == NOT_STARTED and tThisFlip >= 25-frameTolerance:
            # keep track of start time/frame for later
            image_8.frameNStart = frameN  # exact frame index
            image_8.tStart = t  # local t and not account for scr refresh
            image_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_8.started')
            # update status
            image_8.status = STARTED
            image_8.setAutoDraw(True)
        
        # if image_8 is active this frame...
        if image_8.status == STARTED:
            # update params
            pass
        
        # if image_8 is stopping this frame...
        if image_8.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_8.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                image_8.tStop = t  # not accounting for scr refresh
                image_8.tStopRefresh = tThisFlipGlobal  # on global time
                image_8.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_8.stopped')
                # update status
                image_8.status = FINISHED
                image_8.setAutoDraw(False)
        
        # if sound_11 is starting this frame...
        if sound_11.status == NOT_STARTED and tThisFlip >= 25-frameTolerance:
            # keep track of start time/frame for later
            sound_11.frameNStart = frameN  # exact frame index
            sound_11.tStart = t  # local t and not account for scr refresh
            sound_11.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_11.started', tThisFlipGlobal)
            # update status
            sound_11.status = STARTED
            sound_11.play(when=win)  # sync with win flip
        
        # if sound_11 is stopping this frame...
        if sound_11.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_11.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                sound_11.tStop = t  # not accounting for scr refresh
                sound_11.tStopRefresh = tThisFlipGlobal  # on global time
                sound_11.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_11.stopped')
                # update status
                sound_11.status = FINISHED
                sound_11.stop()
        # update sound_11 status according to whether it's playing
        if sound_11.isPlaying:
            sound_11.status = STARTED
        elif sound_11.isFinished:
            sound_11.status = FINISHED
        
        # if sound_12 is starting this frame...
        if sound_12.status == NOT_STARTED and tThisFlip >= 30-frameTolerance:
            # keep track of start time/frame for later
            sound_12.frameNStart = frameN  # exact frame index
            sound_12.tStart = t  # local t and not account for scr refresh
            sound_12.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_12.started', tThisFlipGlobal)
            # update status
            sound_12.status = STARTED
            sound_12.play(when=win)  # sync with win flip
        
        # if sound_12 is stopping this frame...
        if sound_12.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_12.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                sound_12.tStop = t  # not accounting for scr refresh
                sound_12.tStopRefresh = tThisFlipGlobal  # on global time
                sound_12.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_12.stopped')
                # update status
                sound_12.status = FINISHED
                sound_12.stop()
        # update sound_12 status according to whether it's playing
        if sound_12.isPlaying:
            sound_12.status = STARTED
        elif sound_12.isFinished:
            sound_12.status = FINISHED
        
        # *text_6* updates
        
        # if text_6 is starting this frame...
        if text_6.status == NOT_STARTED and tThisFlip >= 25-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_6.started')
            # update status
            text_6.status = STARTED
            text_6.setAutoDraw(True)
        
        # if text_6 is active this frame...
        if text_6.status == STARTED:
            # update params
            pass
        
        # if text_6 is stopping this frame...
        if text_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_6.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                text_6.tStop = t  # not accounting for scr refresh
                text_6.tStopRefresh = tThisFlipGlobal  # on global time
                text_6.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_6.stopped')
                # update status
                text_6.status = FINISHED
                text_6.setAutoDraw(False)
        
        # *image_9* updates
        
        # if image_9 is starting this frame...
        if image_9.status == NOT_STARTED and tThisFlip >= 35-frameTolerance:
            # keep track of start time/frame for later
            image_9.frameNStart = frameN  # exact frame index
            image_9.tStart = t  # local t and not account for scr refresh
            image_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_9.started')
            # update status
            image_9.status = STARTED
            image_9.setAutoDraw(True)
        
        # if image_9 is active this frame...
        if image_9.status == STARTED:
            # update params
            pass
        
        # if image_9 is stopping this frame...
        if image_9.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_9.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                image_9.tStop = t  # not accounting for scr refresh
                image_9.tStopRefresh = tThisFlipGlobal  # on global time
                image_9.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_9.stopped')
                # update status
                image_9.status = FINISHED
                image_9.setAutoDraw(False)
        
        # if sound_13 is starting this frame...
        if sound_13.status == NOT_STARTED and tThisFlip >= 35-frameTolerance:
            # keep track of start time/frame for later
            sound_13.frameNStart = frameN  # exact frame index
            sound_13.tStart = t  # local t and not account for scr refresh
            sound_13.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_13.started', tThisFlipGlobal)
            # update status
            sound_13.status = STARTED
            sound_13.play(when=win)  # sync with win flip
        
        # if sound_13 is stopping this frame...
        if sound_13.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_13.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                sound_13.tStop = t  # not accounting for scr refresh
                sound_13.tStopRefresh = tThisFlipGlobal  # on global time
                sound_13.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_13.stopped')
                # update status
                sound_13.status = FINISHED
                sound_13.stop()
        # update sound_13 status according to whether it's playing
        if sound_13.isPlaying:
            sound_13.status = STARTED
        elif sound_13.isFinished:
            sound_13.status = FINISHED
        
        # if sound_14 is starting this frame...
        if sound_14.status == NOT_STARTED and tThisFlip >= 40-frameTolerance:
            # keep track of start time/frame for later
            sound_14.frameNStart = frameN  # exact frame index
            sound_14.tStart = t  # local t and not account for scr refresh
            sound_14.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_14.started', tThisFlipGlobal)
            # update status
            sound_14.status = STARTED
            sound_14.play(when=win)  # sync with win flip
        
        # if sound_14 is stopping this frame...
        if sound_14.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_14.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                sound_14.tStop = t  # not accounting for scr refresh
                sound_14.tStopRefresh = tThisFlipGlobal  # on global time
                sound_14.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_14.stopped')
                # update status
                sound_14.status = FINISHED
                sound_14.stop()
        # update sound_14 status according to whether it's playing
        if sound_14.isPlaying:
            sound_14.status = STARTED
        elif sound_14.isFinished:
            sound_14.status = FINISHED
        
        # *text_7* updates
        
        # if text_7 is starting this frame...
        if text_7.status == NOT_STARTED and tThisFlip >= 35-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_7.started')
            # update status
            text_7.status = STARTED
            text_7.setAutoDraw(True)
        
        # if text_7 is active this frame...
        if text_7.status == STARTED:
            # update params
            pass
        
        # if text_7 is stopping this frame...
        if text_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_7.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                text_7.tStop = t  # not accounting for scr refresh
                text_7.tStopRefresh = tThisFlipGlobal  # on global time
                text_7.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_7.stopped')
                # update status
                text_7.status = FINISHED
                text_7.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in IntroductionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Introduction" ---
    for thisComponent in IntroductionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Introduction.stopped', globalClock.getTime(format='float'))
    sound_7.pause()  # ensure sound has stopped at end of Routine
    sound_8.pause()  # ensure sound has stopped at end of Routine
    sound_9.pause()  # ensure sound has stopped at end of Routine
    sound_10.pause()  # ensure sound has stopped at end of Routine
    sound_11.pause()  # ensure sound has stopped at end of Routine
    sound_12.pause()  # ensure sound has stopped at end of Routine
    sound_13.pause()  # ensure sound has stopped at end of Routine
    sound_14.pause()  # ensure sound has stopped at end of Routine
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-45.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "Instructions" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Instructions.started', globalClock.getTime(format='float'))
    # keep track of which components have finished
    InstructionsComponents = [InstructionText]
    for thisComponent in InstructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Instructions" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 1.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *InstructionText* updates
        
        # if InstructionText is starting this frame...
        if InstructionText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            InstructionText.frameNStart = frameN  # exact frame index
            InstructionText.tStart = t  # local t and not account for scr refresh
            InstructionText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(InstructionText, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'InstructionText.started')
            # update status
            InstructionText.status = STARTED
            InstructionText.setAutoDraw(True)
        
        # if InstructionText is active this frame...
        if InstructionText.status == STARTED:
            # update params
            pass
        
        # if InstructionText is stopping this frame...
        if InstructionText.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > InstructionText.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                InstructionText.tStop = t  # not accounting for scr refresh
                InstructionText.tStopRefresh = tThisFlipGlobal  # on global time
                InstructionText.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'InstructionText.stopped')
                # update status
                InstructionText.status = FINISHED
                InstructionText.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in InstructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Instructions" ---
    for thisComponent in InstructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Instructions.stopped', globalClock.getTime(format='float'))
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-1.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "InitializeExperiment" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('InitializeExperiment.started', globalClock.getTime(format='float'))
    # keep track of which components have finished
    InitializeExperimentComponents = []
    for thisComponent in InitializeExperimentComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "InitializeExperiment" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in InitializeExperimentComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "InitializeExperiment" ---
    for thisComponent in InitializeExperimentComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('InitializeExperiment.stopped', globalClock.getTime(format='float'))
    thisExp.nextEntry()
    # the Routine "InitializeExperiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    repeated_TrainingLoopGroup1 = data.TrialHandler(nReps=999.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('Monolingual Persian- Training Phase.xlsx'),
        seed=None, name='repeated_TrainingLoopGroup1')
    thisExp.addLoop(repeated_TrainingLoopGroup1)  # add the loop to the experiment
    thisRepeated_TrainingLoopGroup1 = repeated_TrainingLoopGroup1.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRepeated_TrainingLoopGroup1.rgb)
    if thisRepeated_TrainingLoopGroup1 != None:
        for paramName in thisRepeated_TrainingLoopGroup1:
            globals()[paramName] = thisRepeated_TrainingLoopGroup1[paramName]
    
    for thisRepeated_TrainingLoopGroup1 in repeated_TrainingLoopGroup1:
        currentLoop = repeated_TrainingLoopGroup1
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisRepeated_TrainingLoopGroup1.rgb)
        if thisRepeated_TrainingLoopGroup1 != None:
            for paramName in thisRepeated_TrainingLoopGroup1:
                globals()[paramName] = thisRepeated_TrainingLoopGroup1[paramName]
        
        # set up handler to look after randomisation of conditions etc
        TrainingLoopGroup1 = data.TrialHandler(nReps=1.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('Monolingual Persian- Training Phase.xlsx'),
            seed=None, name='TrainingLoopGroup1')
        thisExp.addLoop(TrainingLoopGroup1)  # add the loop to the experiment
        thisTrainingLoopGroup1 = TrainingLoopGroup1.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrainingLoopGroup1.rgb)
        if thisTrainingLoopGroup1 != None:
            for paramName in thisTrainingLoopGroup1:
                globals()[paramName] = thisTrainingLoopGroup1[paramName]
        
        for thisTrainingLoopGroup1 in TrainingLoopGroup1:
            currentLoop = TrainingLoopGroup1
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisTrainingLoopGroup1.rgb)
            if thisTrainingLoopGroup1 != None:
                for paramName in thisTrainingLoopGroup1:
                    globals()[paramName] = thisTrainingLoopGroup1[paramName]
            
            # --- Prepare to start Routine "TrainingGroup1" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('TrainingGroup1.started', globalClock.getTime(format='float'))
            # Run 'Begin Routine' code from code_7
            # Initialize variables if not already done
            if 'correctResponses' not in globals():
                correctResponses = 0
            if 'total_trials' not in globals():
                total_trials = 0
            
            # Mapping numeric responses to speaker labels
            response_mapping = {
                '1': 'Speaker1',
                '2': 'Speaker2',
                '3': 'Speaker3',
                '4': 'Speaker4'
            }
            
            # Print mapping for debugging
            print(f"Response Mapping: {response_mapping}")
            
            image_1.setImage(SpeakerImage1)
            image_2.setImage(SpeakerImage2)
            image_3.setImage(SpeakerImage3)
            image_4.setImage(SpeakerImage4)
            sound1.setSound(TrainingSound, hamming=True)
            sound1.setVolume(1.0, log=False)
            sound1.seek(0)
            Instruction.setText('Who is speaking? press the number corresponding to the speaker.\nگوینده کیست؟ شماره گوینده را وارد کنید\n')
            ResponseKey.keys = []
            ResponseKey.rt = []
            _ResponseKey_allKeys = []
            # keep track of which components have finished
            TrainingGroup1Components = [image_1, image_2, image_3, image_4, sound1, Instruction, ResponseKey]
            for thisComponent in TrainingGroup1Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "TrainingGroup1" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_1* updates
                
                # if image_1 is starting this frame...
                if image_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_1.frameNStart = frameN  # exact frame index
                    image_1.tStart = t  # local t and not account for scr refresh
                    image_1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_1, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_1.started')
                    # update status
                    image_1.status = STARTED
                    image_1.setAutoDraw(True)
                
                # if image_1 is active this frame...
                if image_1.status == STARTED:
                    # update params
                    pass
                
                # *image_2* updates
                
                # if image_2 is starting this frame...
                if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_2.frameNStart = frameN  # exact frame index
                    image_2.tStart = t  # local t and not account for scr refresh
                    image_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_2.started')
                    # update status
                    image_2.status = STARTED
                    image_2.setAutoDraw(True)
                
                # if image_2 is active this frame...
                if image_2.status == STARTED:
                    # update params
                    pass
                
                # *image_3* updates
                
                # if image_3 is starting this frame...
                if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_3.frameNStart = frameN  # exact frame index
                    image_3.tStart = t  # local t and not account for scr refresh
                    image_3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_3.started')
                    # update status
                    image_3.status = STARTED
                    image_3.setAutoDraw(True)
                
                # if image_3 is active this frame...
                if image_3.status == STARTED:
                    # update params
                    pass
                
                # *image_4* updates
                
                # if image_4 is starting this frame...
                if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_4.frameNStart = frameN  # exact frame index
                    image_4.tStart = t  # local t and not account for scr refresh
                    image_4.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_4.started')
                    # update status
                    image_4.status = STARTED
                    image_4.setAutoDraw(True)
                
                # if image_4 is active this frame...
                if image_4.status == STARTED:
                    # update params
                    pass
                
                # if sound1 is starting this frame...
                if sound1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    sound1.frameNStart = frameN  # exact frame index
                    sound1.tStart = t  # local t and not account for scr refresh
                    sound1.tStartRefresh = tThisFlipGlobal  # on global time
                    # add timestamp to datafile
                    thisExp.addData('sound1.started', tThisFlipGlobal)
                    # update status
                    sound1.status = STARTED
                    sound1.play(when=win)  # sync with win flip
                # update sound1 status according to whether it's playing
                if sound1.isPlaying:
                    sound1.status = STARTED
                elif sound1.isFinished:
                    sound1.status = FINISHED
                
                # *Instruction* updates
                
                # if Instruction is starting this frame...
                if Instruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    Instruction.frameNStart = frameN  # exact frame index
                    Instruction.tStart = t  # local t and not account for scr refresh
                    Instruction.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(Instruction, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'Instruction.started')
                    # update status
                    Instruction.status = STARTED
                    Instruction.setAutoDraw(True)
                
                # if Instruction is active this frame...
                if Instruction.status == STARTED:
                    # update params
                    pass
                
                # *ResponseKey* updates
                waitOnFlip = False
                
                # if ResponseKey is starting this frame...
                if ResponseKey.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    ResponseKey.frameNStart = frameN  # exact frame index
                    ResponseKey.tStart = t  # local t and not account for scr refresh
                    ResponseKey.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(ResponseKey, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'ResponseKey.started')
                    # update status
                    ResponseKey.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(ResponseKey.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(ResponseKey.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if ResponseKey.status == STARTED and not waitOnFlip:
                    theseKeys = ResponseKey.getKeys(keyList=['1','2','3','4'], ignoreKeys=["escape"], waitRelease=False)
                    _ResponseKey_allKeys.extend(theseKeys)
                    if len(_ResponseKey_allKeys):
                        ResponseKey.keys = _ResponseKey_allKeys[-1].name  # just the last key pressed
                        ResponseKey.rt = _ResponseKey_allKeys[-1].rt
                        ResponseKey.duration = _ResponseKey_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in TrainingGroup1Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "TrainingGroup1" ---
            for thisComponent in TrainingGroup1Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('TrainingGroup1.stopped', globalClock.getTime(format='float'))
            # Run 'End Routine' code from code_7
            # Ensure CorrectAnswer is correctly defined
            CorrectAnswer = EnglishCorrectAnswer  # Using EnglishCorrectAnswer for comparison
            
            # Map participant response to speaker label
            if len(ResponseKey.keys) > 0:  # Check if a key was pressed
                participant_response_label = response_mapping.get(ResponseKey.keys[0], "Invalid")
                
                # Check the participant's response
                if participant_response_label == CorrectAnswer:
                    correctResponses_group1 += 1
                    feedbackText = "Correct! صحیح است"
                else:
                    feedbackText = f"Incorrect! The correct answer is {EnglishCorrectAnswer}. نادرست! پاسخ صحیح {PersianCorrectAnswer} است"
            
                total_trials_group1 += 1
            
            # Print the feedback text for debugging (optional)
            print(f"Feedback Text: {feedbackText}")
            
            # Pass feedbackText to the next routine (FeedbackRoutine1)
            thisExp.addData('feedbackText', feedbackText)
            
            # Log data for debugging (optional)
            thisExp.addData('correct_responses_group1', correctResponses_group1)
            thisExp.addData('total_trials_group1', total_trials_group1)
            
            sound1.pause()  # ensure sound has stopped at end of Routine
            # check responses
            if ResponseKey.keys in ['', [], None]:  # No response was made
                ResponseKey.keys = None
            TrainingLoopGroup1.addData('ResponseKey.keys',ResponseKey.keys)
            if ResponseKey.keys != None:  # we had a response
                TrainingLoopGroup1.addData('ResponseKey.rt', ResponseKey.rt)
                TrainingLoopGroup1.addData('ResponseKey.duration', ResponseKey.duration)
            # the Routine "TrainingGroup1" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "FeedbackRoutine1" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('FeedbackRoutine1.started', globalClock.getTime(format='float'))
            FeedbackText.setText(feedbackText)
            # keep track of which components have finished
            FeedbackRoutine1Components = [FeedbackText]
            for thisComponent in FeedbackRoutine1Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "FeedbackRoutine1" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 2.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *FeedbackText* updates
                
                # if FeedbackText is starting this frame...
                if FeedbackText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    FeedbackText.frameNStart = frameN  # exact frame index
                    FeedbackText.tStart = t  # local t and not account for scr refresh
                    FeedbackText.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(FeedbackText, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'FeedbackText.started')
                    # update status
                    FeedbackText.status = STARTED
                    FeedbackText.setAutoDraw(True)
                
                # if FeedbackText is active this frame...
                if FeedbackText.status == STARTED:
                    # update params
                    pass
                
                # if FeedbackText is stopping this frame...
                if FeedbackText.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > FeedbackText.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        FeedbackText.tStop = t  # not accounting for scr refresh
                        FeedbackText.tStopRefresh = tThisFlipGlobal  # on global time
                        FeedbackText.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'FeedbackText.stopped')
                        # update status
                        FeedbackText.status = FINISHED
                        FeedbackText.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in FeedbackRoutine1Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "FeedbackRoutine1" ---
            for thisComponent in FeedbackRoutine1Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('FeedbackRoutine1.stopped', globalClock.getTime(format='float'))
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-2.000000)
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1.0 repeats of 'TrainingLoopGroup1'
        
        
        # --- Prepare to start Routine "CheckAccuracy1" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('CheckAccuracy1.started', globalClock.getTime(format='float'))
        # Run 'Begin Routine' code from code_10
        TARGET_ACCURACY = 0.85  # 85% accuracy threshold
        
        # Calculate accuracy
        accuracy_group1 = correctResponses_group1 / total_trials_group1 if total_trials_group1 > 0 else 0.0
        
        # Check if participant meets the accuracy criterion
        if accuracy_group1 >= TARGET_ACCURACY:
            proceed_to_test = True
            repeated_TrainingLoopGroup1.finished = True
        else:
            proceed_to_test = False
            correctResponses_group1 = 0  # Reset score
            total_trials_group1 = 0  # Reset total trials
        
        # Print accuracy for debugging
        print(f"Accuracy: {accuracy_group1}")
        print(f"Proceed to test: {proceed_to_test}")
        
        # Log data for debugging (optional)
        thisExp.addData('accuracy_group1', accuracy_group1)
        thisExp.addData('proceed_to_test', proceed_to_test)
        
        # keep track of which components have finished
        CheckAccuracy1Components = []
        for thisComponent in CheckAccuracy1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "CheckAccuracy1" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in CheckAccuracy1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "CheckAccuracy1" ---
        for thisComponent in CheckAccuracy1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('CheckAccuracy1.stopped', globalClock.getTime(format='float'))
        # the Routine "CheckAccuracy1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 999.0 repeats of 'repeated_TrainingLoopGroup1'
    
    
    # --- Prepare to start Routine "WelcomeTest" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('WelcomeTest.started', globalClock.getTime(format='float'))
    # keep track of which components have finished
    WelcomeTestComponents = [text_12]
    for thisComponent in WelcomeTestComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "WelcomeTest" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 5.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_12* updates
        
        # if text_12 is starting this frame...
        if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_12.frameNStart = frameN  # exact frame index
            text_12.tStart = t  # local t and not account for scr refresh
            text_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_12.started')
            # update status
            text_12.status = STARTED
            text_12.setAutoDraw(True)
        
        # if text_12 is active this frame...
        if text_12.status == STARTED:
            # update params
            pass
        
        # if text_12 is stopping this frame...
        if text_12.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_12.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                text_12.tStop = t  # not accounting for scr refresh
                text_12.tStopRefresh = tThisFlipGlobal  # on global time
                text_12.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_12.stopped')
                # update status
                text_12.status = FINISHED
                text_12.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in WelcomeTestComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "WelcomeTest" ---
    for thisComponent in WelcomeTestComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('WelcomeTest.stopped', globalClock.getTime(format='float'))
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-5.000000)
    thisExp.nextEntry()
    
    # set up handler to look after randomisation of conditions etc
    testPhase1Loop = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('Monolingual Persian- Test Phase.xlsx'),
        seed=None, name='testPhase1Loop')
    thisExp.addLoop(testPhase1Loop)  # add the loop to the experiment
    thisTestPhase1Loop = testPhase1Loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTestPhase1Loop.rgb)
    if thisTestPhase1Loop != None:
        for paramName in thisTestPhase1Loop:
            globals()[paramName] = thisTestPhase1Loop[paramName]
    
    for thisTestPhase1Loop in testPhase1Loop:
        currentLoop = testPhase1Loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTestPhase1Loop.rgb)
        if thisTestPhase1Loop != None:
            for paramName in thisTestPhase1Loop:
                globals()[paramName] = thisTestPhase1Loop[paramName]
        
        # --- Prepare to start Routine "TestPhase1" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('TestPhase1.started', globalClock.getTime(format='float'))
        # Run 'Begin Routine' code from code_8
        if not proceed_to_test:
            continueRoutine = False  # Skip the test phase if criteria are not met
        test1_image1.setImage('Images/Speaker1.jpg')
        test1_image2.setImage('Images/Speaker2.jpg')
        test1_image3.setImage('Images/Speaker3.jpg')
        test1_image4.setImage('Images/Speaker4.jpg')
        test1_sound.setSound(TestingSound, hamming=True)
        test1_sound.setVolume(1.0, log=False)
        test1_sound.seek(0)
        text_3.setText('Who is speaking? press the number corresponding to the speaker.\nگوینده کیست؟ شماره گوینده را وارد کنید')
        test1_response_keyboard.keys = []
        test1_response_keyboard.rt = []
        _test1_response_keyboard_allKeys = []
        # Run 'Begin Routine' code from log_response_test1
        # Print for debugging purposes
        print(f"Starting TestPhase1")
        # Initialize variables if needed
        test1_response_keyboard.keys = []
        
        # keep track of which components have finished
        TestPhase1Components = [test1_image1, test1_image2, test1_image3, test1_image4, test1_sound, text_3, test1_response_keyboard]
        for thisComponent in TestPhase1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "TestPhase1" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *test1_image1* updates
            
            # if test1_image1 is starting this frame...
            if test1_image1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test1_image1.frameNStart = frameN  # exact frame index
                test1_image1.tStart = t  # local t and not account for scr refresh
                test1_image1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test1_image1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'test1_image1.started')
                # update status
                test1_image1.status = STARTED
                test1_image1.setAutoDraw(True)
            
            # if test1_image1 is active this frame...
            if test1_image1.status == STARTED:
                # update params
                pass
            
            # *test1_image2* updates
            
            # if test1_image2 is starting this frame...
            if test1_image2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test1_image2.frameNStart = frameN  # exact frame index
                test1_image2.tStart = t  # local t and not account for scr refresh
                test1_image2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test1_image2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'test1_image2.started')
                # update status
                test1_image2.status = STARTED
                test1_image2.setAutoDraw(True)
            
            # if test1_image2 is active this frame...
            if test1_image2.status == STARTED:
                # update params
                pass
            
            # *test1_image3* updates
            
            # if test1_image3 is starting this frame...
            if test1_image3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test1_image3.frameNStart = frameN  # exact frame index
                test1_image3.tStart = t  # local t and not account for scr refresh
                test1_image3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test1_image3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'test1_image3.started')
                # update status
                test1_image3.status = STARTED
                test1_image3.setAutoDraw(True)
            
            # if test1_image3 is active this frame...
            if test1_image3.status == STARTED:
                # update params
                pass
            
            # *test1_image4* updates
            
            # if test1_image4 is starting this frame...
            if test1_image4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test1_image4.frameNStart = frameN  # exact frame index
                test1_image4.tStart = t  # local t and not account for scr refresh
                test1_image4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test1_image4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'test1_image4.started')
                # update status
                test1_image4.status = STARTED
                test1_image4.setAutoDraw(True)
            
            # if test1_image4 is active this frame...
            if test1_image4.status == STARTED:
                # update params
                pass
            
            # if test1_sound is starting this frame...
            if test1_sound.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test1_sound.frameNStart = frameN  # exact frame index
                test1_sound.tStart = t  # local t and not account for scr refresh
                test1_sound.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('test1_sound.started', tThisFlipGlobal)
                # update status
                test1_sound.status = STARTED
                test1_sound.play(when=win)  # sync with win flip
            # update test1_sound status according to whether it's playing
            if test1_sound.isPlaying:
                test1_sound.status = STARTED
            elif test1_sound.isFinished:
                test1_sound.status = FINISHED
            
            # *text_3* updates
            
            # if text_3 is starting this frame...
            if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_3.frameNStart = frameN  # exact frame index
                text_3.tStart = t  # local t and not account for scr refresh
                text_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_3.started')
                # update status
                text_3.status = STARTED
                text_3.setAutoDraw(True)
            
            # if text_3 is active this frame...
            if text_3.status == STARTED:
                # update params
                pass
            
            # *test1_response_keyboard* updates
            waitOnFlip = False
            
            # if test1_response_keyboard is starting this frame...
            if test1_response_keyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test1_response_keyboard.frameNStart = frameN  # exact frame index
                test1_response_keyboard.tStart = t  # local t and not account for scr refresh
                test1_response_keyboard.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test1_response_keyboard, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'test1_response_keyboard.started')
                # update status
                test1_response_keyboard.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(test1_response_keyboard.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(test1_response_keyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if test1_response_keyboard.status == STARTED and not waitOnFlip:
                theseKeys = test1_response_keyboard.getKeys(keyList=['1','2','3','4'], ignoreKeys=["escape"], waitRelease=False)
                _test1_response_keyboard_allKeys.extend(theseKeys)
                if len(_test1_response_keyboard_allKeys):
                    test1_response_keyboard.keys = _test1_response_keyboard_allKeys[-1].name  # just the last key pressed
                    test1_response_keyboard.rt = _test1_response_keyboard_allKeys[-1].rt
                    test1_response_keyboard.duration = _test1_response_keyboard_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in TestPhase1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "TestPhase1" ---
        for thisComponent in TestPhase1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('TestPhase1.stopped', globalClock.getTime(format='float'))
        test1_sound.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if test1_response_keyboard.keys in ['', [], None]:  # No response was made
            test1_response_keyboard.keys = None
        testPhase1Loop.addData('test1_response_keyboard.keys',test1_response_keyboard.keys)
        if test1_response_keyboard.keys != None:  # we had a response
            testPhase1Loop.addData('test1_response_keyboard.rt', test1_response_keyboard.rt)
            testPhase1Loop.addData('test1_response_keyboard.duration', test1_response_keyboard.duration)
        # Run 'End Routine' code from log_response_test1
        # End Routine tab in the Code Component of TestPhase1 (log_response_test1)
        
        # Check if the response object exists and has keys
        if 'test1_response_keyboard' in locals() and test1_response_keyboard.keys is not None:
            thisExp.addData('test1_response', test1_response_keyboard.keys)
        else:
            thisExp.addData('test1_response', 'No response')
        
        # Log other data
        thisExp.addData('test1_image_file1', SpeakerPhoto1)
        thisExp.addData('test1_image_file2', SpeakerPhoto2)
        thisExp.addData('test1_image_file3', SpeakerPhoto3)
        thisExp.addData('test1_image_file4', SpeakerPhoto4)
        thisExp.addData('test1_sound_file', TestingSound)
        thisExp.addData('english_correct_answer', EnglishCorrectAnswer)
        thisExp.addData('persian_correct_answer', PersianCorrectAnswer)
        
        # the Routine "TestPhase1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1.0 repeats of 'testPhase1Loop'
    
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if deviceManager.getDevice('eyetracker') is not None:
        deviceManager.removeDevice('eyetracker')
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    # shut down eyetracker, if there is one
    if deviceManager.getDevice('eyetracker') is not None:
        deviceManager.removeDevice('eyetracker')
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
