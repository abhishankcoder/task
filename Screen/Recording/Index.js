import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
// import TrackPlayer from 'react-native-track-player';

let uriPath = '';
const Recoding = ({navigation}) => {
  // useEffect(() => {
  // getPermission()
  // }, [])

  const audioRecorderPlayer = new AudioRecorderPlayer();
  let f_name = new Date().getTime() + 'recording.mp4';
  const dirs = RNFetchBlob.fs.dirs;
  const recordDir = '${RNFetchBlob.fs.dirs.DownloadDir}/recording';
  if (Platform.OS === 'android') {
    const exists = RNFetchBlob.fs.exists(recordDir);

    if (!exists) {
      RNFetchBlob.fs.mkdir(recordDir);
    }
  }

  const myDir = RNFS.ExternalStorageDirectoryPath;

  const path = Platform.select({
    ios: 'recFile' + '${new Date().getTime()}' + '.m4a',

    android: '${dirs.CacheDir}/${f_name}',
  });
  const [state, setState] = useState({
    recordSecs: '',
    recordTime: '',
  });

  const getPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Permissions granted');
          onStartRecord();
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
  };

  const onStartRecord = async () => {
    // const path = ’hello.m4a’;

    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    console.log('audioSet', audioSet);
    // if (Platform.OS == ’android’) {
    const uri = await audioRecorderPlayer.startRecorder(path);
    audioRecorderPlayer.addRecordBackListener(e => {
      setState(prevState => ({
        ...prevState,
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      }));
    });
    console.log('uri: ${uri}');
    uriPath = '${uri}';

    console.log('real time data>>>>', state.recordTime);
    // if (uri === ’Already recording’) {
    // // ShowToast(Strings.Already_recording);
    // console.log(’already recording’);
    // } else {
    // // ShowToast(Strings.Audio_Started);
    // console.log(’already started’);
    // }
    // } else {
    // const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    // audioRecorderPlayer.removeRecordBackListener(e => {
    // setState(prevState => ({
    // ...prevState,
    // recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
    // }));
    // });
    // uriPath = ‘${uri}‘;
    // }
    // c = uri
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener(e => {
      setState(prevState => ({
        ...prevState,
        recordTime: 0,
      }));
    });

    console.log(result, 'main data');
    console.log('data of ,,,,', state.recordTime);
  };

  const onStartPlay = async e => {
    console.log('onStartPlay');
    const path = Platform.select({
      ios: 'recFile’ + ‘${new Date().getTime()}' + '.m4a',

      android: '${dirs.CacheDir}/${f_name}',
    });
    const msg = await audioRecorderPlayer.startPlayer(path);
    audioRecorderPlayer.setVolume(1.0);
    console.log(msg, 'djlkdjlf');
    audioRecorderPlayer.addPlayBackListener(e => {
      if (e.currentPosition === e.duration) {
        console.log('finished');
        audioRecorderPlayer.stopPlayer();
      }
      setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };

  // const start = async () => {
  // // Set up the player
  // await TrackPlayer.setupPlayer();

  // // Add a track to the queue
  // await TrackPlayer.add({
  // id: ’trackId’,
  // url: require(),
  // title: ’Track Title’,
  // artist: ’Track Artist’,
  // artwork: require(’track.png’)
  // });

  // // Start playing it
  // await TrackPlayer.play();
  // };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: '’center'}}>
      <Text>kdjlfkdj</Text>
      {/* <TouchableOpacity onPress={getPermission}>
    <View>
    <Image source={require(’../../../assets/mic.png’)} />
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={onStopRecord}>
    <View style={{margin: 20}}>
    <Image source={require(’../../../assets/stop.png’)} />
    </View>
    </TouchableOpacity>
     */}
      <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
        {/* {state.recordTime} */}
      </Text>
      {/* <TouchableOpacity onPress={onStartPlay}>
    <Text>PLAY</Text>
    </TouchableOpacity> */}
    </View>
  );
};

export default Recoding;
