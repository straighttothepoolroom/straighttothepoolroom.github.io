"use strict";(self.webpackChunkPhilipMeadowsJohnson=self.webpackChunkPhilipMeadowsJohnson||[]).push([[820],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),s=n(3366),r=(n(7294),n(3905)),a=["components"],o={title:"Basic Invocation"},l=void 0,c={unversionedId:"developers/invocation",id:"developers/invocation",isDocsHomePage:!1,title:"Basic Invocation",description:"npm run scrape -- -s",source:"@site/docs/developers/invocation.md",sourceDirName:"developers",slug:"/developers/invocation",permalink:"/docs/developers/invocation",tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1638467467,formattedLastUpdatedAt:"12/2/2021",frontMatter:{title:"Basic Invocation"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/developers/installation"},next:{title:"Developing processListings()",permalink:"/docs/developers/process-listings"}},p=[{value:"<code>npm run scrape -- -s &lt;scraper&gt;</code>",id:"npm-run-scrape-----s-scraper",children:[],level:2},{value:"<code>npm run scrape -- --help</code>",id:"npm-run-scrape------help",children:[],level:2},{value:"Multi-scraper invocation",id:"multi-scraper-invocation",children:[],level:2},{value:"Example: NSF Scraper",id:"example-nsf-scraper",children:[],level:2},{value:"Multi-discipline support",id:"multi-discipline-support",children:[],level:2},{value:"Generating statistics",id:"generating-statistics",children:[],level:2},{value:"Development mode",id:"development-mode",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"npm-run-scrape-----s-scraper"},(0,r.kt)("inlineCode",{parentName:"h2"},"npm run scrape -- -s <scraper>")),(0,r.kt)("p",null,"This is the simplest version of the script, which runs a single scraper. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run scrape -- -s nsf\n")),(0,r.kt)("p",null,"Currently, this command produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ npm run scrape -- -s nsf\n\n> scraper@2.0.0 scrape\n> ts-node -P tsconfig.buildScripts.json scrape.ts "-s" "nsf"\n\n11:19:24 WARN NSF Launching NSF scraper\n11:19:41 INFO NSF Wrote 100 listings.\n11:19:41 INFO NSF Wrote statistics.\n$\n')),(0,r.kt)("p",null,"You will see that a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"nsf.dev.json")," has been written to the ",(0,r.kt)("inlineCode",{parentName:"p"},"listings/compsci")," directory, and a file called (for example) ",(0,r.kt)("inlineCode",{parentName:"p"},"nsf-2021-10-18.dev.json")," has been written to the ",(0,r.kt)("inlineCode",{parentName:"p"},"statistics/compsci")," directory."),(0,r.kt)("h2",{id:"npm-run-scrape------help"},(0,r.kt)("inlineCode",{parentName:"h2"},"npm run scrape -- --help")),(0,r.kt)("p",null,"There are many options for customizing the run of a scraper.  To see them, invoke help:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run scrape -- --help\n")),(0,r.kt)("p",null,"Here is the output from a recent run. There may be additional options or changes in your version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ npm run scrape -- --help\n\n> scraper@2.0.0 scrape\n> ts-node -P tsconfig.buildScripts.json scrape.ts "--help"\n\nUsage: scrape [options]\n\nOptions:\n  -s, --scraper <scraper>                Specify the scraper. (choices: "angellist", "apple", "cisco", "linkedin", "nsf", "simplyhired",\n                                         "test", "ziprecruiter")\n  -l, --log-level <level>                Specify logging level (choices: "trace", "debug", "info", "warn", "error", default: "info")\n  -d, --discipline <discipline>          Specify what types of internships to find (choices: "compsci", "compeng", default: "compsci")\n  -c, --config-file <config-file>        Specify config file name. (default: "config.json")\n  -nh, --no-headless                     Disable headless operation (display browser window during execution)\n  -dt, --devtools                        Open a devtools window during run. (default: false)\n  -cf, --commit-files                    Write listing and statistic files that are not git-ignored. (default: false)\n  -sm, --slowMo <milliseconds>           Pause each puppeteer action by the provided number of milliseconds. (default: "0")\n  -t,  --default-timeout <seconds>       Set default timeout in seconds for puppeteer. (default: "0")\n  -ld, --listing-dir <listingdir>        Set the directory to hold listing files. (default: "./listings")\n  -ml, --minimum-listings <minlistings>  Throw error if this number of listings not found. (default: "0")\n  -sd, --statistics-dir <statisticsdir>  Set the directory to hold statistics files. (default: "./statistics")\n  -vph, --viewport-height <height>       Set the viewport height (when browser displayed). (default: "700")\n  -vpw, --viewport-width <width>         Set the viewport width (when browser displayed). (default: "1000")\n  -h, --help                             display help for command\n')),(0,r.kt)("p",null,"You can provide any combination of these parameters, in any order.  The only required parameter is the scraper."),(0,r.kt)("h2",{id:"multi-scraper-invocation"},"Multi-scraper invocation"),(0,r.kt)("p",null,'In the previous version of the scraper, we discovered that puppeteer is not "thread safe", in the sense that running multiple scrapers simultaneously can result in execution errors that do not appear when running each scraper individually.'),(0,r.kt)("p",null,"To avoid this problem, the ",(0,r.kt)("inlineCode",{parentName:"p"},"scrape")," script supports running of only a single scraper. To support batch execution of multiple scrapers, we have created a Unix shell script (run-scrapers.sh) that invokes the ",(0,r.kt)("inlineCode",{parentName:"p"},"scrape")," script multiple times, once per scraper. This will isolate each run of the scraper in its own OS process and prevent these sorts of problems from occurring."),(0,r.kt)("p",null,"The problem with run-scrapers.sh is that it serializes execution, so the overall time to run the scrapers is sum of all individual execution times.  A simple way to reduce the overall time is to create one shell per scraper and invoke each scraper in each shell manually. It takes a couple of minutes to set it up, but now the overall time to run all of the scrapers is reduced to the time required to run the slowest scraper. Here's a screenshot illustrating this technique:"),(0,r.kt)("img",{src:"/img/scrapers-multiple-windows.png"}),(0,r.kt)("p",null,"Note that after running the scrapers like this, you must run the statistics script manually to collect the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ npm run statistics -- -cf true\n\n> scraper@2.0.0 statistics\n> ts-node -P tsconfig.buildScripts.json statistics.ts "-cf" "true"\n\nWrote statistics/compsci/statistics.num-listings.csv.\nWrote statistics/compsci/statistics.num-errors.csv.\nWrote statistics/compsci/statistics.elapsed-time.csv.\n')),(0,r.kt)("p",null,"After that, be sure to commit the listings and statistics files to GitHub."),(0,r.kt)("h2",{id:"example-nsf-scraper"},"Example: NSF Scraper"),(0,r.kt)("p",null,"Here is the default run of the NSF scraper. The log level defaults to 'info', so there's very little output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ npm run scrape -- -s nsf\n\n> scraper@2.0.0 scrape\n> ts-node -P tsconfig.buildScripts.json scrape.ts "-s" "nsf"\n\n12:21:06 WARN NSF Launching NSF scraper\n12:21:10 INFO NSF Wrote 100 listings.\n12:21:10 INFO NSF Wrote statistics.\n')),(0,r.kt)("p",null,"Running the scraper with log level 'debug' produces a lot of output, much of which I'll elide:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ npm run scrape -- -s nsf -l debug\n\n> scraper@2.0.0 scrape /Users/philipjohnson/github/internaloha/internaloha/scrapers-v2\n> ts-node -P tsconfig.buildScripts.json main.ts "-s" "nsf" "-l" "debug"\n\n15:45:17 DEBUG root Starting launch\n15:45:18 INFO NSF Launching scraper.\n15:45:18 DEBUG NSF Starting login\n15:45:20 DEBUG NSF Starting generate listings\n15:45:22 DEBUG NSF URLS:\nhttps://engineering.asu.edu/sensip/reu-index-html/,https://web.asu.edu/imaging-lyceum/visual-media-reu,http://www.eng.auburn.edu/comp/research/impact/,http://www.eng.auburn\n :\n :\n15:45:22 DEBUG NSF Positions:\nSensor Signal and Information Processing (SenSIP),Computational Imaging and Mixed-Reality for Visual Media Creation and Visualization,Research Experience for Undergraduate on Smart UAVs,REU Site: Parallel and Distributed Computing,Data-driven Security,Undergraduate Research Experiences in Big Data Security and Privacy,\n  :\n  :\n15:45:22 DEBUG NSF Descriptions:\nResearch Topics/Keywords: Sensors and signal processing algorithms, sensor design and fabrication, signal processing, wearable and flexible sensors, machine learning, interface circuits, sensors for Internet of Things\n :\n :\n15:45:22 DEBUG NSF Locations:\nTempe, Arizona,Arizona,Auburn, Alabama,Auburn, Alabama,Boise, Idaho,Pomona, California,Pittsburgh, Pennsylvania,Pittsburgh, Pennsylvania,Potsdam, New York\n :\n\n15:45:22 DEBUG NSF Starting processListings\n15:45:22 DEBUG NSF Starting write listings\n15:45:22 INFO NSF Wrote data\n15:45:22 DEBUG NSF Starting write statistics\n15:45:22 DEBUG NSF Starting close\n')),(0,r.kt)("h2",{id:"multi-discipline-support"},"Multi-discipline support"),(0,r.kt)("p",null,'The scrape script provides a --discipline parameter that defaults to "compsci" but also supports "compeng". The value of this parameter is available to each scraper in a field called "discipline".  Each scraper can consult the value of the discipline field and alter their search behavior if they want to implement discipline-specific internship listings.'),(0,r.kt)("p",null,"The discipline parameter also affects where the choice of directory where the listing and statistics files are written. The compsci files are written into ",(0,r.kt)("inlineCode",{parentName:"p"},"listings/compsci")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"statistics/compsci"),". The compeng files are written into ",(0,r.kt)("inlineCode",{parentName:"p"},"listings/compeng")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"statistics/compeng"),"."),(0,r.kt)("p",null,'At this time, the scrapers do not change their behavior according to the value of the --discipline parameter. So, if you call the scrape script with "--discipline compeng", the only impact will be to write out the listing and statistics files to a different subdirectory.'),(0,r.kt)("h2",{id:"generating-statistics"},"Generating statistics"),(0,r.kt)("p",null,"Each time you run a scraper, a json file is written to a subdirectory of ",(0,r.kt)("inlineCode",{parentName:"p"},"/statistics")," containing information about that run. The file name contains the timestamp YYYY-MM-DD, so statistics are only maintained for the last run of the day."),(0,r.kt)("p",null,"For example, here are the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"statistics/compsci/nsf-2021-10-08.dev.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "date": "2021-10-08",\n  "elapsedTime": 5,\n  "numErrors": 0,\n  "numListings": 99,\n  "scraper": "nsf",\n  "errorMessages": []\n}\n')),(0,r.kt)("p",null,'You can run the "statistics" script to read all of the files in the statistics directory and generate a set of CSV files that provide historical trends for the scrapers:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm run statistics\n\n> scraper@2.0.0 statistics /Users/philipjohnson/github/internaloha/internaloha/scrapers-v2\n> ts-node -P tsconfig.buildScripts.json statistics.ts\n\nWrote statistics/compsci/statistics.num-listings.dev.csv.\nWrote statistics/compsci/statistics.num-errors.dev.csv.\nWrote statistics/compsci/statistics.elapsed-time.dev.csv.\n")),(0,r.kt)("p",null,'During development, statistics files are generated with a ".dev.csv" extension. This means you can look at them, but they are not committed to GitHub.'),(0,r.kt)("p",null,'Running the statistics script with the --commit-files flag eliminates the ".dev" suffix component and thus allows the statistics files to be committed to GitHub.'),(0,r.kt)("p",null,"You can browse to those files directory to obtain a usable tabular representation of run data."),(0,r.kt)("p",null,"Invoke the statistics script with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," option to see all available options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ npm run statistics -- -h\n\n> scraper@2.0.0 statistics\n> ts-node -P tsconfig.buildScripts.json statistics.ts "-h"\n\nUsage: statistics [options]\n\nOptions:\n  -l, --log-level <level>                Specify logging level (choices: "trace", "debug", "info", "warn", "error", default: "warn")\n  -d, --discipline <discipline>          Specify what types of internships to find (choices: "compsci", "compeng", default: "compsci")\n  -sd, --statistics-dir <statisticsdir>  Set the directory to hold statistics files. (default: "./statistics")\n  -cf, --commit-files                    Write listing and statistic files that are not git-ignored. (default: false)\n  -h, --help                             display help for command\n')),(0,r.kt)("h2",{id:"development-mode"},"Development mode"),(0,r.kt)("p",null,'During development, people will be running scrapers and generating both listing and statistics "output" files in their branches.  This could lead to lots of spurious merge conflicts when trying to merge your branches back into main.'),(0,r.kt)("p",null,'To avoid this problem, both the scrape and statistics scripts have a flag called "--commit-files" which is (currently) false by default.  When false, all listing file names have a ".dev.json" suffix, and all statistics file names have a ".dev.csv" suffix.  Both of these suffixes are git-ignored, with the result that all output files you create during development are not committed to your branch or to main.'),(0,r.kt)("p",null,'If you want your data files to be committed, then you just run either script with the option "--commit-files", which makes that flag true. Then the associated output files are created with ".json" (rather than ".dev.json") or ".csv" (rather than ".dev.csv"), and so they will not be git-ignored.'))}d.isMDXComponent=!0}}]);