---
title: 基本初等函数导数推导
published: 2026-05-03T15:44:00.000+08:00
updated: ""
description: |-2
   基本函数求导
  原文链接https://zhuanlan.zhihu.com/p/89843248
cover: https://picx.zhimg.com/70/v2-ff8230bf0d67462415fecf211b4b6dac_1440w.avis?source=172ae18b&biz_tag=Post
tags:
  - math
draft: false
---
基本初等函数导数推导

![](https://picx.zhimg.com/70/v2-ff8230bf0d67462415fecf211b4b6dac_1440w.image?source=172ae18b&biz_tag=Post)

定义1：设函数 $f(x)$ 在 $x_{0}$ 附近有定义，对应自变量的改变量 $\Delta x$ ，有函数的改变量 $\Delta y=f(x_{0}+\Delta x)-f(x_{0})$ ，若极限 $\underset{\Delta x \rightarrow 0}\lim\frac{\Delta y}{\Delta x}$ 存在，则称该极限为$f(x)$ 在 $x_{0}$的导数，记作 $f'(x_{0})$ 。




引理1（导数公式1）：常数函数的导数处处为零。

证明： 设 $f(x)=C$ 。

$f'(x)=\underset{\Delta x \rightarrow 0}\lim\frac{f(x+\Delta x)-f(x)}{\Delta x}$ $=\underset{\Delta x \rightarrow 0}\lim\frac{C-C}{\Delta x}= \underset{\Delta x \rightarrow 0}\lim\frac{0}{\Delta x}=0$ 

引理2：部分三角函数和差化积公式

$\sin\alpha-\sin\beta$ $=\sin(\frac{\alpha+\beta}{2}+\frac{\alpha-\beta}{2})-\sin (\frac{\alpha+\beta}{2}-\frac{\alpha-\beta}{2})$ 

$=(\sin(\frac{\alpha+\beta}{2})\cos(\frac{\alpha-\beta}{2})+\cos(\frac{\alpha+\beta}{2})\sin(\frac{\alpha-\beta}{2}))-$ 

$(\sin(\frac{\alpha+\beta}{2})\cos(\frac{\alpha-\beta}{2})-\cos(\frac{\alpha+\beta}{2})\sin(\frac{\alpha-\beta}{2}))$ 

$=2\cos(\frac{\alpha+\beta}{2})\sin(\frac{\alpha-\beta}{2})$ 

$\cos\alpha-\cos\beta$ $=\cos(\frac{\alpha+\beta}{2}+\frac{\alpha-\beta}{2})-\cos(\frac{\alpha+\beta}{2}-\frac{\alpha-\beta}{2})$ 

$=(\cos(\frac{\alpha+\beta}{2})\cos(\frac{\alpha-\beta}{2})-\sin(\frac{\alpha+\beta}{2})\sin(\frac{\alpha-\beta}{2}))-$ 

$(\cos(\frac{\alpha+\beta}{2})\cos(\frac{\alpha-\beta}{2})+\sin(\frac{\alpha+\beta}{2})\sin(\frac{\alpha-\beta}{2}))$ 

$=-2\sin(\frac{\alpha+\beta}{2})\sin(\frac{\alpha-\beta}{2})$ 

引理3：部分等价无穷小

（1） $\sin x\sim x(x\rightarrow 0)$ 

（2） $e^{x}-1\sim x(x\rightarrow0)$ 

（3） $\ln(1+x)\sim x(x\rightarrow0)$ 

（1）的证明略去，（2）（3）的证明见以下文章：

[null](https://zhuanlan.zhihu.com/p/91881261)

引理4：导数的四则运算，设 $u(x)$ 和 $v(x)$ 可导。

（1）$[u(x)\pm v(x)]'=u'(x)\pm v'(x)$ 

（2）$[cu(x)]'=cu'(x)$ 

（3）$[u(x)v(x)]'=u'(x)v(x)+u(x)v'(x)$ 

（4） $[\frac{u(x)}{v(x)}]'=\frac{u'(x)v(x)-u(x)v'(x)}{v^{2}(x)}$ 

（5） $[\frac{1}{v(x)}]'=\frac{-v'(x)}{v^{2}(x)}$ 

证明：（1）（2）（3）请读者自行验证，下面我们证明在后文主要用到的（4）（5）

$[\frac{u(x)}{v(x)}]'=\underset{\Delta x \rightarrow 0}\lim \frac{\frac{u(x+\Delta x)}{v(x+\Delta x)}-\frac{u(x)}{v(x)}}{\Delta x}$ $=\underset{\Delta x \rightarrow 0}\lim\frac{u(x+\Delta x)v(x)-u(x)v(x+\Delta x)}{\Delta xv(x+\Delta x)v(x)}$ 

$=\underset{\Delta x \rightarrow 0}\lim\frac{u(x+\Delta x)v(x)-u(x)v(x)}{\Delta xv(x+\Delta x)v(x)}-\underset{\Delta x \rightarrow 0}\lim \frac{v(x+\Delta x)u(x)-u(x)v(x)}{\Delta xv(x+\Delta x)v(x)}$ 

$=\underset{\Delta x \rightarrow 0}\lim\frac{u(x+\Delta x)-u(x)}{\Delta x}\underset{\Delta x \rightarrow 0}\lim\frac{v(x)}{v(x+\Delta x)v(x)}$ 

$-\underset{\Delta x \rightarrow 0}\lim\frac{v(x+\Delta x)-v(x)}{\Delta x}\underset{\Delta x \rightarrow 0}\lim\frac{u(x)}{v(x+\Delta x)v(x)}$ 

$=u'(x)\frac{v(x)}{v^{2}(x)}-v'(x)\frac{u(x)}{v^{2}(x)}$ 

$=\frac{u'(x)v(x)-u(x)v'(x)}{v^{2}(x)}$ 

直接令 $u(x)=1$ 即可得（5）

引理5：复合函数的导数，设 $f(x)$ 和 $g(x)$ 可导。

$f(g(x))'=f'(g(x))g'(x)$ 

证明：

$f(g(x))'=\lim_{\Delta x \rightarrow 0}{\frac{f(g(x+\Delta x))-f(g(x))}{\Delta x}}$ 

$=\underset{\Delta x \rightarrow 0}\lim\frac{f(g(x+\Delta x))-f(g(x))}{g(x+\Delta x)-g(x)}\underset{\Delta x \rightarrow 0}\lim \frac{g(x+\Delta x)-g(x)}{\Delta x}$ 

$=f'(g(x))g'(x)$ 

引理6：设 $y=f(x)$ 在区间 $[a,b]$ 上有反函数 $x=g(y)$ ，且 $f(x)$ 在 $[a,b]$ 上的一点 $x_{0}$ 可导，且 $f(x_{0})=y_{0}$。则若 $f(x_{0})'\ne0$ ， $g(y_{0})'=\frac{1}{f(x_{0})'}$ ，若$f(x_{0})'=0$ ， $g(y_{0})'=\infty$。

证明：记 $\Delta y=f(x_{0}+\Delta x)-f(x_{0})$ 

$g(y_{0})'=\underset{\Delta y\rightarrow 0}\lim\frac{g(y_{0}+\Delta y)-g(y_{0})}{\Delta y}=\underset{\Delta y\rightarrow 0}\lim \frac{g(y_{0}+\Delta y)-g(y_{0})}{y_{0}+\Delta y-y_{0}}$

$=\underset{\Delta x \rightarrow 0}\lim\frac{x_{0}+\Delta x-x_{0}}{f(x_{0}+\Delta x)-f(x_{0})}=\frac{1}{\underset{\Delta x \rightarrow 0}\lim{\frac{f(x_{0}+\Delta x)-f(x_{0})}{\Delta x}}}$

$=\frac{1}{f(x_{0})'}$ 




导数公式2： $(x^{\mu})'=\mu x^{\mu-1}$

证法一：设 $f(x)=x^{\mu}$ 

$f(x)'=\underset{\Delta x \rightarrow 0}\lim\frac{(x+\Delta x)^{\mu}-x^{\mu}}{\Delta x}=x^{\mu}\underset{\Delta x \rightarrow 0}\lim\frac{(1+\frac{\Delta x}{x})^{\mu}-1}{\Delta x}$ $=x^{\mu}\underset{\Delta x \rightarrow 0}\lim\frac{e^{\mu \ln(1+\frac{\Delta x}{x})}-1}{\Delta x}=x^{\mu}\underset{\Delta x \rightarrow 0}\lim\frac{\mu \ln(1+\frac{\Delta x}{x})}{\Delta x}$ 

$=\mu x^{\mu-1}\underset{\Delta x \rightarrow 0}\lim \frac{\ln(1+\frac{\Delta x}{x})}{\ \frac{\Delta x}{x}}$ 

$=\mu x^{\mu-1}$ 

证法二：设 $f(x)=x^{\mu}=e^{\mu \ln x}$

根据复合函数求导法则： $f(x)'=e^{\mu \ln x}(\mu \ln x)'=x^{\mu}\frac{\mu}{x}=\mu x^{\mu-1}$ 

导数公式3：  $(\sin x)'=\cos x$

证明：设 $f(x)=\sin x$

$f(x)'=\underset{\Delta x \rightarrow 0}\lim\frac{\sin(x+\Delta x)-\sin(x)}{\Delta x}$ $=\underset{\Delta x \rightarrow 0}\lim\frac{2\cos(\frac{2x+\Delta x}{2})\sin(\frac{\Delta x}{2})}{\Delta x}$ 

$=\underset{\Delta x \rightarrow 0}\lim\cos(\frac{2x+\Delta x}{2})=\cos x$ 

导数公式4： $(\cos x)'=-\sin x$

证明：设 $f(x)=\cos x$ 

$f(x)'=\underset{\Delta x \rightarrow 0}\lim\frac{\cos(x+\Delta x)-\cos(x)}{\Delta x}$ $=\underset{\Delta x \rightarrow 0}\lim\frac{-2\sin(\frac{2x+\Delta x}{2})\sin(\frac{\Delta x}{2})}{\Delta x}$ 

$=\underset{\Delta x \rightarrow 0}\lim-\sin(\frac{2x+\Delta x}{2})=-\sin x$ 

导数公式5： $(\tan x)'=\sec^{2}x$

证法一：设 $f(x)=\tan x$ 

$f(x)'=\underset{\Delta x \rightarrow 0}\lim\frac{\tan(x+\Delta x)-\tan(x)}{\Delta x}$ $=\underset{\Delta x \rightarrow 0}\lim\frac{\sin(x+\Delta x)\cos x-\sin x\cos(x+\Delta x)}{\Delta x\cos(x)\cos(x+\Delta x)}$ 

$=\underset{\Delta x \rightarrow 0}\lim\frac{\sin(\Delta x)}{\Delta x\cos(x)\cos(x+\Delta x)}$ $=\underset{\Delta x \rightarrow 0}\lim\frac{1}{\cos(x)\cos(x+\Delta x)}$ 

$=\frac{1}{\cos^{2}x}$ $=\sec^{2}x$ 

证法二：设 $f(x)=\tan x=\frac{\sin x}{\cos x}$ 

$f(x)'=\frac{(\sin x)'\cos x-(\cos x)'\sin x}{\cos^{2}x}$ $=\frac{\cos^{2}x+\sin^{2}x}{\cos^{2}x}$ 

$=\frac{1}{\cos^{2}x}$ $=\sec^{2}x$ 

导数公式6： $(\cot x)'=-\csc^{2}x$

证法一：设 $f(x)=\cot x$ 

$f(x)'=\underset{\Delta x \rightarrow 0}\lim\frac{\cot(x+\Delta x)-\cot(x)}{\Delta x}$ $=\underset{\Delta x \rightarrow 0}\lim\frac{\cos(x+\Delta x)\sin x-\cos x\sin(x+\Delta x)}{\Delta x\sin(x)\sin(x+\Delta x)}$ 

$=\underset{\Delta x \rightarrow 0}\lim\frac{-\sin(\Delta x)}{\Delta x\sin(x)\sin(x+\Delta x)}$ $=\underset{\Delta x \rightarrow 0}\lim\frac{-1}{\sin(x)\sin(x+\Delta x)}$ 

$=-\frac{1}{\sin^{2}x}$ $=-\csc^{2}x$ 

证法二：设 $f(x)=\cot x=\frac{\cos x}{\sin x}$ 

$f(x)'=\frac{(\cos x)'\sin x-(\sin x)'\cos x}{\sin^{2}x}$ $=\frac{-sin^{2}x-cos^{2}x}{sin^{2}x}$ 

$=-\frac{1}{\sin^{2}x}$ = $-\csc^{2}x$ 

导数公式7： $(\sec x)'=\tan x\sec x$ 

证法一：设 $f(x)=\sec x$ 

$f(x)'=\underset{\Delta x \rightarrow 0}\lim\frac{\sec(x+\Delta x)-\sec(x)}{\Delta x}$ 

$=\underset{\Delta x \rightarrow 0}\lim\frac{\cos(x)-\cos(x+\Delta x)}{\Delta x\cos(x+\Delta x)\cos(x)}$ 

$=\underset{\Delta x \rightarrow 0}\lim\frac{2\sin(\frac{2x+\Delta x}{2})\sin(\frac{\Delta x}{2})}{\Delta x\cos(x+\Delta x)\cos(x)}$

$=\underset{\Delta x \rightarrow 0}\lim\frac{\sin(\frac{2x+\Delta x}{2})}{\cos(x+\Delta x)\cos(x)}$

$=\frac{\sin x}{\cos^{2}x}=\tan x\sec x$ 

证法二：设 $f(x)=\sec x=\frac{1}{\cos x}$ 

$f(x)'=\frac{-(\cos x)'}{\cos^{2}x}=\frac{\sin x}{\cos^{2}x}=\tan x\sec x$ 

导数公式8： $(\csc x)'=-\cot x\csc x$ 

证明：设 $f(x)=\csc x$ 

$f(x)'=\underset{\Delta x \rightarrow 0}\lim\frac{\csc(x+\Delta x)-\csc(x)}{\Delta x}$ 

$=\underset{\Delta x \rightarrow 0}\lim\frac{\sin(x)-\sin(x+\Delta x)}{\Delta x\sin(x+\Delta x)\sin(x)}$ 

$=\underset{\Delta x \rightarrow 0}\lim\frac{-2\cos(\frac{2x+\Delta x}{2})\sin(\frac{\Delta x}{2})}{\Delta x\sin(x+\Delta x)\sin(x)}$

$=\underset{\Delta x \rightarrow 0}\lim\frac{-\cos(\frac{2x+\Delta x}{2})}{\sin(x+\Delta x)\sin(x)}$

$=\frac{-\cos x}{\sin^{2}x}=-\cot x\csc x$ 

证法二：设 $f(x)=\csc x=\frac{1}{\sin x}$ 

$f(x)'=\frac{-(\sin x)'}{\sin^{2}x}=\frac{-\cos x}{\sin^{2}x}=-\cot x\csc x$ 

导数公式9： $(a^{x})'=a^{x}\ln a$ 

证明：设 $f(x)=a^{x}$ 

$f(x)'=\underset{\Delta x \rightarrow 0}\lim\frac{a^{x+\Delta x}-a^{x}}{\Delta x}=a^{x}\underset{\Delta x \rightarrow 0}\lim\frac{a^{\Delta x}-1}{\Delta x}$ 

$=a^{x}\underset{\Delta x \rightarrow 0}\lim\frac{e^{\Delta x\ln a}-1}{\Delta x}=a^{x}\underset{\Delta x \rightarrow 0}\lim\frac{\Delta x\ln a}{\Delta x}$ 

$=a^{x}\ln a$ 

导数公式10： $(e^{x})'=e^{x}$ 

证明：在导数公式9中令 $a=e$ ，即证得。

导数公式11： $(\log_{a}^{x})'=\frac{1}{x\ln a}$ 

证明：设 $f(x)=\log_{a}^{x}$

$f(x)'=\underset{\Delta x \rightarrow 0}\lim\frac{\log_{a}^{x+\Delta x}-\log_{a}^{x}}{\Delta x}=\underset{\Delta x \rightarrow 0}\lim \frac{\log_{a}^{1+\frac{\Delta x}{x}}}{\Delta x}$ 

$=\underset{\Delta x \rightarrow 0}\lim\frac{\ln(1+\frac{\Delta x}{x})}{\Delta x\ln a}=\underset{\Delta x \rightarrow 0}\lim\frac{\frac{\Delta x}{x}}{\Delta x\ln a}$ 

$=\frac{1}{x\ln a}$ 

导数公式12： $(\ln x)'=\frac{1}{x}$ 

证明：在导数公式1中令 $a=e$ ，即证得。

导数公式13： $(\arcsin x)'=\frac{1}{\sqrt{1-x^{2}}}$ 

证明：设 $y=f(x)=\arcsin x$

$f(x)'=\frac{1}{\sin(y)'}=\frac{1}{\cos y}$ $=\frac{1}{\sqrt{1-\sin^{2}y}} =\frac{1}{\sqrt{1-x^{2}}}$ 

