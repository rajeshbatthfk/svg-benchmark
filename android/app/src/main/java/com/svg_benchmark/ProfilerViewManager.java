package com.svg_benchmark;

import android.util.Log;
import android.view.ViewTreeObserver;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
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
        Log.d(TAG, "createViewInstance() called with: reactContext");
        return new ProfilerView(reactContext);
    }


}
