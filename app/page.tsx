import Link from "next/link";
import { Play, UploadCloud, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-base-100 relative overflow-hidden flex items-center">
      {/* 1. Engineering Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Ambient Corner Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* LEFT COLUMN: Typography & CTAs */}
          <div className="flex-1 flex flex-col items-start text-left space-y-8">
            
            {/* Version Badge */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-base-200 border border-base-content/10 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-success"></span>
              <span className="text-xs font-semibold tracking-wide uppercase opacity-80">Cloudinary Engine v2.0 Live</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Publish media at <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                lightspeed.
              </span>
            </h1>

            <p className="text-lg lg:text-xl opacity-70 max-w-lg leading-relaxed">
              Drop your heavy 4K videos here. We instantly compress, format, and generate hover-previews for your entire audience using AI-driven transformations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Link href="/home" className="btn btn-primary btn-lg shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform">
                Open Dashboard <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/sign-in" className="btn btn-outline btn-lg hover:bg-base-content hover:text-base-100 transition-colors">
                Sign in to Upload
              </Link>
            </div>

            {/* Quick Feature Checklist */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-6 opacity-70 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>Zero-latency previews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>Smart 9:16 Cropping</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Floating App Mockup */}
          <div className="flex-1 w-full relative max-w-2xl lg:max-w-none perspective-1000">
            
            {/* The Main Glass Mockup Window */}
            <div className="relative bg-base-200/60 backdrop-blur-2xl border border-base-content/10 rounded-2xl shadow-2xl overflow-hidden aspect-video flex flex-col transform transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2">
              
              {/* Fake Mac Window Header */}
              <div className="h-10 bg-base-300/50 flex items-center px-4 gap-2 border-b border-base-content/10">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <div className="ml-4 text-xs font-mono opacity-50 flex-1 text-center pr-10">app.showcase.com/dashboard</div>
              </div>

              {/* Fake Video Player Area */}
              <div className="flex-1 bg-black/40 relative flex items-center justify-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-lg shadow-primary/50">
                  <Play className="w-8 h-8 text-white" />
                </div>

                {/* Internal Mock Data Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-base-100/90 backdrop-blur p-4 rounded-xl border border-base-content/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <UploadCloud className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">campaign_final_v2.mp4</div>
                      <div className="text-xs opacity-60">Uploaded 2 mins ago</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-success">-84% Size</div>
                    <div className="text-xs opacity-60 line-through">450 MB</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element 1 */}
            <div className="absolute -right-8 top-12 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-content/10 animate-[bounce_4s_infinite] hidden md:flex flex-col gap-2">
               <div className="text-xs font-bold opacity-50 uppercase tracking-wider">Format Ready</div>
               <div className="flex gap-2">
                 <span className="badge badge-secondary badge-sm">TikTok</span>
                 <span className="badge badge-accent badge-sm">IG Reels</span>
               </div>
            </div>

            {/* Floating Element 2 */}
            <div className="absolute -left-8 -bottom-8 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-content/10 animate-[bounce_5s_infinite_reverse] hidden md:flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                 <Zap className="w-5 h-5 text-warning" />
               </div>
               <div>
                 <div className="text-sm font-bold">Fast Delivery</div>
                 <div className="text-xs opacity-60">Global CDN Active</div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}