导数公式14： $(\arccos x)'=-\frac{1}{\sqrt{1-x^{2}}}$ 

证法一：设 $y=f(x)=\arccos x$

$f(x)'=\frac{1}{\cos(y)'}=-\frac{1}{\sin y}$ $=-\frac{1}{\sqrt{1-\cos^{2}y}}=-\frac{1}{\sqrt{1-x^{2}}}$ 

证法二：

设 $y=\arcsin x$，则 $x=\sin y(-\frac{π}{2}\leq y\leq\frac{π}{2})$ ，令 $z=\frac{\pi}{2}-y(0\leq z\leq\pi)$ ，所以有 $\cos z=\sin y=x$ ， 因为 $y,z$ 的取值范围与反三角函数的值域一致，所以有 $z=\arccos x$， $y=\arcsin x$，因此 $\arccos x=\frac{\pi}{2}-\arcsin x$ 。故 $(\arccos x)'=-(\arcsin x)'=-\frac{1}{\sqrt{1-x^{2}}}$ 。

注：公式16和18也可用类似方法完成证明，由于不太常用，具体证明请读者自行完成。

导数公式15： $(\arctan x)'=\frac{1}{1+x^{2}}$

证明：设 $y=f(x)=\arctan x$ 

$f(x)'=\frac{1}{\tan(y)'}=\cos^{2}y=\frac{\cos^{2}y}{\sin^{2}y+\cos^{2}y}$ 

