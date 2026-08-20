// Import required polyfills first. This order is required.
import 'fast-text-encoding';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import { Buffer } from 'buffer';

global.Buffer = Buffer;

import 'expo-router/entry';
