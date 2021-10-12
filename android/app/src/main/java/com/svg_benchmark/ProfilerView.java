package com.svg_benchmark;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.ViewTreeObserver;
import android.widget.FrameLayout;

public class ProfilerView extends FrameLayout {
    public static final String PROFILER_VIEW = "ProfilerView";
    private static final String TAG = PROFILER_VIEW;
    private final long createdTime = System.currentTimeMillis();

    public ProfilerView(Context context) {
        super(context);
    }

    public ProfilerView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public ProfilerView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    public ProfilerView(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        Log.d(TAG, "ProfilerView created");
    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        long attachedTime = System.currentTimeMillis();
        Log.d(TAG, "onAttachedToWindow() called " + (attachedTime - this.createdTime));
        final ViewTreeObserver viewTreeObserver = this.getViewTreeObserver();
        viewTreeObserver.addOnPreDrawListener(new ViewTreeObserver.OnPreDrawListener() {
            @Override
            public boolean onPreDraw() {
                Log.d(TAG, "onPreDraw() called " + (System.currentTimeMillis() - attachedTime));
                viewTreeObserver.removeOnPreDrawListener(this);
                return true;
            }
        });
    }

    @Override
    protected void onDetachedFromWindow() {
        Log.d(TAG, "onDetachedFromWindow() called");
        super.onDetachedFromWindow();
    }

}
