# CLI Commands
1. tsc filename.ts -w __ keep watching for changes in the file and compile it
2. tsc --init __ initialize the tsconfig.json
3. tsc -w __ after specifying the path to the rootDir run this command without specifying the filename it will automatically loo  for all the files in that directory



# tsconfig essentials
1. "rootDir" set the main typescript file directory
2. "outDir" set the output directory 
3. "target" set the js language version for the emitted js file
4. ,"include": ["src"] __ add this line at the end of tsconfig.json to ignore any ts file that is not in the src directory
5. "noEmitOnError" __disable emitting files in any type checking errors are reported