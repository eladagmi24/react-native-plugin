package com.reactnativeau10tixsdk
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

import com.au10tix.sdk.core.Au10xCore
import com.au10tix.sdk.commons.Au10Error
import com.au10tix.sdk.core.OnPrepareCallback

class Au10tixsdkModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "Au10tixsdk"
    }

  @ReactMethod
  private fun initializeSDK(token: String, promise: Promise) {
    if(token == null) {
      promise.reject("400", "Token is null");
      return;
    }
    Au10xCore.prepare(reactApplicationContext, token, object: OnPrepareCallback {
      override fun onPrepareError(error: Au10Error) {
        promise.reject("400", error.message);
      }
      override fun onPrepared(sessionID: String) {
        promise.resolve(sessionID);
      }
    });

  }

    }
