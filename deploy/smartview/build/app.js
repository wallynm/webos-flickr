enyo.path.addPath("enyo", "/usr/palm/frameworks/enyo/2.5/enyo");
enyo.path.addPath("lib/layout", "/usr/palm/frameworks/enyo/2.5/lib/layout");
enyo.path.addPath("lib/moonstone", "/usr/palm/frameworks/enyo/2.5/lib/moonstone");
enyo.path.addPath("lib/spotlight", "/usr/palm/frameworks/enyo/2.5/lib/spotlight");
enyo.path.addPath("lib/enyo-ilib", "/usr/palm/frameworks/enyo/2.5/lib/enyo-ilib");
enyo.path.addPath("lib/enyo-cordova", "/usr/palm/frameworks/enyo/2.5/lib/enyo-cordova");
enyo.path.addPath("lib/enyo-webos", "/usr/palm/frameworks/enyo/2.5/lib/enyo-webos");
enyo.path.addPath("lib", "lib");
enyo.depends(
	"/usr/palm/frameworks/enyo/2.5/lib/layout/package.js",
	"/usr/palm/frameworks/enyo/2.5/lib/moonstone/package.js",
	"/usr/palm/frameworks/enyo/2.5/lib/spotlight/package.js",
	"build/app1.css",
	"build/app1.js"
);