﻿#include ../bin/porky.jsx;var thisParentFolder = File($.fileName).parent;var thisRootFolder = File("~").fsName;var thisAbsolutePath = unescape( thisParentFolder.toString().replace("~", thisRootFolder) );    thisAbsolutePath = thisAbsolutePath.replace(/\\/g, "/");alert("Placing this file\n" + thisAbsolutePath + "/snippet.idms");var mySnippet = placeSnippet( thisAbsolutePath + "/snippet.idms", 115, 65);alert(mySnippet);var searchAndReplaceInThisFrame = mySnippet[0];alert( "Replacing some text in\n" + searchReplaceTextframe(searchAndReplaceInThisFrame, "This is a snippet", "porky rocks") );