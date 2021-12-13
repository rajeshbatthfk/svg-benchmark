package com.svg_benchmark;

import android.util.Log;
import android.view.ViewTreeObserver;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.view.ReactViewGroup;

import org.jetbrains.annotations.NotNull;


public class ProfilerViewManager extends ViewGroupManager<ProfilerView> {

    public static final String PROFILER_VIEW = "ProfilerView";
    private static final String TAG = PROFILER_VIEW;
    @NonNull
    @NotNull
    @Override
    public String getName() {
        return PROFILER_VIEW;
    }

    @NonNull
    @NotNull
    @Override
    protected ProfilerView createViewInstance(@NonNull @NotNull ThemedReactContext reactContext) {
        return new ProfilerView(reactContext);
    }

    @ReactProp(name = "name")
    public void setName(ProfilerView view, @Nullable String name) {
        view.setIconName(name);
    }
    @ReactProp(name = "mode")
    public void setMode(ProfilerView view, @Nullable String mode) {
        view.setMode(mode);
    }


}
