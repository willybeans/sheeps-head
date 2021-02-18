# sheeps-head

A table top game engine/app written in react using typescript
Tests written in jest
Hosted on GCP using a CI/CD pipeline
Supports SSR

#### you may run into issues with hot reloading: 
When using automatic compilation of your code, you could run into issues when saving your files. Some editors have a "safe write" feature that can potentially interfere with recompilation.

To disable this feature in some common editors, see the list below:

Sublime Text 3: Add atomic_save: 'false' to your user preferences.
JetBrains IDEs (e.g. WebStorm): Uncheck "Use safe write" in Preferences > Appearance & Behavior > System Settings.
Vim: Add :set backupcopy=yes to your settings.

##### Things to add still:
  - For some reason im having an issue with implementing prettier. it keeps defaulting to backticks instead of quotes, so for now i've turned it off. if anyone is hip to implementing prettier lmk, so far the googling isnt helpful
  - ~test support for ts|x files (ts-jest, @types/enzyme, @types/enzyme-adapter-react-17)~ 
	  - test support with puppeteer: https://github.com/xfumihiro/jest-puppeteer-example
	- API for the DB rest endpoints and session logic - Calvin, we could write this in rust if you want...? As we store game data i wanted to write the ML api in rust for fun, but if we want to get this up and going quickly node would be faster
	- proxy logic to allow front end dev env to talk to backend port
	- Apollo cache / session logic for games(front end + integrates with FE server for sessions)
	- UUID(?) for generating unique game endpoints that expire 
	- logic for storing game state to feed ml alg (we could also add logic to have user recover a lost session this way) 
	- UI wireframes / single source of truth for UI design
	- 3D canvas for the games
	- Module that control game logic
	- SSR logic that plays nice with hot reloading (if possible)
	- Hosting on GCP
	  - CI/CD pipeline that digests jest tests 

	#### LMK if any of this does not seem to belong in an MVP
