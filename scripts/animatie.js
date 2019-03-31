var rocket = document.getElementById('rocket');
TweenMax.to(rocket, 1, {rotation:20, ease:Linear.easeNone, repeat:-1})

/*var tl = new TimelineMax();var bezierPath = [{ x: 5, y: 4 }, { x: -5, y: 8 }, { x: 5, y: 12 },{ x: -5, y: 16 }];
tl.add(TweenMax.set(rocket,{autoAlpha:0}));tl.add(TweenMax.to(rocket, 10, { bezier: {
            type: 'soft',
            values: bezierPath,
            smoothOrigin: true,
            timeResolution: 5,
            autoAlpha:1
          }, ease: Linear.easeNone, repeat:-1, autoAlpha:0}));

tl.to(rocket, 1, {autoAlpha:1, repeat:0, ease: Linear.easeNone}, 0);*/