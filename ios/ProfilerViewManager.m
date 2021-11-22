//
//  ProfilerViewManager.m
//  svg_benchmark
//
//  Created by Sai Charan Teja Tanguturu on 22/11/21.
//

#import "svg_benchmark-Swift.h"
#import "ProfilerViewManager.h"

@implementation ProfilerViewManager

RCT_EXPORT_MODULE(ProfilerView)

- (UIView *)view {
  ProfilerView *profilerView = [[ProfilerView alloc] init];
  return profilerView;
}

@end
