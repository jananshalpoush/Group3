#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.1.4),
    on Fri Jun 21 22:36:49 2024
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
expName = '5-8'  # from the Builder filename that created this script
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
        originPath='/Users/ohtalab2/Desktop/Experiment Folder/5-8_lastrun.py',
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
    if deviceManager.getDevice('ker_resp') is None:
        # initialise ker_resp
        ker_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='ker_resp',
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
    # create speaker 'Sound3'
    deviceManager.addDevice(
        deviceName='Sound3',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('Response3') is None:
        # initialise Response3
        Response3 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='Response3',
        )
    # create speaker 'Sound1'
    deviceManager.addDevice(
        deviceName='Sound1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('Response1') is None:
        # initialise Response1
        Response1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='Response1',
        )
    # create speaker 'Sound_2'
    deviceManager.addDevice(
        deviceName='Sound_2',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('Response_2') is None:
        # initialise Response_2
        Response_2 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='Response_2',
        )
    # create speaker 'Sound_3'
    deviceManager.addDevice(
        deviceName='Sound_3',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('Response_3') is None:
        # initialise Response_3
        Response_3 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='Response_3',
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
    
    # --- Initialize components for Routine "Initialize" ---
    
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
    ker_resp = keyboard.Keyboard(deviceName='ker_resp')
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
        text='Please choose the number of the relevant speaker (like speaker 1, speaker 2, etc.) from the keyboard.\nلطفا شماره گوینده مربوطه را از روی کیبورد انتخاب کنید',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='Arabic',
        depth=0.0);
    
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
    
    # --- Initialize components for Routine "CheckPerformance" ---
    
    # --- Initialize components for Routine "TrainingGroup2" ---
    image_11 = visual.ImageStim(
        win=win,
        name='image_11', 
        image=None, mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    SpeakerPicture2 = visual.ImageStim(
        win=win,
        name='SpeakerPicture2', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    image_5 = visual.ImageStim(
        win=win,
        name='image_5', 
        image=None, mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    image_6 = visual.ImageStim(
        win=win,
        name='image_6', 
        image=None, mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
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
        pos=(0, -0.6), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    Response2 = keyboard.Keyboard(deviceName='Response2')
    
    # --- Initialize components for Routine "FeedbackRoutine2" ---
    FeedbackText2 = visual.TextStim(win=win, name='FeedbackText2',
        text='',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "TrainingGroup3" ---
    SpeakerPicture3 = visual.ImageStim(
        win=win,
        name='SpeakerPicture3', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    Sound3 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='Sound3',    name='Sound3'
    )
    Sound3.setVolume(1.0)
    Instruction3 = visual.TextStim(win=win, name='Instruction3',
        text='',
        font='Arial',
        pos=(0, -0.6), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    Response3 = keyboard.Keyboard(deviceName='Response3')
    
    # --- Initialize components for Routine "FeedbackRoutine3" ---
    FeedbackText3 = visual.TextStim(win=win, name='FeedbackText3',
        text='',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "TestingGroup1Routine" ---
    TestInstructions1 = visual.TextStim(win=win, name='TestInstructions1',
        text='',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    SpeakerPicture1 = visual.ImageStim(
        win=win,
        name='SpeakerPicture1', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    image_12 = visual.ImageStim(
        win=win,
        name='image_12', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    image_13 = visual.ImageStim(
        win=win,
        name='image_13', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    image_14 = visual.ImageStim(
        win=win,
        name='image_14', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    Sound1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='Sound1',    name='Sound1'
    )
    Sound1.setVolume(1.0)
    Response1 = keyboard.Keyboard(deviceName='Response1')
    
    # --- Initialize components for Routine "TestingGroup2Routine" ---
    TestInstructions2 = visual.TextStim(win=win, name='TestInstructions2',
        text='',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    SpeakerPic2 = visual.ImageStim(
        win=win,
        name='SpeakerPic2', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    Sound_2 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='Sound_2',    name='Sound_2'
    )
    Sound_2.setVolume(1.0)
    Response_2 = keyboard.Keyboard(deviceName='Response_2')
    
    # --- Initialize components for Routine "TestingGroup3Routine" ---
    TestInstructions3 = visual.TextStim(win=win, name='TestInstructions3',
        text='',
        font='Arial',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    SpeakerPic_3 = visual.ImageStim(
        win=win,
        name='SpeakerPic_3', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    Sound_3 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='Sound_3',    name='Sound_3'
    )
    Sound_3.setVolume(1.0)
    Response_3 = keyboard.Keyboard(deviceName='Response_3')
    
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
    
    # --- Prepare to start Routine "Initialize" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Initialize.started', globalClock.getTime(format='float'))
    # Run 'Begin Routine' code from InitializeCode
    correctResponses = 0
    # keep track of which components have finished
    InitializeComponents = []
    for thisComponent in InitializeComponents:
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
    
    # --- Run Routine "Initialize" ---
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
        for thisComponent in InitializeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Initialize" ---
    for thisComponent in InitializeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Initialize.stopped', globalClock.getTime(format='float'))
    thisExp.nextEntry()
    # the Routine "Initialize" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
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
    ker_resp.keys = []
    ker_resp.rt = []
    _ker_resp_allKeys = []
    # keep track of which components have finished
    GroupSelectionComponents = [GroupInstructions, ker_resp]
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
        
        # *ker_resp* updates
        waitOnFlip = False
        
        # if ker_resp is starting this frame...
        if ker_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            ker_resp.frameNStart = frameN  # exact frame index
            ker_resp.tStart = t  # local t and not account for scr refresh
            ker_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ker_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'ker_resp.started')
            # update status
            ker_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(ker_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(ker_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if ker_resp is stopping this frame...
        if ker_resp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > ker_resp.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                ker_resp.tStop = t  # not accounting for scr refresh
                ker_resp.tStopRefresh = tThisFlipGlobal  # on global time
                ker_resp.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ker_resp.stopped')
                # update status
                ker_resp.status = FINISHED
                ker_resp.status = FINISHED
        if ker_resp.status == STARTED and not waitOnFlip:
            theseKeys = ker_resp.getKeys(keyList=['1','2','3'], ignoreKeys=["escape"], waitRelease=False)
            _ker_resp_allKeys.extend(theseKeys)
            if len(_ker_resp_allKeys):
                ker_resp.keys = _ker_resp_allKeys[-1].name  # just the last key pressed
                ker_resp.rt = _ker_resp_allKeys[-1].rt
                ker_resp.duration = _ker_resp_allKeys[-1].duration
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
    if ker_resp.keys in ['', [], None]:  # No response was made
        ker_resp.keys = None
    thisExp.addData('ker_resp.keys',ker_resp.keys)
    if ker_resp.keys != None:  # we had a response
        thisExp.addData('ker_resp.rt', ker_resp.rt)
        thisExp.addData('ker_resp.duration', ker_resp.duration)
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
    while continueRoutine and routineTimer.getTime() < 5.0:
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
            if tThisFlipGlobal > InstructionText.tStartRefresh + 5-frameTolerance:
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
        routineTimer.addTime(-5.000000)
    thisExp.nextEntry()
    
    # set up handler to look after randomisation of conditions etc
    TrainingLoopGroup1 = data.TrialHandler(nReps=999.0, method='random', 
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
        Instruction.setText('Who is speaking? press the number corresponding to the speaker.\nگوینده کیست؟ شماره گوینده را وارد کنید')
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
        participant_response_label = response_mapping.get(ResponseKey.keys[0], "Invalid")
        
        # Check the participant's response
        if participant_response_label == CorrectAnswer:
            correctResponses += 1
            feedbackText = "Correct! صحیح است"
        else:
            feedbackText = f"Incorrect! The correct answer is {EnglishCorrectAnswer}.    نادرست! پاسخ صحیح {PersianCorrectAnswer}"
        
        # Print the feedback text for debugging (optional)
        print(f"Feedback Text: {feedbackText}")
        
        # Pass feedbackText to the next routine (FeedbackRoutine1)
        thisExp.addData('feedbackText', feedbackText)
        
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
    # completed 999.0 repeats of 'TrainingLoopGroup1'
    
    
    # --- Prepare to start Routine "CheckPerformance" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('CheckPerformance.started', globalClock.getTime(format='float'))
    # Run 'Begin Routine' code from code_3
    # Calculate the percentage of correct responses
    totalTrials = TrainingLoopGroup1.nTotal
    correctPercentage = (correctResponses / totalTrials) * 100
    
    # Check if the participant has met the 85% criterion
    if correctPercentage >= 85:
        continueRoutine = False  # Allow to proceed to the test phase
    else:
        correctResponses = 0  # Reset correct responses counter
        TrainingLoopGroup1.finished = False  # Repeat the training loop
        continueRoutine = False
    # keep track of which components have finished
    CheckPerformanceComponents = []
    for thisComponent in CheckPerformanceComponents:
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
    
    # --- Run Routine "CheckPerformance" ---
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
        for thisComponent in CheckPerformanceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "CheckPerformance" ---
    for thisComponent in CheckPerformanceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('CheckPerformance.stopped', globalClock.getTime(format='float'))
    thisExp.nextEntry()
    # the Routine "CheckPerformance" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    TrainingLoopGroup2 = data.TrialHandler(nReps=1 if group == 2 else 0 , method='random', 
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
        SpeakerPicture2.setImage(SpeakerImage)
        # Run 'Begin Routine' code from CodeFeedback2
        # Initialize feedback message
        feedback_message = ""
        Sound2.setSound(TrainingSound, hamming=True)
        Sound2.setVolume(1.0, log=False)
        Sound2.seek(0)
        Instruction2.setText('Who is speaking? Press the number corresponding to the speaker.\nگوینده\u200cی این جمله چی کسی بود؟  عدد گوینده مدنظر را وارد کنید.\n')
        Response2.keys = []
        Response2.rt = []
        _Response2_allKeys = []
        # keep track of which components have finished
        TrainingGroup2Components = [image_11, SpeakerPicture2, image_5, image_6, Sound2, Instruction2, Response2]
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
            
            # if image_11 is stopping this frame...
            if image_11.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_11.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image_11.tStop = t  # not accounting for scr refresh
                    image_11.tStopRefresh = tThisFlipGlobal  # on global time
                    image_11.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_11.stopped')
                    # update status
                    image_11.status = FINISHED
                    image_11.setAutoDraw(False)
            
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
            
            # if image_5 is stopping this frame...
            if image_5.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_5.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image_5.tStop = t  # not accounting for scr refresh
                    image_5.tStopRefresh = tThisFlipGlobal  # on global time
                    image_5.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_5.stopped')
                    # update status
                    image_5.status = FINISHED
                    image_5.setAutoDraw(False)
            
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
            
            # if image_6 is stopping this frame...
            if image_6.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_6.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image_6.tStop = t  # not accounting for scr refresh
                    image_6.tStopRefresh = tThisFlipGlobal  # on global time
                    image_6.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_6.stopped')
                    # update status
                    image_6.status = FINISHED
                    image_6.setAutoDraw(False)
            
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
        # Run 'End Routine' code from CodeFeedback2
        if Response2.keys:
            response_key = Response2.keys[0]  # Get the key as a string
            correct_speaker = CorrectAnswer  # This should be a string like 'Speaker1'
            if response_key == correct_speaker[-1]:  # Compare only the last character of the string, e.g., '1' for 'Speaker1'
                feedback_message2 = "Correct!"
            else:
                feedback_message2 = f"Incorrect. The correct answer was: {correct_speaker}"
        else:
            feedback_message2 = "No response made."
        Sound2.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if Response2.keys in ['', [], None]:  # No response was made
            Response2.keys = None
        TrainingLoopGroup2.addData('Response2.keys',Response2.keys)
        if Response2.keys != None:  # we had a response
            TrainingLoopGroup2.addData('Response2.rt', Response2.rt)
            TrainingLoopGroup2.addData('Response2.duration', Response2.duration)
        # the Routine "TrainingGroup2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "FeedbackRoutine2" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('FeedbackRoutine2.started', globalClock.getTime(format='float'))
        FeedbackText2.setText(feedback_message
        )
        # Run 'Begin Routine' code from CodeFeedbackDisplay2
        if ResponseKey.keys == str(CorrectAnswer):
            FeedbackText.text = "Correct!"
            thisExp.addData('Feedback', 'Correct')
        else:
            FeedbackText.text = "Incorrect. The correct answer was " + str(CorrectAnswer)
            thisExp.addData('Feedback', 'Incorrect')
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
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1 if group == 2 else 0  repeats of 'TrainingLoopGroup2'
    
    
    # set up handler to look after randomisation of conditions etc
    TrainingLoopGroup3 = data.TrialHandler(nReps=1 if group == 3 else 0 , method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('English Trained- Training Phase.xlsx'),
        seed=None, name='TrainingLoopGroup3')
    thisExp.addLoop(TrainingLoopGroup3)  # add the loop to the experiment
    thisTrainingLoopGroup3 = TrainingLoopGroup3.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrainingLoopGroup3.rgb)
    if thisTrainingLoopGroup3 != None:
        for paramName in thisTrainingLoopGroup3:
            globals()[paramName] = thisTrainingLoopGroup3[paramName]
    
    for thisTrainingLoopGroup3 in TrainingLoopGroup3:
        currentLoop = TrainingLoopGroup3
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTrainingLoopGroup3.rgb)
        if thisTrainingLoopGroup3 != None:
            for paramName in thisTrainingLoopGroup3:
                globals()[paramName] = thisTrainingLoopGroup3[paramName]
        
        # --- Prepare to start Routine "TrainingGroup3" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('TrainingGroup3.started', globalClock.getTime(format='float'))
        # Run 'Begin Routine' code from CodeFeedback3
        # Initialize feedback message
        feedback_message = ""
        SpeakerPicture3.setImage(SpeakerImage)
        Sound3.setSound(TrainingSound, hamming=True)
        Sound3.setVolume(1.0, log=False)
        Sound3.seek(0)
        Instruction3.setText('Who is speaking? Press the number corresponding to the speaker.\nگوینده\u200cی این جمله چی کسی بود؟  عدد گوینده مدنظر را وارد کنید.')
        Response3.keys = []
        Response3.rt = []
        _Response3_allKeys = []
        # keep track of which components have finished
        TrainingGroup3Components = [SpeakerPicture3, Sound3, Instruction3, Response3]
        for thisComponent in TrainingGroup3Components:
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
        
        # --- Run Routine "TrainingGroup3" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *SpeakerPicture3* updates
            
            # if SpeakerPicture3 is starting this frame...
            if SpeakerPicture3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                SpeakerPicture3.frameNStart = frameN  # exact frame index
                SpeakerPicture3.tStart = t  # local t and not account for scr refresh
                SpeakerPicture3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(SpeakerPicture3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'SpeakerPicture3.started')
                # update status
                SpeakerPicture3.status = STARTED
                SpeakerPicture3.setAutoDraw(True)
            
            # if SpeakerPicture3 is active this frame...
            if SpeakerPicture3.status == STARTED:
                # update params
                pass
            
            # if Sound3 is starting this frame...
            if Sound3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Sound3.frameNStart = frameN  # exact frame index
                Sound3.tStart = t  # local t and not account for scr refresh
                Sound3.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('Sound3.started', tThisFlipGlobal)
                # update status
                Sound3.status = STARTED
                Sound3.play(when=win)  # sync with win flip
            # update Sound3 status according to whether it's playing
            if Sound3.isPlaying:
                Sound3.status = STARTED
            elif Sound3.isFinished:
                Sound3.status = FINISHED
            
            # *Instruction3* updates
            
            # if Instruction3 is starting this frame...
            if Instruction3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Instruction3.frameNStart = frameN  # exact frame index
                Instruction3.tStart = t  # local t and not account for scr refresh
                Instruction3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Instruction3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Instruction3.started')
                # update status
                Instruction3.status = STARTED
                Instruction3.setAutoDraw(True)
            
            # if Instruction3 is active this frame...
            if Instruction3.status == STARTED:
                # update params
                pass
            
            # *Response3* updates
            waitOnFlip = False
            
            # if Response3 is starting this frame...
            if Response3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Response3.frameNStart = frameN  # exact frame index
                Response3.tStart = t  # local t and not account for scr refresh
                Response3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Response3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Response3.started')
                # update status
                Response3.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(Response3.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(Response3.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if Response3.status == STARTED and not waitOnFlip:
                theseKeys = Response3.getKeys(keyList=['1','2','3','4'], ignoreKeys=["escape"], waitRelease=False)
                _Response3_allKeys.extend(theseKeys)
                if len(_Response3_allKeys):
                    Response3.keys = _Response3_allKeys[-1].name  # just the last key pressed
                    Response3.rt = _Response3_allKeys[-1].rt
                    Response3.duration = _Response3_allKeys[-1].duration
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
            for thisComponent in TrainingGroup3Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "TrainingGroup3" ---
        for thisComponent in TrainingGroup3Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('TrainingGroup3.stopped', globalClock.getTime(format='float'))
        # Run 'End Routine' code from CodeFeedback3
        if Response3.keys:
            response_key = Response3.keys[0]  # Get the key as a string
            correct_speaker = CorrectAnswer  # This should be a string like 'Speaker1'
            if response_key == correct_speaker[-1]:  # Compare only the last character of the string, e.g., '1' for 'Speaker1'
                feedback_message3 = "Correct!"
            else:
                feedback_message3 = f"Incorrect. The correct answer was: {correct_speaker}"
        else:
            feedback_message3 = "No response made."
        Sound3.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if Response3.keys in ['', [], None]:  # No response was made
            Response3.keys = None
        TrainingLoopGroup3.addData('Response3.keys',Response3.keys)
        if Response3.keys != None:  # we had a response
            TrainingLoopGroup3.addData('Response3.rt', Response3.rt)
            TrainingLoopGroup3.addData('Response3.duration', Response3.duration)
        # the Routine "TrainingGroup3" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "FeedbackRoutine3" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('FeedbackRoutine3.started', globalClock.getTime(format='float'))
        FeedbackText3.setText(feedback_message)
        # Run 'Begin Routine' code from CodeFeedbackDisplay3
        FeedbackText3.setText(feedback_message3)
        # keep track of which components have finished
        FeedbackRoutine3Components = [FeedbackText3]
        for thisComponent in FeedbackRoutine3Components:
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
        
        # --- Run Routine "FeedbackRoutine3" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 2.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *FeedbackText3* updates
            
            # if FeedbackText3 is starting this frame...
            if FeedbackText3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                FeedbackText3.frameNStart = frameN  # exact frame index
                FeedbackText3.tStart = t  # local t and not account for scr refresh
                FeedbackText3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(FeedbackText3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'FeedbackText3.started')
                # update status
                FeedbackText3.status = STARTED
                FeedbackText3.setAutoDraw(True)
            
            # if FeedbackText3 is active this frame...
            if FeedbackText3.status == STARTED:
                # update params
                pass
            
            # if FeedbackText3 is stopping this frame...
            if FeedbackText3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > FeedbackText3.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    FeedbackText3.tStop = t  # not accounting for scr refresh
                    FeedbackText3.tStopRefresh = tThisFlipGlobal  # on global time
                    FeedbackText3.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'FeedbackText3.stopped')
                    # update status
                    FeedbackText3.status = FINISHED
                    FeedbackText3.setAutoDraw(False)
            
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
            for thisComponent in FeedbackRoutine3Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "FeedbackRoutine3" ---
        for thisComponent in FeedbackRoutine3Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('FeedbackRoutine3.stopped', globalClock.getTime(format='float'))
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-2.000000)
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1 if group == 3 else 0  repeats of 'TrainingLoopGroup3'
    
    
    # set up handler to look after randomisation of conditions etc
    TestingLoopGroup1 = data.TrialHandler(nReps=1 if group == 1 else 0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('/Users/ohtalab2/Desktop/Experiment Folder/Monolingual Persian- Testing Phase.xlsx'),
        seed=None, name='TestingLoopGroup1')
    thisExp.addLoop(TestingLoopGroup1)  # add the loop to the experiment
    thisTestingLoopGroup1 = TestingLoopGroup1.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTestingLoopGroup1.rgb)
    if thisTestingLoopGroup1 != None:
        for paramName in thisTestingLoopGroup1:
            globals()[paramName] = thisTestingLoopGroup1[paramName]
    
    for thisTestingLoopGroup1 in TestingLoopGroup1:
        currentLoop = TestingLoopGroup1
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTestingLoopGroup1.rgb)
        if thisTestingLoopGroup1 != None:
            for paramName in thisTestingLoopGroup1:
                globals()[paramName] = thisTestingLoopGroup1[paramName]
        
        # --- Prepare to start Routine "TestingGroup1Routine" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('TestingGroup1Routine.started', globalClock.getTime(format='float'))
        TestInstructions1.setText('Please listen to the speaker and select the correct number.\nلطفا به جملات گوش دهید و شماره گوینده مدنظر را انتخاب کنید.')
        SpeakerPicture1.setImage(SpeakerImage1)
        image_12.setImage(SpeakerImage2)
        image_13.setImage(SpeakerImage3)
        image_14.setImage(SpeakerImage4)
        Sound1.setSound(TestingSound, hamming=True)
        Sound1.setVolume(1.0, log=False)
        Sound1.seek(0)
        Response1.keys = []
        Response1.rt = []
        _Response1_allKeys = []
        # keep track of which components have finished
        TestingGroup1RoutineComponents = [TestInstructions1, SpeakerPicture1, image_12, image_13, image_14, Sound1, Response1]
        for thisComponent in TestingGroup1RoutineComponents:
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
        
        # --- Run Routine "TestingGroup1Routine" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *TestInstructions1* updates
            
            # if TestInstructions1 is starting this frame...
            if TestInstructions1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                TestInstructions1.frameNStart = frameN  # exact frame index
                TestInstructions1.tStart = t  # local t and not account for scr refresh
                TestInstructions1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(TestInstructions1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'TestInstructions1.started')
                # update status
                TestInstructions1.status = STARTED
                TestInstructions1.setAutoDraw(True)
            
            # if TestInstructions1 is active this frame...
            if TestInstructions1.status == STARTED:
                # update params
                pass
            
            # if TestInstructions1 is stopping this frame...
            if TestInstructions1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > TestInstructions1.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    TestInstructions1.tStop = t  # not accounting for scr refresh
                    TestInstructions1.tStopRefresh = tThisFlipGlobal  # on global time
                    TestInstructions1.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'TestInstructions1.stopped')
                    # update status
                    TestInstructions1.status = FINISHED
                    TestInstructions1.setAutoDraw(False)
            
            # *SpeakerPicture1* updates
            
            # if SpeakerPicture1 is starting this frame...
            if SpeakerPicture1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                SpeakerPicture1.frameNStart = frameN  # exact frame index
                SpeakerPicture1.tStart = t  # local t and not account for scr refresh
                SpeakerPicture1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(SpeakerPicture1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'SpeakerPicture1.started')
                # update status
                SpeakerPicture1.status = STARTED
                SpeakerPicture1.setAutoDraw(True)
            
            # if SpeakerPicture1 is active this frame...
            if SpeakerPicture1.status == STARTED:
                # update params
                pass
            
            # *image_12* updates
            
            # if image_12 is starting this frame...
            if image_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_12.frameNStart = frameN  # exact frame index
                image_12.tStart = t  # local t and not account for scr refresh
                image_12.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_12, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_12.started')
                # update status
                image_12.status = STARTED
                image_12.setAutoDraw(True)
            
            # if image_12 is active this frame...
            if image_12.status == STARTED:
                # update params
                pass
            
            # *image_13* updates
            
            # if image_13 is starting this frame...
            if image_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_13.frameNStart = frameN  # exact frame index
                image_13.tStart = t  # local t and not account for scr refresh
                image_13.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_13, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_13.started')
                # update status
                image_13.status = STARTED
                image_13.setAutoDraw(True)
            
            # if image_13 is active this frame...
            if image_13.status == STARTED:
                # update params
                pass
            
            # *image_14* updates
            
            # if image_14 is starting this frame...
            if image_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_14.frameNStart = frameN  # exact frame index
                image_14.tStart = t  # local t and not account for scr refresh
                image_14.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_14, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_14.started')
                # update status
                image_14.status = STARTED
                image_14.setAutoDraw(True)
            
            # if image_14 is active this frame...
            if image_14.status == STARTED:
                # update params
                pass
            
            # if Sound1 is starting this frame...
            if Sound1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Sound1.frameNStart = frameN  # exact frame index
                Sound1.tStart = t  # local t and not account for scr refresh
                Sound1.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('Sound1.started', tThisFlipGlobal)
                # update status
                Sound1.status = STARTED
                Sound1.play(when=win)  # sync with win flip
            # update Sound1 status according to whether it's playing
            if Sound1.isPlaying:
                Sound1.status = STARTED
            elif Sound1.isFinished:
                Sound1.status = FINISHED
            
            # *Response1* updates
            waitOnFlip = False
            
            # if Response1 is starting this frame...
            if Response1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Response1.frameNStart = frameN  # exact frame index
                Response1.tStart = t  # local t and not account for scr refresh
                Response1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Response1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Response1.started')
                # update status
                Response1.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(Response1.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(Response1.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if Response1.status == STARTED and not waitOnFlip:
                theseKeys = Response1.getKeys(keyList=['1','2','3','4'], ignoreKeys=["escape"], waitRelease=False)
                _Response1_allKeys.extend(theseKeys)
                if len(_Response1_allKeys):
                    Response1.keys = _Response1_allKeys[-1].name  # just the last key pressed
                    Response1.rt = _Response1_allKeys[-1].rt
                    Response1.duration = _Response1_allKeys[-1].duration
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
            for thisComponent in TestingGroup1RoutineComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "TestingGroup1Routine" ---
        for thisComponent in TestingGroup1RoutineComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('TestingGroup1Routine.stopped', globalClock.getTime(format='float'))
        Sound1.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if Response1.keys in ['', [], None]:  # No response was made
            Response1.keys = None
        TestingLoopGroup1.addData('Response1.keys',Response1.keys)
        if Response1.keys != None:  # we had a response
            TestingLoopGroup1.addData('Response1.rt', Response1.rt)
            TestingLoopGroup1.addData('Response1.duration', Response1.duration)
        # the Routine "TestingGroup1Routine" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1 if group == 1 else 0 repeats of 'TestingLoopGroup1'
    
    
    # set up handler to look after randomisation of conditions etc
    TestingLoopGroup2 = data.TrialHandler(nReps=1 if group == 2 else 0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('Persian Trained- Test Phase.xlsx'),
        seed=None, name='TestingLoopGroup2')
    thisExp.addLoop(TestingLoopGroup2)  # add the loop to the experiment
    thisTestingLoopGroup2 = TestingLoopGroup2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTestingLoopGroup2.rgb)
    if thisTestingLoopGroup2 != None:
        for paramName in thisTestingLoopGroup2:
            globals()[paramName] = thisTestingLoopGroup2[paramName]
    
    for thisTestingLoopGroup2 in TestingLoopGroup2:
        currentLoop = TestingLoopGroup2
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTestingLoopGroup2.rgb)
        if thisTestingLoopGroup2 != None:
            for paramName in thisTestingLoopGroup2:
                globals()[paramName] = thisTestingLoopGroup2[paramName]
        
        # --- Prepare to start Routine "TestingGroup2Routine" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('TestingGroup2Routine.started', globalClock.getTime(format='float'))
        TestInstructions2.setText('Please listen to the speaker and select the correct number.\nلطفا به جملات گوش دهید و شماره گوینده مدنظر را انتخاب کنید.')
        SpeakerPic2.setImage(SpeakerPhoto)
        Sound_2.setSound(TestingSound, hamming=True)
        Sound_2.setVolume(1.0, log=False)
        Sound_2.seek(0)
        Response_2.keys = []
        Response_2.rt = []
        _Response_2_allKeys = []
        # keep track of which components have finished
        TestingGroup2RoutineComponents = [TestInstructions2, SpeakerPic2, Sound_2, Response_2]
        for thisComponent in TestingGroup2RoutineComponents:
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
        
        # --- Run Routine "TestingGroup2Routine" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *TestInstructions2* updates
            
            # if TestInstructions2 is starting this frame...
            if TestInstructions2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                TestInstructions2.frameNStart = frameN  # exact frame index
                TestInstructions2.tStart = t  # local t and not account for scr refresh
                TestInstructions2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(TestInstructions2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'TestInstructions2.started')
                # update status
                TestInstructions2.status = STARTED
                TestInstructions2.setAutoDraw(True)
            
            # if TestInstructions2 is active this frame...
            if TestInstructions2.status == STARTED:
                # update params
                pass
            
            # if TestInstructions2 is stopping this frame...
            if TestInstructions2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > TestInstructions2.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    TestInstructions2.tStop = t  # not accounting for scr refresh
                    TestInstructions2.tStopRefresh = tThisFlipGlobal  # on global time
                    TestInstructions2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'TestInstructions2.stopped')
                    # update status
                    TestInstructions2.status = FINISHED
                    TestInstructions2.setAutoDraw(False)
            
            # *SpeakerPic2* updates
            
            # if SpeakerPic2 is starting this frame...
            if SpeakerPic2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                SpeakerPic2.frameNStart = frameN  # exact frame index
                SpeakerPic2.tStart = t  # local t and not account for scr refresh
                SpeakerPic2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(SpeakerPic2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'SpeakerPic2.started')
                # update status
                SpeakerPic2.status = STARTED
                SpeakerPic2.setAutoDraw(True)
            
            # if SpeakerPic2 is active this frame...
            if SpeakerPic2.status == STARTED:
                # update params
                pass
            
            # if Sound_2 is starting this frame...
            if Sound_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Sound_2.frameNStart = frameN  # exact frame index
                Sound_2.tStart = t  # local t and not account for scr refresh
                Sound_2.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('Sound_2.started', tThisFlipGlobal)
                # update status
                Sound_2.status = STARTED
                Sound_2.play(when=win)  # sync with win flip
            # update Sound_2 status according to whether it's playing
            if Sound_2.isPlaying:
                Sound_2.status = STARTED
            elif Sound_2.isFinished:
                Sound_2.status = FINISHED
            
            # *Response_2* updates
            waitOnFlip = False
            
            # if Response_2 is starting this frame...
            if Response_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Response_2.frameNStart = frameN  # exact frame index
                Response_2.tStart = t  # local t and not account for scr refresh
                Response_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Response_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Response_2.started')
                # update status
                Response_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(Response_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(Response_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if Response_2.status == STARTED and not waitOnFlip:
                theseKeys = Response_2.getKeys(keyList=['1','2','3','4'], ignoreKeys=["escape"], waitRelease=False)
                _Response_2_allKeys.extend(theseKeys)
                if len(_Response_2_allKeys):
                    Response_2.keys = _Response_2_allKeys[-1].name  # just the last key pressed
                    Response_2.rt = _Response_2_allKeys[-1].rt
                    Response_2.duration = _Response_2_allKeys[-1].duration
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
            for thisComponent in TestingGroup2RoutineComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "TestingGroup2Routine" ---
        for thisComponent in TestingGroup2RoutineComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('TestingGroup2Routine.stopped', globalClock.getTime(format='float'))
        Sound_2.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if Response_2.keys in ['', [], None]:  # No response was made
            Response_2.keys = None
        TestingLoopGroup2.addData('Response_2.keys',Response_2.keys)
        if Response_2.keys != None:  # we had a response
            TestingLoopGroup2.addData('Response_2.rt', Response_2.rt)
            TestingLoopGroup2.addData('Response_2.duration', Response_2.duration)
        # the Routine "TestingGroup2Routine" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1 if group == 2 else 0 repeats of 'TestingLoopGroup2'
    
    
    # set up handler to look after randomisation of conditions etc
    TestingLoopGroup3 = data.TrialHandler(nReps=1 if group == 3 else 0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('English Trained- Test Phase.xlsx'),
        seed=None, name='TestingLoopGroup3')
    thisExp.addLoop(TestingLoopGroup3)  # add the loop to the experiment
    thisTestingLoopGroup3 = TestingLoopGroup3.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTestingLoopGroup3.rgb)
    if thisTestingLoopGroup3 != None:
        for paramName in thisTestingLoopGroup3:
            globals()[paramName] = thisTestingLoopGroup3[paramName]
    
    for thisTestingLoopGroup3 in TestingLoopGroup3:
        currentLoop = TestingLoopGroup3
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTestingLoopGroup3.rgb)
        if thisTestingLoopGroup3 != None:
            for paramName in thisTestingLoopGroup3:
                globals()[paramName] = thisTestingLoopGroup3[paramName]
        
        # --- Prepare to start Routine "TestingGroup3Routine" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('TestingGroup3Routine.started', globalClock.getTime(format='float'))
        TestInstructions3.setText('Please listen to the speaker and select the correct number.\nلطفا به جملات گوش دهید و شماره گوینده مدنظر را انتخاب کنید.')
        SpeakerPic_3.setImage(SpeakerPhoto)
        Sound_3.setSound(TestingSound, hamming=True)
        Sound_3.setVolume(1.0, log=False)
        Sound_3.seek(0)
        Response_3.keys = []
        Response_3.rt = []
        _Response_3_allKeys = []
        # keep track of which components have finished
        TestingGroup3RoutineComponents = [TestInstructions3, SpeakerPic_3, Sound_3, Response_3]
        for thisComponent in TestingGroup3RoutineComponents:
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
        
        # --- Run Routine "TestingGroup3Routine" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *TestInstructions3* updates
            
            # if TestInstructions3 is starting this frame...
            if TestInstructions3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                TestInstructions3.frameNStart = frameN  # exact frame index
                TestInstructions3.tStart = t  # local t and not account for scr refresh
                TestInstructions3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(TestInstructions3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'TestInstructions3.started')
                # update status
                TestInstructions3.status = STARTED
                TestInstructions3.setAutoDraw(True)
            
            # if TestInstructions3 is active this frame...
            if TestInstructions3.status == STARTED:
                # update params
                pass
            
            # if TestInstructions3 is stopping this frame...
            if TestInstructions3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > TestInstructions3.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    TestInstructions3.tStop = t  # not accounting for scr refresh
                    TestInstructions3.tStopRefresh = tThisFlipGlobal  # on global time
                    TestInstructions3.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'TestInstructions3.stopped')
                    # update status
                    TestInstructions3.status = FINISHED
                    TestInstructions3.setAutoDraw(False)
            
            # *SpeakerPic_3* updates
            
            # if SpeakerPic_3 is starting this frame...
            if SpeakerPic_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                SpeakerPic_3.frameNStart = frameN  # exact frame index
                SpeakerPic_3.tStart = t  # local t and not account for scr refresh
                SpeakerPic_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(SpeakerPic_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'SpeakerPic_3.started')
                # update status
                SpeakerPic_3.status = STARTED
                SpeakerPic_3.setAutoDraw(True)
            
            # if SpeakerPic_3 is active this frame...
            if SpeakerPic_3.status == STARTED:
                # update params
                pass
            
            # if Sound_3 is starting this frame...
            if Sound_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Sound_3.frameNStart = frameN  # exact frame index
                Sound_3.tStart = t  # local t and not account for scr refresh
                Sound_3.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('Sound_3.started', tThisFlipGlobal)
                # update status
                Sound_3.status = STARTED
                Sound_3.play(when=win)  # sync with win flip
            # update Sound_3 status according to whether it's playing
            if Sound_3.isPlaying:
                Sound_3.status = STARTED
            elif Sound_3.isFinished:
                Sound_3.status = FINISHED
            
            # *Response_3* updates
            waitOnFlip = False
            
            # if Response_3 is starting this frame...
            if Response_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Response_3.frameNStart = frameN  # exact frame index
                Response_3.tStart = t  # local t and not account for scr refresh
                Response_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Response_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Response_3.started')
                # update status
                Response_3.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(Response_3.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(Response_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if Response_3.status == STARTED and not waitOnFlip:
                theseKeys = Response_3.getKeys(keyList=['1','2','3','4'], ignoreKeys=["escape"], waitRelease=False)
                _Response_3_allKeys.extend(theseKeys)
                if len(_Response_3_allKeys):
                    Response_3.keys = _Response_3_allKeys[-1].name  # just the last key pressed
                    Response_3.rt = _Response_3_allKeys[-1].rt
                    Response_3.duration = _Response_3_allKeys[-1].duration
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
            for thisComponent in TestingGroup3RoutineComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "TestingGroup3Routine" ---
        for thisComponent in TestingGroup3RoutineComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('TestingGroup3Routine.stopped', globalClock.getTime(format='float'))
        Sound_3.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if Response_3.keys in ['', [], None]:  # No response was made
            Response_3.keys = None
        TestingLoopGroup3.addData('Response_3.keys',Response_3.keys)
        if Response_3.keys != None:  # we had a response
            TestingLoopGroup3.addData('Response_3.rt', Response_3.rt)
            TestingLoopGroup3.addData('Response_3.duration', Response_3.duration)
        # the Routine "TestingGroup3Routine" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1 if group == 3 else 0 repeats of 'TestingLoopGroup3'
    
    
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