$=\frac{1}{\tan^{2}y+1}=\frac{1}{1+x^{2}}$ 

导数公式16： $(arccot x)'=\frac{1}{1+x^{2}}$

证明：设 $y=f(x)=arccotx$ 

$f(x)'=\frac{1}{\cot(y)'}=-\sin^{2}y=-\frac{\sin^{2}y}{\sin^{2}y+\cos^{2}y}$ 

$=-\frac{1}{\cot^{2}y+1}=-\frac{1}{1+x^{2}}$ 

导数公式17： $(arcsecx)'=\frac{1}{x\sqrt{x^{2}-1}}$

证明：设 $y=f(x)=arcsecx$ 

$f(x)'=\frac{1}{\sec(y)'}=\frac{1}{\tan y\sec y}$ 

$=\frac{1}{\sec y\sqrt{\sec^{2}y-1}}=\frac{1}{x\sqrt{x^{2}-1}}$ 

导数公式18： $(arccscx)'=-\frac{1}{x\sqrt{x^{2}-1}}$

证明：设 $y=f(x)=arccscx$ 

$f(x)'=\frac{1}{\csc(y)'}=-\frac{1}{\cot y\csc y}$ 

$=-\frac{1}{\csc y\sqrt{\csc^{2}y-1}}=-\frac{1}{x\sqrt{x^{2}-1}}$ 
