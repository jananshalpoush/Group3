﻿#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.1.5),
    on Sun Aug  4 11:50:54 2024
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
psychopyVersion = '2024.1.5'
expName = '5-36 ready-Persian trained'  # from the Builder filename that created this script
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
        originPath='/Users/ohtalab2/Desktop/Experiment Folder/Persian Trained speakers (Group2)_lastrun.py',
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
    # create speaker 'sound_8'
    deviceManager.addDevice(
        deviceName='sound_8',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound_10'
    deviceManager.addDevice(
        deviceName='sound_10',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound_12'
    deviceManager.addDevice(
        deviceName='sound_12',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'sound_14'
    deviceManager.addDevice(
        deviceName='sound_14',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    # create speaker 'Sound2'
    deviceManager.addDevice(
        deviceName='Sound2',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('Response2') is None:
        # initialise Response2
        Response2 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='Response2',
        )
    # create speaker 'test2_sound'
    deviceManager.addDevice(
        deviceName='test2_sound',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('test2_response_keyboard') is None:
        # initialise test2_response_keyboard
        test2_response_keyboard = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='test2_response_keyboard',
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
        text='به آزمایش شناسایی گوینده خوش آمدید\n \nلطفا در محیطی آرام آزمایش را انجام دهید\n\nبرای گزینش گروه خود عدد ۱ یا ۲ یا ۳ را  انتخاب کنید',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    key_resp = keyboard.Keyboard(deviceName='key_resp')
    # Run 'Begin Experiment' code from code_5
    group = None
    
    # --- Initialize components for Routine "HeadphoneCheck" ---
    text_13 = visual.TextStim(win=win, name='text_13',
        text='اگر از هدفون استفاده میکنید روی باکس سفید کلیک کنید\n در غیر این صورت روی باکس کلیک نکنید',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    mouse = event.Mouse(win=win)
    x, y = [None, None]
    mouse.mouseClock = core.Clock()
    checkbox = visual.Rect(
        win=win, name='checkbox',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0, -0.2), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    
    # --- Initialize components for Routine "Introduction" ---
    text_2 = visual.TextStim(win=win, name='text_2',
        text='در ابتدا به صدای چهار گوینده گوش دهید تا با آنها آشنا شوید',
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
        depth=-3.0);
    image_7 = visual.ImageStim(
        win=win,
        name='image_7', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
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
        depth=-6.0);
    image_8 = visual.ImageStim(
        win=win,
        name='image_8', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
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
        depth=-9.0);
    image_9 = visual.ImageStim(
        win=win,
        name='image_9', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
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
        depth=-12.0);
    
    # --- Initialize components for Routine "Instructions" ---
    InstructionText = visual.TextStim(win=win, name='InstructionText',
        text='این آزمایش دو مرحله دارد: آموزش و آزمون\n\nدر طول هر مرحله شماره گوینده را وارد کنید\n\nدر مرحله آموزش پاسخ صحیح را دریافت خواهید کرد\n اما در مرحله آزمون بازخوردی دریافت نخواهید کرد',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    
    # --- Initialize components for Routine "Countdown" ---
    number1 = visual.TextStim(win=win, name='number1',
        text='۱',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    number2 = visual.TextStim(win=win, name='number2',
        text='۲',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    number3 = visual.TextStim(win=win, name='number3',
        text='۳',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    start = visual.TextStim(win=win, name='start',
        text='شروع!',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-3.0);
    silence = visual.TextStim(win=win, name='silence',
        text=None,
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "InitializeExperiment" ---
    # Run 'Begin Experiment' code from code_12
    # Initialize global variables
    total_trials = 0
    correct_responses = 0
    total_trials_group1 = 0
    correct_responses_group1 = 0
    total_trials_group2 = 0
    correct_responses_group2 = 0
    total_trials_group3 = 0
    correct_responses_group3 = 0
    
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
    TrainingGroup = 2  # or 2, or 3 depending on your experiment setup
    sessionNumber = 1  # Initialize session number
    
    import time
    
    trial_count = 0
    break_after_trials = 40
    break_duration = 360  # 5 minutes in seconds
    break_flag = False
    break_start_time = None
    break_message = "take a break"
    
    # --- Initialize components for Routine "TrainingGroup2" ---
    image_11 = visual.ImageStim(
        win=win,
        name='image_11', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.6, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    SpeakerPicture2 = visual.ImageStim(
        win=win,
        name='SpeakerPicture2', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.2, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    image_5 = visual.ImageStim(
        win=win,
        name='image_5', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.2, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    image_6 = visual.ImageStim(
        win=win,
        name='image_6', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.6, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    Sound2 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='Sound2',    name='Sound2'
    )
    Sound2.setVolume(1.0)
    Instruction2 = visual.TextStim(win=win, name='Instruction2',
        text='',
        font='Arial',
        pos=(0, -0.35), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-6.0);
    Response2 = keyboard.Keyboard(deviceName='Response2')
    # Run 'Begin Experiment' code from SessionManager
    trialN = 0
    SessionNumberTest = visual.TextStim(win=win, name='SessionNumberTest',
        text='',
        font='Arial',
        pos=(0, 0.30), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-9.0);
    
    # --- Initialize components for Routine "FeedbackRoutine2" ---
    FeedbackText2 = visual.TextStim(win=win, name='FeedbackText2',
        text='',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    
    # --- Initialize components for Routine "Break" ---
    break_message = visual.TextStim(win=win, name='break_message',
        text='لطفا کمی استراحت کنید\nدر غیر اینصورت برای ادامه روی مربع کلیک کنید',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-1.0);
    mouse2 = event.Mouse(win=win)
    x, y = [None, None]
    mouse2.mouseClock = core.Clock()
    checkbox2 = visual.Rect(
        win=win, name='checkbox2',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0, -0.2), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
        opacity=None, depth=-3.0, interpolate=True)
    # Run 'Begin Experiment' code from code_19
    # Create a clock for the timer
    break_timer = core.Clock()
    
    text_component = visual.TextStim(win=win, name='text_component',
        text='Any text\n\nincluding line breaks',
        font='Arial',
        pos=(0, 0.30), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-7.0);
    
    # --- Initialize components for Routine "CheckAccuracy2" ---
    
    # --- Initialize components for Routine "WelcomeTest" ---
    text_12 = visual.TextStim(win=win, name='text_12',
        text='Weolcome to the Test Phase!\nPlease enter the number corresponding to the speaker you hear.\nبه مرحله آزمون خوش آمدید\nلطفا پس از شنیدن جملات٬ شماره گوینده را وارد کنید',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    
    # --- Initialize components for Routine "TestPhase2" ---
    test2_image1 = visual.ImageStim(
        win=win,
        name='test2_image1', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.6, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    test2_image2 = visual.ImageStim(
        win=win,
        name='test2_image2', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.2, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    test2_image3 = visual.ImageStim(
        win=win,
        name='test2_image3', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.2, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    test2_image4 = visual.ImageStim(
        win=win,
        name='test2_image4', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.6, 0), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    test2_sound = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='test2_sound',    name='test2_sound'
    )
    test2_sound.setVolume(1.0)
    text_8 = visual.TextStim(win=win, name='text_8',
        text='',
        font='Arial',
        pos=(0, -0.35), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=-6.0);
    test2_response_keyboard = keyboard.Keyboard(deviceName='test2_response_keyboard')
    
    # --- Initialize components for Routine "Finish" ---
    text_11 = visual.TextStim(win=win, name='text_11',
        text='The End!\nThank you for your participation.\n\nپایان\nبا تشکر از مشارکت شما',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    
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
    # create starting attributes for key_resp
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
    
    # --- Prepare to start Routine "HeadphoneCheck" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('HeadphoneCheck.started', globalClock.getTime(format='float'))
    # setup some python lists for storing info about the mouse
    mouse.x = []
    mouse.y = []
    mouse.leftButton = []
    mouse.midButton = []
    mouse.rightButton = []
    mouse.time = []
    mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # Run 'Begin Routine' code from CheckBoxLogic
    checkbox_ticked = False
    
    # Run 'Begin Routine' code from code_10
    win.mouseVisible = True
    
    # keep track of which components have finished
    HeadphoneCheckComponents = [text_13, mouse, checkbox]
    for thisComponent in HeadphoneCheckComponents:
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
    
    # --- Run Routine "HeadphoneCheck" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_13* updates
        
        # if text_13 is starting this frame...
        if text_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_13.frameNStart = frameN  # exact frame index
            text_13.tStart = t  # local t and not account for scr refresh
            text_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_13.started')
            # update status
            text_13.status = STARTED
            text_13.setAutoDraw(True)
        
        # if text_13 is active this frame...
        if text_13.status == STARTED:
            # update params
            pass
        
        # if text_13 is stopping this frame...
        if text_13.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_13.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                text_13.tStop = t  # not accounting for scr refresh
                text_13.tStopRefresh = tThisFlipGlobal  # on global time
                text_13.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_13.stopped')
                # update status
                text_13.status = FINISHED
                text_13.setAutoDraw(False)
        # *mouse* updates
        
        # if mouse is starting this frame...
        if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse.started', t)
            # update status
            mouse.status = STARTED
            mouse.mouseClock.reset()
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames(checkbox, namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(mouse):
                            gotValidClick = True
                            mouse.clicked_name.append(obj.name)
                    x, y = mouse.getPos()
                    mouse.x.append(x)
                    mouse.y.append(y)
                    buttons = mouse.getPressed()
                    mouse.leftButton.append(buttons[0])
                    mouse.midButton.append(buttons[1])
                    mouse.rightButton.append(buttons[2])
                    mouse.time.append(mouse.mouseClock.getTime())
                    
                    continueRoutine = False  # end routine on response
        
        # *checkbox* updates
        
        # if checkbox is starting this frame...
        if checkbox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            checkbox.frameNStart = frameN  # exact frame index
            checkbox.tStart = t  # local t and not account for scr refresh
            checkbox.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(checkbox, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'checkbox.started')
            # update status
            checkbox.status = STARTED
            checkbox.setAutoDraw(True)
        
        # if checkbox is active this frame...
        if checkbox.status == STARTED:
            # update params
            pass
        
        # if checkbox is stopping this frame...
        if checkbox.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > checkbox.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                checkbox.tStop = t  # not accounting for scr refresh
                checkbox.tStopRefresh = tThisFlipGlobal  # on global time
                checkbox.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'checkbox.stopped')
                # update status
                checkbox.status = FINISHED
                checkbox.setAutoDraw(False)
        # Run 'Each Frame' code from CheckBoxLogic
        if mouse.isPressedIn(checkbox):  # Use the actual name of the polygon component
            checkbox_ticked = not checkbox_ticked
            if checkbox_ticked:
                checkbox.fillColor = 'black'  # Change color to indicate it's ticked
            else:
                checkbox.fillColor = 'white'  # Change back to white if unticked
        
        
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
        for thisComponent in HeadphoneCheckComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "HeadphoneCheck" ---
    for thisComponent in HeadphoneCheckComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('HeadphoneCheck.stopped', globalClock.getTime(format='float'))
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('mouse.x', mouse.x)
    thisExp.addData('mouse.y', mouse.y)
    thisExp.addData('mouse.leftButton', mouse.leftButton)
    thisExp.addData('mouse.midButton', mouse.midButton)
    thisExp.addData('mouse.rightButton', mouse.rightButton)
    thisExp.addData('mouse.time', mouse.time)
    thisExp.addData('mouse.clicked_name', mouse.clicked_name)
    # Run 'End Routine' code from CheckBoxLogic
    thisExp.addData('Headphone_Used', checkbox_ticked)
    
    thisExp.nextEntry()
    # the Routine "HeadphoneCheck" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Introduction" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Introduction.started', globalClock.getTime(format='float'))
    image.setImage('Images/Speaker1.jpg')
    sound_8.setSound('Audio/Speaker1_Per/P1-23-Per.wav', secs=5, hamming=True)
    sound_8.setVolume(1.0, log=False)
    sound_8.seek(0)
    text_4.setText('گوینده ۱')
    image_7.setImage('Images/Speaker2.jpg')
    sound_10.setSound('Audio/Speaker2_Per/P2-23-Per.wav', secs=5, hamming=True)
    sound_10.setVolume(1.0, log=False)
    sound_10.seek(0)
    text_5.setText('گوینده ۲\n')
    image_8.setImage('Images/Speaker3.jpg')
    sound_12.setSound('Audio/Speaker3_Per/P3-23-Per.wav', secs=5, hamming=True)
    sound_12.setVolume(1.0, log=False)
    sound_12.seek(0)
    text_6.setText('گوینده ۳')
    image_9.setImage('Images/Speaker4.jpg')
    sound_14.setSound('Audio/Speaker4_Per/P4-23-Per.wav', secs=5, hamming=True)
    sound_14.setVolume(1.0, log=False)
    sound_14.seek(0)
    text_7.setText('گوینده ۴\n')
    # keep track of which components have finished
    IntroductionComponents = [text_2, image, sound_8, text_4, image_7, sound_10, text_5, image_8, sound_12, text_6, image_9, sound_14, text_7]
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
    while continueRoutine and routineTimer.getTime() < 36.0:
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
        if image.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
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
            if tThisFlipGlobal > image.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                image.tStop = t  # not accounting for scr refresh
                image.tStopRefresh = tThisFlipGlobal  # on global time
                image.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image.stopped')
                # update status
                image.status = FINISHED
                image.setAutoDraw(False)
        
        # if sound_8 is starting this frame...
        if sound_8.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
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
        if text_4.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
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
            if tThisFlipGlobal > text_4.tStartRefresh + 5-frameTolerance:
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
            if tThisFlipGlobal > image_7.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                image_7.tStop = t  # not accounting for scr refresh
                image_7.tStopRefresh = tThisFlipGlobal  # on global time
                image_7.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_7.stopped')
                # update status
                image_7.status = FINISHED
                image_7.setAutoDraw(False)
        
        # if sound_10 is starting this frame...
        if sound_10.status == NOT_STARTED and tThisFlip >= 15-frameTolerance:
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
            if tThisFlipGlobal > text_5.tStartRefresh + 5-frameTolerance:
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
        if image_8.status == NOT_STARTED and tThisFlip >= 23-frameTolerance:
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
            if tThisFlipGlobal > image_8.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                image_8.tStop = t  # not accounting for scr refresh
                image_8.tStopRefresh = tThisFlipGlobal  # on global time
                image_8.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_8.stopped')
                # update status
                image_8.status = FINISHED
                image_8.setAutoDraw(False)
        
        # if sound_12 is starting this frame...
        if sound_12.status == NOT_STARTED and tThisFlip >= 23-frameTolerance:
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
        if text_6.status == NOT_STARTED and tThisFlip >= 23-frameTolerance:
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
            if tThisFlipGlobal > text_6.tStartRefresh + 5-frameTolerance:
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
        if image_9.status == NOT_STARTED and tThisFlip >= 31-frameTolerance:
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
            if tThisFlipGlobal > image_9.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                image_9.tStop = t  # not accounting for scr refresh
                image_9.tStopRefresh = tThisFlipGlobal  # on global time
                image_9.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_9.stopped')
                # update status
                image_9.status = FINISHED
                image_9.setAutoDraw(False)
        
        # if sound_14 is starting this frame...
        if sound_14.status == NOT_STARTED and tThisFlip >= 31-frameTolerance:
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
        if text_7.status == NOT_STARTED and tThisFlip >= 31-frameTolerance:
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
            if tThisFlipGlobal > text_7.tStartRefresh + 5-frameTolerance:
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
    sound_8.pause()  # ensure sound has stopped at end of Routine
    sound_10.pause()  # ensure sound has stopped at end of Routine
    sound_12.pause()  # ensure sound has stopped at end of Routine
    sound_14.pause()  # ensure sound has stopped at end of Routine
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-36.000000)
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
    while continueRoutine and routineTimer.getTime() < 10.0:
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
            if tThisFlipGlobal > InstructionText.tStartRefresh + 10-frameTolerance:
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
        routineTimer.addTime(-10.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "Countdown" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Countdown.started', globalClock.getTime(format='float'))
    # keep track of which components have finished
    CountdownComponents = [number1, number2, number3, start, silence]
    for thisComponent in CountdownComponents:
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
    
    # --- Run Routine "Countdown" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 8.5:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *number1* updates
        
        # if number1 is starting this frame...
        if number1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            number1.frameNStart = frameN  # exact frame index
            number1.tStart = t  # local t and not account for scr refresh
            number1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(number1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'number1.started')
            # update status
            number1.status = STARTED
            number1.setAutoDraw(True)
        
        # if number1 is active this frame...
        if number1.status == STARTED:
            # update params
            pass
        
        # if number1 is stopping this frame...
        if number1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > number1.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                number1.tStop = t  # not accounting for scr refresh
                number1.tStopRefresh = tThisFlipGlobal  # on global time
                number1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'number1.stopped')
                # update status
                number1.status = FINISHED
                number1.setAutoDraw(False)
        
        # *number2* updates
        
        # if number2 is starting this frame...
        if number2.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            number2.frameNStart = frameN  # exact frame index
            number2.tStart = t  # local t and not account for scr refresh
            number2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(number2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'number2.started')
            # update status
            number2.status = STARTED
            number2.setAutoDraw(True)
        
        # if number2 is active this frame...
        if number2.status == STARTED:
            # update params
            pass
        
        # if number2 is stopping this frame...
        if number2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > number2.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                number2.tStop = t  # not accounting for scr refresh
                number2.tStopRefresh = tThisFlipGlobal  # on global time
                number2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'number2.stopped')
                # update status
                number2.status = FINISHED
                number2.setAutoDraw(False)
        
        # *number3* updates
        
        # if number3 is starting this frame...
        if number3.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
            # keep track of start time/frame for later
            number3.frameNStart = frameN  # exact frame index
            number3.tStart = t  # local t and not account for scr refresh
            number3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(number3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'number3.started')
            # update status
            number3.status = STARTED
            number3.setAutoDraw(True)
        
        # if number3 is active this frame...
        if number3.status == STARTED:
            # update params
            pass
        
        # if number3 is stopping this frame...
        if number3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > number3.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                number3.tStop = t  # not accounting for scr refresh
                number3.tStopRefresh = tThisFlipGlobal  # on global time
                number3.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'number3.stopped')
                # update status
                number3.status = FINISHED
                number3.setAutoDraw(False)
        
        # *start* updates
        
        # if start is starting this frame...
        if start.status == NOT_STARTED and tThisFlip >= 4.5-frameTolerance:
            # keep track of start time/frame for later
            start.frameNStart = frameN  # exact frame index
            start.tStart = t  # local t and not account for scr refresh
            start.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'start.started')
            # update status
            start.status = STARTED
            start.setAutoDraw(True)
        
        # if start is active this frame...
        if start.status == STARTED:
            # update params
            pass
        
        # if start is stopping this frame...
        if start.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > start.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                start.tStop = t  # not accounting for scr refresh
                start.tStopRefresh = tThisFlipGlobal  # on global time
                start.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'start.stopped')
                # update status
                start.status = FINISHED
                start.setAutoDraw(False)
        
        # *silence* updates
        
        # if silence is starting this frame...
        if silence.status == NOT_STARTED and tThisFlip >= 6.5-frameTolerance:
            # keep track of start time/frame for later
            silence.frameNStart = frameN  # exact frame index
            silence.tStart = t  # local t and not account for scr refresh
            silence.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(silence, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'silence.started')
            # update status
            silence.status = STARTED
            silence.setAutoDraw(True)
        
        # if silence is active this frame...
        if silence.status == STARTED:
            # update params
            pass
        
        # if silence is stopping this frame...
        if silence.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > silence.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                silence.tStop = t  # not accounting for scr refresh
                silence.tStopRefresh = tThisFlipGlobal  # on global time
                silence.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'silence.stopped')
                # update status
                silence.status = FINISHED
                silence.setAutoDraw(False)
        
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
        for thisComponent in CountdownComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Countdown" ---
    for thisComponent in CountdownComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Countdown.stopped', globalClock.getTime(format='float'))
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-8.500000)
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
    # Run 'End Routine' code from code_12
    sessionNumber += 1  # Increment session number
    
    thisExp.nextEntry()
    # the Routine "InitializeExperiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    repeated_TrainingLoopGroup2 = data.TrialHandler(nReps=999.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('Persian Trained- Training Phase.xlsx'),
        seed=None, name='repeated_TrainingLoopGroup2')
    thisExp.addLoop(repeated_TrainingLoopGroup2)  # add the loop to the experiment
    thisRepeated_TrainingLoopGroup2 = repeated_TrainingLoopGroup2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRepeated_TrainingLoopGroup2.rgb)
    if thisRepeated_TrainingLoopGroup2 != None:
        for paramName in thisRepeated_TrainingLoopGroup2:
            globals()[paramName] = thisRepeated_TrainingLoopGroup2[paramName]
    
    for thisRepeated_TrainingLoopGroup2 in repeated_TrainingLoopGroup2:
        currentLoop = repeated_TrainingLoopGroup2
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisRepeated_TrainingLoopGroup2.rgb)
        if thisRepeated_TrainingLoopGroup2 != None:
            for paramName in thisRepeated_TrainingLoopGroup2:
                globals()[paramName] = thisRepeated_TrainingLoopGroup2[paramName]
        
        # set up handler to look after randomisation of conditions etc
        TrainingLoopGroup2 = data.TrialHandler(nReps=1.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('Persian Trained- Training Phase.xlsx'),
            seed=None, name='TrainingLoopGroup2')
        thisExp.addLoop(TrainingLoopGroup2)  # add the loop to the experiment
        thisTrainingLoopGroup2 = TrainingLoopGroup2.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrainingLoopGroup2.rgb)
        if thisTrainingLoopGroup2 != None:
            for paramName in thisTrainingLoopGroup2:
                globals()[paramName] = thisTrainingLoopGroup2[paramName]
        
        for thisTrainingLoopGroup2 in TrainingLoopGroup2:
            currentLoop = TrainingLoopGroup2
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisTrainingLoopGroup2.rgb)
            if thisTrainingLoopGroup2 != None:
                for paramName in thisTrainingLoopGroup2:
                    globals()[paramName] = thisTrainingLoopGroup2[paramName]
            
            # --- Prepare to start Routine "TrainingGroup2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('TrainingGroup2.started', globalClock.getTime(format='float'))
            # Run 'Begin Routine' code from var_1
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
            
            image_11.setImage(SpeakerImage1)
            SpeakerPicture2.setImage(SpeakerImage2)
            image_5.setImage(SpeakerImage3)
            image_6.setImage(SpeakerImage4)
            Sound2.setSound(TrainingSound, hamming=True)
            Sound2.setVolume(1.0, log=False)
            Sound2.seek(0)
            Instruction2.setText('گوینده کیست؟ شماره گوینده را وارد کنید')
            # create starting attributes for Response2
            Response2.keys = []
            Response2.rt = []
            _Response2_allKeys = []
            # Run 'Begin Routine' code from SessionManager
            if trialN  == 80:
                trialN = 1
            else:
                trialN +=1
            SessionNumberTest.setText(str(trialN) + ' out of 80')
            # keep track of which components have finished
            TrainingGroup2Components = [image_11, SpeakerPicture2, image_5, image_6, Sound2, Instruction2, Response2, SessionNumberTest]
            for thisComponent in TrainingGroup2Components:
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
            
            # --- Run Routine "TrainingGroup2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_11* updates
                
                # if image_11 is starting this frame...
                if image_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_11.frameNStart = frameN  # exact frame index
                    image_11.tStart = t  # local t and not account for scr refresh
                    image_11.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_11, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_11.started')
                    # update status
                    image_11.status = STARTED
                    image_11.setAutoDraw(True)
                
                # if image_11 is active this frame...
                if image_11.status == STARTED:
                    # update params
                    pass
                
                # *SpeakerPicture2* updates
                
                # if SpeakerPicture2 is starting this frame...
                if SpeakerPicture2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    SpeakerPicture2.frameNStart = frameN  # exact frame index
                    SpeakerPicture2.tStart = t  # local t and not account for scr refresh
                    SpeakerPicture2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(SpeakerPicture2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'SpeakerPicture2.started')
                    # update status
                    SpeakerPicture2.status = STARTED
                    SpeakerPicture2.setAutoDraw(True)
                
                # if SpeakerPicture2 is active this frame...
                if SpeakerPicture2.status == STARTED:
                    # update params
                    pass
                
                # *image_5* updates
                
                # if image_5 is starting this frame...
                if image_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_5.frameNStart = frameN  # exact frame index
                    image_5.tStart = t  # local t and not account for scr refresh
                    image_5.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_5.started')
                    # update status
                    image_5.status = STARTED
                    image_5.setAutoDraw(True)
                
                # if image_5 is active this frame...
                if image_5.status == STARTED:
                    # update params
                    pass
                
                # *image_6* updates
                
                # if image_6 is starting this frame...
                if image_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_6.frameNStart = frameN  # exact frame index
                    image_6.tStart = t  # local t and not account for scr refresh
                    image_6.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_6, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_6.started')
                    # update status
                    image_6.status = STARTED
                    image_6.setAutoDraw(True)
                
                # if image_6 is active this frame...
                if image_6.status == STARTED:
                    # update params
                    pass
                
                # if Sound2 is starting this frame...
                if Sound2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    Sound2.frameNStart = frameN  # exact frame index
                    Sound2.tStart = t  # local t and not account for scr refresh
                    Sound2.tStartRefresh = tThisFlipGlobal  # on global time
                    # add timestamp to datafile
                    thisExp.addData('Sound2.started', tThisFlipGlobal)
                    # update status
                    Sound2.status = STARTED
                    Sound2.play(when=win)  # sync with win flip
                # update Sound2 status according to whether it's playing
                if Sound2.isPlaying:
                    Sound2.status = STARTED
                elif Sound2.isFinished:
                    Sound2.status = FINISHED
                
                # *Instruction2* updates
                
                # if Instruction2 is starting this frame...
                if Instruction2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    Instruction2.frameNStart = frameN  # exact frame index
                    Instruction2.tStart = t  # local t and not account for scr refresh
                    Instruction2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(Instruction2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'Instruction2.started')
                    # update status
                    Instruction2.status = STARTED
                    Instruction2.setAutoDraw(True)
                
                # if Instruction2 is active this frame...
                if Instruction2.status == STARTED:
                    # update params
                    pass
                
                # *Response2* updates
                waitOnFlip = False
                
                # if Response2 is starting this frame...
                if Response2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    Response2.frameNStart = frameN  # exact frame index
                    Response2.tStart = t  # local t and not account for scr refresh
                    Response2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(Response2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'Response2.started')
                    # update status
                    Response2.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(Response2.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(Response2.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if Response2.status == STARTED and not waitOnFlip:
                    theseKeys = Response2.getKeys(keyList=['1','2','3','4'], ignoreKeys=["escape"], waitRelease=False)
                    _Response2_allKeys.extend(theseKeys)
                    if len(_Response2_allKeys):
                        Response2.keys = _Response2_allKeys[-1].name  # just the last key pressed
                        Response2.rt = _Response2_allKeys[-1].rt
                        Response2.duration = _Response2_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # *SessionNumberTest* updates
                
                # if SessionNumberTest is starting this frame...
                if SessionNumberTest.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    SessionNumberTest.frameNStart = frameN  # exact frame index
                    SessionNumberTest.tStart = t  # local t and not account for scr refresh
                    SessionNumberTest.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(SessionNumberTest, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'SessionNumberTest.started')
                    # update status
                    SessionNumberTest.status = STARTED
                    SessionNumberTest.setAutoDraw(True)
                
                # if SessionNumberTest is active this frame...
                if SessionNumberTest.status == STARTED:
                    # update params
                    pass
                
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
                for thisComponent in TrainingGroup2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "TrainingGroup2" ---
            for thisComponent in TrainingGroup2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('TrainingGroup2.stopped', globalClock.getTime(format='float'))
            # Run 'End Routine' code from var_1
            # Ensure CorrectAnswer is correctly defined
            CorrectAnswer = EnglishCorrectAnswer  # Using EnglishCorrectAnswer for comparison
            
            # Map participant response to speaker label
            if len(Response2.keys) > 0:  # Check if a key was pressed
                participant_response_label = response_mapping.get(Response2.keys[0], "Invalid")
                
                # Check the participant's response
                if participant_response_label == CorrectAnswer:
                    correctResponses += 1
                    feedbackText = "صحیح است"
                else:
                    feedbackText = f"نادرست! پاسخ صحیح {PersianCorrectAnswer} است"  # Removed the full stop
            
                total_trials += 1
            
            # Print the feedback text for debugging (optional)
            print(f"Feedback Text: {feedbackText}")
            
            # Pass feedbackText to the next routine (FeedbackRoutine3)
            thisExp.addData('feedbackText', feedbackText)
            
            # Log data for debugging (optional)
            thisExp.addData('correct_responses_group2', correctResponses)
            thisExp.addData('total_trials_group2', total_trials)
            
            Sound2.pause()  # ensure sound has stopped at end of Routine
            # check responses
            if Response2.keys in ['', [], None]:  # No response was made
                Response2.keys = None
            TrainingLoopGroup2.addData('Response2.keys',Response2.keys)
            if Response2.keys != None:  # we had a response
                TrainingLoopGroup2.addData('Response2.rt', Response2.rt)
                TrainingLoopGroup2.addData('Response2.duration', Response2.duration)
            # Run 'End Routine' code from SessionManager
            sessionNumber += 1  # Increment session number
            print(f"Updated session number: {sessionNumber}")  # Debugging
            
            # the Routine "TrainingGroup2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "FeedbackRoutine2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('FeedbackRoutine2.started', globalClock.getTime(format='float'))
            FeedbackText2.setText(feedbackText)
            # Run 'Begin Routine' code from code_11
            # Begin Routine tab in the Code Component of FeedbackRoutine1
            if total_trials > 0 and (correct_responses / total_trials >= TARGET_ACCURACY):
                continue_to_test_phases = True
                TrainingLoopGroup1.finished = True  # End the training loop
            else:
                continue_to_test_phases = False
            # keep track of which components have finished
            FeedbackRoutine2Components = [FeedbackText2]
            for thisComponent in FeedbackRoutine2Components:
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
            
            # --- Run Routine "FeedbackRoutine2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 2.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *FeedbackText2* updates
                
                # if FeedbackText2 is starting this frame...
                if FeedbackText2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    FeedbackText2.frameNStart = frameN  # exact frame index
                    FeedbackText2.tStart = t  # local t and not account for scr refresh
                    FeedbackText2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(FeedbackText2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'FeedbackText2.started')
                    # update status
                    FeedbackText2.status = STARTED
                    FeedbackText2.setAutoDraw(True)
                
                # if FeedbackText2 is active this frame...
                if FeedbackText2.status == STARTED:
                    # update params
                    pass
                
                # if FeedbackText2 is stopping this frame...
                if FeedbackText2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > FeedbackText2.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        FeedbackText2.tStop = t  # not accounting for scr refresh
                        FeedbackText2.tStopRefresh = tThisFlipGlobal  # on global time
                        FeedbackText2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'FeedbackText2.stopped')
                        # update status
                        FeedbackText2.status = FINISHED
                        FeedbackText2.setAutoDraw(False)
                
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
                for thisComponent in FeedbackRoutine2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "FeedbackRoutine2" ---
            for thisComponent in FeedbackRoutine2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('FeedbackRoutine2.stopped', globalClock.getTime(format='float'))
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-2.000000)
            
            # --- Prepare to start Routine "Break" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Break.started', globalClock.getTime(format='float'))
            # Run 'Begin Routine' code from code_16
            if TrainingLoopGroup2.thisN != 39:
                continueRoutine = False
            # setup some python lists for storing info about the mouse2
            mouse2.x = []
            mouse2.y = []
            mouse2.leftButton = []
            mouse2.midButton = []
            mouse2.rightButton = []
            mouse2.time = []
            mouse2.clicked_name = []
            gotValidClick = False  # until a click is received
            # Run 'Begin Routine' code from code_17
            checkbox_ticked = False
            
            # Run 'Begin Routine' code from for_mouse
            win.mouseVisible = True
            
            # Run 'Begin Routine' code from code_19
            # Start the timer
            break_timer.reset()
            
            # keep track of which components have finished
            BreakComponents = [break_message, mouse2, checkbox2, text_component]
            for thisComponent in BreakComponents:
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
            
            # --- Run Routine "Break" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *break_message* updates
                
                # if break_message is starting this frame...
                if break_message.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    break_message.frameNStart = frameN  # exact frame index
                    break_message.tStart = t  # local t and not account for scr refresh
                    break_message.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(break_message, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'break_message.started')
                    # update status
                    break_message.status = STARTED
                    break_message.setAutoDraw(True)
                
                # if break_message is active this frame...
                if break_message.status == STARTED:
                    # update params
                    pass
                # *mouse2* updates
                
                # if mouse2 is starting this frame...
                if mouse2.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    mouse2.frameNStart = frameN  # exact frame index
                    mouse2.tStart = t  # local t and not account for scr refresh
                    mouse2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(mouse2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.addData('mouse2.started', t)
                    # update status
                    mouse2.status = STARTED
                    mouse2.mouseClock.reset()
                    prevButtonState = mouse2.getPressed()  # if button is down already this ISN'T a new click
                if mouse2.status == STARTED:  # only update if started and not finished!
                    buttons = mouse2.getPressed()
                    if buttons != prevButtonState:  # button state changed?
                        prevButtonState = buttons
                        if sum(buttons) > 0:  # state changed to a new click
                            # check if the mouse was inside our 'clickable' objects
                            gotValidClick = False
                            clickableList = environmenttools.getFromNames(checkbox2, namespace=locals())
                            for obj in clickableList:
                                # is this object clicked on?
                                if obj.contains(mouse2):
                                    gotValidClick = True
                                    mouse2.clicked_name.append(obj.name)
                            x, y = mouse2.getPos()
                            mouse2.x.append(x)
                            mouse2.y.append(y)
                            buttons = mouse2.getPressed()
                            mouse2.leftButton.append(buttons[0])
                            mouse2.midButton.append(buttons[1])
                            mouse2.rightButton.append(buttons[2])
                            mouse2.time.append(mouse2.mouseClock.getTime())
                            
                            continueRoutine = False  # end routine on response
                
                # *checkbox2* updates
                
                # if checkbox2 is starting this frame...
                if checkbox2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    checkbox2.frameNStart = frameN  # exact frame index
                    checkbox2.tStart = t  # local t and not account for scr refresh
                    checkbox2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(checkbox2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'checkbox2.started')
                    # update status
                    checkbox2.status = STARTED
                    checkbox2.setAutoDraw(True)
                
                # if checkbox2 is active this frame...
                if checkbox2.status == STARTED:
                    # update params
                    pass
                # Run 'Each Frame' code from code_17
                if mouse.isPressedIn(checkbox2):  # Use the actual name of the polygon component
                    checkbox_ticked = not checkbox_ticked
                    if checkbox_ticked:
                        checkbox.fillColor = 'black'  # Change color to indicate it's ticked
                    else:
                        checkbox.fillColor = 'white'  # Change back to white if unticked
                
                # Run 'Each Frame' code from code_19
                # Update the text component with the remaining time
                remaining_time = 360 - break_timer.getTime()  # Assuming a 360-second break
                text_component.setText(f'زمان باقی‌مانده: {remaining_time:.1f} ثانیه')
                text_component.setFont('Arial')  # Set to a font that supports Persian
                
                # End the routine after 360 seconds
                if break_timer.getTime() > 360:
                    continueRoutine = False
                
                
                # *text_component* updates
                
                # if text_component is starting this frame...
                if text_component.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_component.frameNStart = frameN  # exact frame index
                    text_component.tStart = t  # local t and not account for scr refresh
                    text_component.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_component, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_component.started')
                    # update status
                    text_component.status = STARTED
                    text_component.setAutoDraw(True)
                
                # if text_component is active this frame...
                if text_component.status == STARTED:
                    # update params
                    pass
                
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
                for thisComponent in BreakComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Break" ---
            for thisComponent in BreakComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Break.stopped', globalClock.getTime(format='float'))
            # store data for TrainingLoopGroup2 (TrialHandler)
            TrainingLoopGroup2.addData('mouse2.x', mouse2.x)
            TrainingLoopGroup2.addData('mouse2.y', mouse2.y)
            TrainingLoopGroup2.addData('mouse2.leftButton', mouse2.leftButton)
            TrainingLoopGroup2.addData('mouse2.midButton', mouse2.midButton)
            TrainingLoopGroup2.addData('mouse2.rightButton', mouse2.rightButton)
            TrainingLoopGroup2.addData('mouse2.time', mouse2.time)
            TrainingLoopGroup2.addData('mouse2.clicked_name', mouse2.clicked_name)
            # Run 'End Routine' code from code_17
            thisExp.addData('Proceed_Break', checkbox_ticked)
            
            # Run 'End Routine' code from code_19
            # Optional: Record the final time or perform other tasks
            final_time = break_timer.getTime()
            
            # the Routine "Break" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1.0 repeats of 'TrainingLoopGroup2'
        
        
        # --- Prepare to start Routine "CheckAccuracy2" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('CheckAccuracy2.started', globalClock.getTime(format='float'))
        # Run 'Begin Routine' code from code_9
        TARGET_ACCURACY = 0.85  # 85% accuracy threshold
        
        # Calculate accuracy
        accuracy = correctResponses / total_trials if total_trials > 0 else 0.0
        
        # Check if participant meets the accuracy criterion
        if accuracy >= TARGET_ACCURACY:
            proceed_to_test = True
            repeated_TrainingLoopGroup2.finished = True
        else:
            proceed_to_test = False
            correctResponses = 0  # Reset score
            total_trials = 0  # Reset total trials
        
        # Print accuracy for debugging
        print(f"Accuracy: {accuracy}")
        print(f"Proceed to test: {proceed_to_test}")
        
        # Log data for debugging (optional)
        thisExp.addData('accuracy_group2', accuracy)
        thisExp.addData('proceed_to_test', proceed_to_test)
        
        # keep track of which components have finished
        CheckAccuracy2Components = []
        for thisComponent in CheckAccuracy2Components:
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
        
        # --- Run Routine "CheckAccuracy2" ---
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
            for thisComponent in CheckAccuracy2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "CheckAccuracy2" ---
        for thisComponent in CheckAccuracy2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('CheckAccuracy2.stopped', globalClock.getTime(format='float'))
        # the Routine "CheckAccuracy2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 999.0 repeats of 'repeated_TrainingLoopGroup2'
    
    
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
    testPhase2Loop = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('Persian Trained- Test Phase.xlsx'),
        seed=None, name='testPhase2Loop')
    thisExp.addLoop(testPhase2Loop)  # add the loop to the experiment
    thisTestPhase2Loop = testPhase2Loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTestPhase2Loop.rgb)
    if thisTestPhase2Loop != None:
        for paramName in thisTestPhase2Loop:
            globals()[paramName] = thisTestPhase2Loop[paramName]
    
    for thisTestPhase2Loop in testPhase2Loop:
        currentLoop = testPhase2Loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTestPhase2Loop.rgb)
        if thisTestPhase2Loop != None:
            for paramName in thisTestPhase2Loop:
                globals()[paramName] = thisTestPhase2Loop[paramName]
        
        # --- Prepare to start Routine "TestPhase2" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('TestPhase2.started', globalClock.getTime(format='float'))
        # Run 'Begin Routine' code from code_13
        if not proceed_to_test:
            continueRoutine = False  # Skip the test phase if criteria are not met
        
        test2_image1.setImage(SpeakerPhoto1)
        test2_image2.setImage(SpeakerPhoto2)
        test2_image3.setImage(SpeakerPhoto3)
        test2_image4.setImage(SpeakerPhoto4)
        test2_sound.setSound(TestingSound, hamming=True)
        test2_sound.setVolume(1.0, log=False)
        test2_sound.seek(0)
        text_8.setText('Who is speaking? press the number corresponding to the speaker.\nگوینده کیست؟ شماره گوینده را وارد کنید')
        # create starting attributes for test2_response_keyboard
        test2_response_keyboard.keys = []
        test2_response_keyboard.rt = []
        _test2_response_keyboard_allKeys = []
        # Run 'Begin Routine' code from log_response_test2
        # Print for debugging purposes
        print(f"Starting TestPhase2")
        # Initialize variables if needed
        test2_response_keyboard.keys = []
        
        # keep track of which components have finished
        TestPhase2Components = [test2_image1, test2_image2, test2_image3, test2_image4, test2_sound, text_8, test2_response_keyboard]
        for thisComponent in TestPhase2Components:
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
        
        # --- Run Routine "TestPhase2" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *test2_image1* updates
            
            # if test2_image1 is starting this frame...
            if test2_image1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test2_image1.frameNStart = frameN  # exact frame index
                test2_image1.tStart = t  # local t and not account for scr refresh
                test2_image1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test2_image1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'test2_image1.started')
                # update status
                test2_image1.status = STARTED
                test2_image1.setAutoDraw(True)
            
            # if test2_image1 is active this frame...
            if test2_image1.status == STARTED:
                # update params
                pass
            
            # *test2_image2* updates
            
            # if test2_image2 is starting this frame...
            if test2_image2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test2_image2.frameNStart = frameN  # exact frame index
                test2_image2.tStart = t  # local t and not account for scr refresh
                test2_image2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test2_image2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'test2_image2.started')
                # update status
                test2_image2.status = STARTED
                test2_image2.setAutoDraw(True)
            
            # if test2_image2 is active this frame...
            if test2_image2.status == STARTED:
                # update params
                pass
            
            # *test2_image3* updates
            
            # if test2_image3 is starting this frame...
            if test2_image3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test2_image3.frameNStart = frameN  # exact frame index
                test2_image3.tStart = t  # local t and not account for scr refresh
                test2_image3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test2_image3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'test2_image3.started')
                # update status
                test2_image3.status = STARTED
                test2_image3.setAutoDraw(True)
            
            # if test2_image3 is active this frame...
            if test2_image3.status == STARTED:
                # update params
                pass
            
            # *test2_image4* updates
            
            # if test2_image4 is starting this frame...
            if test2_image4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test2_image4.frameNStart = frameN  # exact frame index
                test2_image4.tStart = t  # local t and not account for scr refresh
                test2_image4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test2_image4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'test2_image4.started')
                # update status
                test2_image4.status = STARTED
                test2_image4.setAutoDraw(True)
            
            # if test2_image4 is active this frame...
            if test2_image4.status == STARTED:
                # update params
                pass
            
            # if test2_sound is starting this frame...
            if test2_sound.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test2_sound.frameNStart = frameN  # exact frame index
                test2_sound.tStart = t  # local t and not account for scr refresh
                test2_sound.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('test2_sound.started', tThisFlipGlobal)
                # update status
                test2_sound.status = STARTED
                test2_sound.play(when=win)  # sync with win flip
            # update test2_sound status according to whether it's playing
            if test2_sound.isPlaying:
                test2_sound.status = STARTED
            elif test2_sound.isFinished:
                test2_sound.status = FINISHED
            
            # *text_8* updates
            
            # if text_8 is starting this frame...
            if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_8.frameNStart = frameN  # exact frame index
                text_8.tStart = t  # local t and not account for scr refresh
                text_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_8.started')
                # update status
                text_8.status = STARTED
                text_8.setAutoDraw(True)
            
            # if text_8 is active this frame...
            if text_8.status == STARTED:
                # update params
                pass
            
            # *test2_response_keyboard* updates
            waitOnFlip = False
            
            # if test2_response_keyboard is starting this frame...
            if test2_response_keyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test2_response_keyboard.frameNStart = frameN  # exact frame index
                test2_response_keyboard.tStart = t  # local t and not account for scr refresh
                test2_response_keyboard.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test2_response_keyboard, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'test2_response_keyboard.started')
                # update status
                test2_response_keyboard.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(test2_response_keyboard.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(test2_response_keyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if test2_response_keyboard.status == STARTED and not waitOnFlip:
                theseKeys = test2_response_keyboard.getKeys(keyList=['1','2','3','4'], ignoreKeys=["escape"], waitRelease=False)
                _test2_response_keyboard_allKeys.extend(theseKeys)
                if len(_test2_response_keyboard_allKeys):
                    test2_response_keyboard.keys = _test2_response_keyboard_allKeys[-1].name  # just the last key pressed
                    test2_response_keyboard.rt = _test2_response_keyboard_allKeys[-1].rt
                    test2_response_keyboard.duration = _test2_response_keyboard_allKeys[-1].duration
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
            for thisComponent in TestPhase2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "TestPhase2" ---
        for thisComponent in TestPhase2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('TestPhase2.stopped', globalClock.getTime(format='float'))
        test2_sound.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if test2_response_keyboard.keys in ['', [], None]:  # No response was made
            test2_response_keyboard.keys = None
        testPhase2Loop.addData('test2_response_keyboard.keys',test2_response_keyboard.keys)
        if test2_response_keyboard.keys != None:  # we had a response
            testPhase2Loop.addData('test2_response_keyboard.rt', test2_response_keyboard.rt)
            testPhase2Loop.addData('test2_response_keyboard.duration', test2_response_keyboard.duration)
        # Run 'End Routine' code from log_response_test2
        # End Routine tab in the Code Component of TestPhase2 (log_response_test2)
        
        # Check if the response object exists and has keys
        if 'test2_response_keyboard' in locals() and test2_response_keyboard.keys is not None:
            thisExp.addData('test2_response', test2_response_keyboard.keys)
        else:
            thisExp.addData('test2_response', 'No response')
        
        # Log other data
        thisExp.addData('test2_image_file1', SpeakerPhoto1)
        thisExp.addData('test2_image_file2', SpeakerPhoto2)
        thisExp.addData('test2_image_file3', SpeakerPhoto3)
        thisExp.addData('test2_image_file4', SpeakerPhoto4)
        thisExp.addData('test2_sound_file', TestingSound)
        thisExp.addData('english_correct_answer', EnglishCorrectAnswer)
        thisExp.addData('persian_correct_answer', PersianCorrectAnswer)
        
        # the Routine "TestPhase2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1.0 repeats of 'testPhase2Loop'
    
    
    # --- Prepare to start Routine "Finish" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Finish.started', globalClock.getTime(format='float'))
    # keep track of which components have finished
    FinishComponents = [text_11]
    for thisComponent in FinishComponents:
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
    
    # --- Run Routine "Finish" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 5.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_11* updates
        
        # if text_11 is starting this frame...
        if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_11.frameNStart = frameN  # exact frame index
            text_11.tStart = t  # local t and not account for scr refresh
            text_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_11.started')
            # update status
            text_11.status = STARTED
            text_11.setAutoDraw(True)
        
        # if text_11 is active this frame...
        if text_11.status == STARTED:
            # update params
            pass
        
        # if text_11 is stopping this frame...
        if text_11.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_11.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                text_11.tStop = t  # not accounting for scr refresh
                text_11.tStopRefresh = tThisFlipGlobal  # on global time
                text_11.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_11.stopped')
                # update status
                text_11.status = FINISHED
                text_11.setAutoDraw(False)
        
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
        for thisComponent in FinishComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Finish" ---
    for thisComponent in FinishComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Finish.stopped', globalClock.getTime(format='float'))
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-5.000000)
    thisExp.nextEntry()
    
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
