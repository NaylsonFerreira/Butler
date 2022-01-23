#!/bin/bash

export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

echo "sdk.dir=$HOME/Android/Sdk" > ./android/local.properties

# Java 11
# sudo update-alternatives --config java
