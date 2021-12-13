package com.svg_benchmark;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.util.Log;
import android.widget.FrameLayout;

import androidx.core.os.TraceCompat;

public class ProfilerView extends FrameLayout {
    public static final String PROFILER_VIEW = "ProfilerView";
    private static final String TAG = PROFILER_VIEW;
    private final long createdTime = System.currentTimeMillis();
    private String iconName = "NO-NAME";
    private String mode = "NO-MODE";

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

   /* @Override
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
    }*/

    @Override
    protected void dispatchDraw(Canvas canvas) {
        long start = System.currentTimeMillis();
        super.dispatchDraw(canvas);
        Log.i(TAG, String.format("%S::draw: %s %dms", this.mode, this.iconName, (System.currentTimeMillis() - start)));

    }

    public void setIconName(String iconName) {
        this.iconName = iconName;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }
}
