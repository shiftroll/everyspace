import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-221":{"id":"e-221","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-220"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641b76dad324671f29567b84|6f38a981-c6e2-bf5e-7924-504fc4a3541b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641b76dad324671f29567b84|6f38a981-c6e2-bf5e-7924-504fc4a3541b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1679524378192},"e-228":{"id":"e-228","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-229"}},"mediaQueries":["main","medium"],"target":{"id":"641b76dad324671f29567b84|6f38a981-c6e2-bf5e-7924-504fc4a35426","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641b76dad324671f29567b84|6f38a981-c6e2-bf5e-7924-504fc4a35426","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1679524378192},"e-425":{"id":"e-425","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-424"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"71b7663c-8280-1fc0-52e0-14a904a5d25c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"71b7663c-8280-1fc0-52e0-14a904a5d25c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680201767416},"e-426":{"id":"e-426","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-427"}},"mediaQueries":["main","medium"],"target":{"id":"71b7663c-8280-1fc0-52e0-14a904a5d25e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"71b7663c-8280-1fc0-52e0-14a904a5d25e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680201767416},"e-428":{"id":"e-428","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-429"}},"mediaQueries":["main","medium"],"target":{"id":"71b7663c-8280-1fc0-52e0-14a904a5d261","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"71b7663c-8280-1fc0-52e0-14a904a5d261","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680201767416},"e-430":{"id":"e-430","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-431"}},"mediaQueries":["main","medium"],"target":{"id":"71b7663c-8280-1fc0-52e0-14a904a5d264","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"71b7663c-8280-1fc0-52e0-14a904a5d264","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680201767416},"e-432":{"id":"e-432","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-433"}},"mediaQueries":["main","medium"],"target":{"id":"71b7663c-8280-1fc0-52e0-14a904a5d267","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"71b7663c-8280-1fc0-52e0-14a904a5d267","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680201767416},"e-778":{"id":"e-778","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-116","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-779"}},"mediaQueries":["main"],"target":{"id":"641478aa08fae26986a83523|dbaa6ec1-6840-9bf9-f6ae-b987e7bb499b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae26986a83523|4ae1b749-ffa6-5304-ed64-f1c3bc7a329b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1680808473943},"e-779":{"id":"e-779","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-778"}},"mediaQueries":["main"],"target":{"id":"641478aa08fae26986a83523|dbaa6ec1-6840-9bf9-f6ae-b987e7bb499b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae26986a83523|4ae1b749-ffa6-5304-ed64-f1c3bc7a329b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1680808473986},"e-790":{"id":"e-790","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-791"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae23c2da83555|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|b5fe4d55-48b2-b2e4-e37b-803098e76195","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1680960673835},"e-791":{"id":"e-791","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-790"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae23c2da83555|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|b5fe4d55-48b2-b2e4-e37b-803098e76195","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1680960673835},"e-792":{"id":"e-792","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-793"}},"mediaQueries":["main"],"target":{"id":"64258bc24c40891a9c7dafdb|dbaa6ec1-6840-9bf9-f6ae-b987e7bb499b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1680962533383},"e-793":{"id":"e-793","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-792"}},"mediaQueries":["main"],"target":{"id":"64258bc24c40891a9c7dafdb|dbaa6ec1-6840-9bf9-f6ae-b987e7bb499b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1680962533383},"e-832":{"id":"e-832","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-147","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-833"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".m-navigation-link-plain","originalId":"62733d7dbe4e692a77a4adf6|d0597ac0-743e-5d9e-2362-7750ba27a822","appliesTo":"CLASS"},"targets":[{"selector":".m-navigation-link-plain","originalId":"62733d7dbe4e692a77a4adf6|d0597ac0-743e-5d9e-2362-7750ba27a822","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651724104936},"e-833":{"id":"e-833","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-148","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-832"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".m-navigation-link-plain","originalId":"62733d7dbe4e692a77a4adf6|d0597ac0-743e-5d9e-2362-7750ba27a822","appliesTo":"CLASS"},"targets":[{"selector":".m-navigation-link-plain","originalId":"62733d7dbe4e692a77a4adf6|d0597ac0-743e-5d9e-2362-7750ba27a822","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651724104937},"e-834":{"id":"e-834","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-149","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-835"}},"mediaQueries":["main","medium"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300fc0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300fc0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680993038477},"e-840":{"id":"e-840","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-152","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-841"}},"mediaQueries":["main","medium"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300fbd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300fbd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680993038477},"e-846":{"id":"e-846","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-151","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-847"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e4d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e4d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680993473599},"e-851":{"id":"e-851","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-850"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e3f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e3f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681023346572},"e-853":{"id":"e-853","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-852"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e3e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e3e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681024050238},"e-854":{"id":"e-854","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-151","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-855"}},"mediaQueries":["main","medium"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e41","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681024579398},"e-856":{"id":"e-856","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-150","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-857"}},"mediaQueries":["main","medium"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e44","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e44","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681024580429},"e-858":{"id":"e-858","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-152","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-859"}},"mediaQueries":["main","medium"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e47","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e47","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681024580740},"e-860":{"id":"e-860","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-149","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-861"}},"mediaQueries":["main","medium"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e4a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e4a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681024581407},"e-862":{"id":"e-862","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-150","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-863"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300f91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300f91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681026228620},"e-864":{"id":"e-864","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-155","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-865"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300f91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300f91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681035097268},"e-865":{"id":"e-865","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-156","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-864"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300f91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300f91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681035097275},"e-866":{"id":"e-866","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-155","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-867"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e4d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e4d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681035173111},"e-869":{"id":"e-869","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-156","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-868"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e3e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bf0d3a6d-3af4-2b71-1d29-53d863300e3e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681051157352},"e-977":{"id":"e-977","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-177","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-976"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c13","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c13","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068022982},"e-979":{"id":"e-979","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-174","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-978"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c14","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c14","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068022982},"e-980":{"id":"e-980","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-173","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-981"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c16","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c16","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068022982},"e-982":{"id":"e-982","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-175","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-983"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068022982},"e-984":{"id":"e-984","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-172","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-985"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c1c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c1c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068022982},"e-986":{"id":"e-986","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-171","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-987"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|a8ad3a6e-c3a5-7a70-e3e1-f1054c959c1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068022982},"e-988":{"id":"e-988","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-173","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-989"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae23c2da83555|5608c087-11d7-7c58-9123-4ce4688d00f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|5608c087-11d7-7c58-9123-4ce4688d00f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068321147},"e-990":{"id":"e-990","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-176","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-991"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae23c2da83555|5608c087-11d7-7c58-9123-4ce4688d00f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|5608c087-11d7-7c58-9123-4ce4688d00f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068321147},"e-992":{"id":"e-992","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-175","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-993"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae23c2da83555|ed0bcdb2-e87b-949c-eb5e-e7dc4458a465","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|ed0bcdb2-e87b-949c-eb5e-e7dc4458a465","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068329379},"e-994":{"id":"e-994","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-176","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-995"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae23c2da83555|ed0bcdb2-e87b-949c-eb5e-e7dc4458a465","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|ed0bcdb2-e87b-949c-eb5e-e7dc4458a465","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068329379},"e-995":{"id":"e-995","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-177","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-994"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae23c2da83555|ed0bcdb2-e87b-949c-eb5e-e7dc4458a465","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|ed0bcdb2-e87b-949c-eb5e-e7dc4458a465","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068329379},"e-996":{"id":"e-996","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-172","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-997"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae23c2da83555|4e351006-0c7b-0496-98e3-8e8869feaff3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|4e351006-0c7b-0496-98e3-8e8869feaff3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068335317},"e-998":{"id":"e-998","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-171","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-999"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae23c2da83555|bda408b9-63fc-2732-da5c-1920c724df06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|bda408b9-63fc-2732-da5c-1920c724df06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681068340600},"e-1045":{"id":"e-1045","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-177","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1044"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2151e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2151e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1047":{"id":"e-1047","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-174","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1046"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2151e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2151e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1049":{"id":"e-1049","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-177","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1048"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2151f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2151f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1051":{"id":"e-1051","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-174","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1050"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab21520","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab21520","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1052":{"id":"e-1052","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-173","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1053"}},"mediaQueries":["main","medium"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab21522","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab21522","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1054":{"id":"e-1054","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-175","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1055"}},"mediaQueries":["main","medium"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab21525","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab21525","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1056":{"id":"e-1056","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-172","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1057"}},"mediaQueries":["main","medium"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab21528","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab21528","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1058":{"id":"e-1058","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-171","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1059"}},"mediaQueries":["main","medium"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2152b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2152b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1060":{"id":"e-1060","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-176","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1061"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2152e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2152e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1062":{"id":"e-1062","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-173","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1063"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2152e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2152e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1064":{"id":"e-1064","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-175","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1065"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2169c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2169c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1066":{"id":"e-1066","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-176","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1067"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2169c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2169c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1067":{"id":"e-1067","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-177","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1066"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2169c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab2169c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1068":{"id":"e-1068","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-172","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1069"}},"mediaQueries":["main","medium"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab216c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab216c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1070":{"id":"e-1070","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-171","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1071"}},"mediaQueries":["main","medium"],"target":{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab216cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64258bc24c40891a9c7dafdb|45a27ab0-20ac-e9ca-bbb0-62f7eab216cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681120333528},"e-1348":{"id":"e-1348","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1349"}},"mediaQueries":["main"],"target":{"id":"643317ca2bb6b4948ca481a7|cdcd1429-c133-4c44-507e-a418ace216c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"643317ca2bb6b4948ca481a7|cdcd1429-c133-4c44-507e-a418ace216c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681132848552},"e-1349":{"id":"e-1349","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1348"}},"mediaQueries":["main"],"target":{"id":"643317ca2bb6b4948ca481a7|cdcd1429-c133-4c44-507e-a418ace216c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"643317ca2bb6b4948ca481a7|cdcd1429-c133-4c44-507e-a418ace216c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681132848552},"e-1404":{"id":"e-1404","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1405"}},"mediaQueries":["main"],"target":{"id":"64331b33e14ea81096c3cfa5|bd92df70-d1c0-ca01-2949-5f0add859cd9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64331b33e14ea81096c3cfa5|bd92df70-d1c0-ca01-2949-5f0add859cd9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681132896974},"e-1405":{"id":"e-1405","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1404"}},"mediaQueries":["main"],"target":{"id":"64331b33e14ea81096c3cfa5|bd92df70-d1c0-ca01-2949-5f0add859cd9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64331b33e14ea81096c3cfa5|bd92df70-d1c0-ca01-2949-5f0add859cd9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681132896974},"e-1542":{"id":"e-1542","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1543"}},"mediaQueries":["main"],"target":{"id":"64331c9c443cd28084a76fe0|53b64b06-98b9-bfec-39c1-80794d3ebf9f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64331c9c443cd28084a76fe0|53b64b06-98b9-bfec-39c1-80794d3ebf9f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681134257774},"e-1543":{"id":"e-1543","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1542"}},"mediaQueries":["main"],"target":{"id":"64331c9c443cd28084a76fe0|53b64b06-98b9-bfec-39c1-80794d3ebf9f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64331c9c443cd28084a76fe0|53b64b06-98b9-bfec-39c1-80794d3ebf9f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681134257774},"e-1804":{"id":"e-1804","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-116","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1805"}},"mediaQueries":["main"],"target":{"selector":".navbar-space.prodes","originalId":"643477343f453c2c340198f0|4881d739-c729-0fca-6044-8b1de137f47f","appliesTo":"CLASS"},"targets":[{"id":"643477343f453c2c340198f0|4881d739-c729-0fca-6044-8b1de137f47f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681160219191},"e-1805":{"id":"e-1805","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1804"}},"mediaQueries":["main"],"target":{"selector":".navbar-space.prodes","originalId":"643477343f453c2c340198f0|4881d739-c729-0fca-6044-8b1de137f47f","appliesTo":"CLASS"},"targets":[{"id":"643477343f453c2c340198f0|4881d739-c729-0fca-6044-8b1de137f47f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681160219191},"e-1848":{"id":"e-1848","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1849"}},"mediaQueries":["main"],"target":{"id":"6433199cbbbc4242ecf50a69|6fca280a-7bb9-6507-8074-aa4fd5e630c3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6433199cbbbc4242ecf50a69|6fca280a-7bb9-6507-8074-aa4fd5e630c3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681168848838},"e-1849":{"id":"e-1849","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1848"}},"mediaQueries":["main"],"target":{"id":"6433199cbbbc4242ecf50a69|6fca280a-7bb9-6507-8074-aa4fd5e630c3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6433199cbbbc4242ecf50a69|6fca280a-7bb9-6507-8074-aa4fd5e630c3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681168848838},"e-1852":{"id":"e-1852","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-389","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1853"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fd9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fd9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1854":{"id":"e-1854","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-390","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1855"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fd6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fd6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1856":{"id":"e-1856","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-391","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1857"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ea8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ea8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1858":{"id":"e-1858","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-392","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1859"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1859":{"id":"e-1859","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-393","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1858"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1861":{"id":"e-1861","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-393","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1860"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e98","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e98","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1862":{"id":"e-1862","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-391","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1863"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e9c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e9c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1864":{"id":"e-1864","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-394","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1865"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e9f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e9f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1866":{"id":"e-1866","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-390","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1867"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ea2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ea2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1868":{"id":"e-1868","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-389","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1869"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ea5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ea5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1870":{"id":"e-1870","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-394","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1871"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09faa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09faa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1872":{"id":"e-1872","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-395","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1873"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09faa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09faa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1873":{"id":"e-1873","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-396","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1872"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09faa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09faa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1874":{"id":"e-1874","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-395","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1875"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ea8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ea8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1877":{"id":"e-1877","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-396","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1876"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e99","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09e99","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170191995},"e-1878":{"id":"e-1878","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-397","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1879"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad0a195","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad0a195","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1880":{"id":"e-1880","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1881"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad0a192","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad0a192","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1882":{"id":"e-1882","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-399","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1883"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ff8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ff8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1885":{"id":"e-1885","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-400","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1884"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1887":{"id":"e-1887","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-400","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1886"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fe8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fe8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1888":{"id":"e-1888","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-399","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1889"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1890":{"id":"e-1890","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-401","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1891"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1892":{"id":"e-1892","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1893"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ff2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ff2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1894":{"id":"e-1894","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-397","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1895"}},"mediaQueries":["main","medium"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ff5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ff5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1896":{"id":"e-1896","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-401","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1897"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad0a166","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad0a166","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1898":{"id":"e-1898","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-402","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1899"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad0a166","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad0a166","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1900":{"id":"e-1900","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-402","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1901"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ff8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09ff8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1903":{"id":"e-1903","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-403","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1902"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fe8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fe8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-1905":{"id":"e-1905","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-404","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1904"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fe9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"448c39f3-4a61-fe54-6223-b82d0ad09fe9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681170198514},"e-2683":{"id":"e-2683","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2684"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2583aa8353a|c6181c20-6a28-bdfc-8607-bb169502cd75","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2583aa8353a|c6181c20-6a28-bdfc-8607-bb169502cd75","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172587438},"e-2684":{"id":"e-2684","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2683"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2583aa8353a|c6181c20-6a28-bdfc-8607-bb169502cd75","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2583aa8353a|c6181c20-6a28-bdfc-8607-bb169502cd75","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172587438},"e-2685":{"id":"e-2685","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2686"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"642a64b30e9e8168f58c5a43|9c1ed3de-2a91-d837-240a-66168ec2d166","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"642a64b30e9e8168f58c5a43|9c1ed3de-2a91-d837-240a-66168ec2d166","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172607485},"e-2686":{"id":"e-2686","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2685"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"642a64b30e9e8168f58c5a43|9c1ed3de-2a91-d837-240a-66168ec2d166","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"642a64b30e9e8168f58c5a43|9c1ed3de-2a91-d837-240a-66168ec2d166","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172607485},"e-2687":{"id":"e-2687","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2688"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"642a89e3129f717ef860767a|54636347-1344-901b-0af2-0a7d1606f618","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"642a89e3129f717ef860767a|54636347-1344-901b-0af2-0a7d1606f618","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172622769},"e-2688":{"id":"e-2688","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2687"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"642a89e3129f717ef860767a|54636347-1344-901b-0af2-0a7d1606f618","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"642a89e3129f717ef860767a|54636347-1344-901b-0af2-0a7d1606f618","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172622769},"e-2689":{"id":"e-2689","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2690"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6426faa2c15e81b7ac9cc7f8|2452a41d-3a11-706a-6f1e-7713295bb2ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6426faa2c15e81b7ac9cc7f8|2452a41d-3a11-706a-6f1e-7713295bb2ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172698878},"e-2690":{"id":"e-2690","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2689"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6426faa2c15e81b7ac9cc7f8|2452a41d-3a11-706a-6f1e-7713295bb2ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6426faa2c15e81b7ac9cc7f8|2452a41d-3a11-706a-6f1e-7713295bb2ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172698878},"e-2691":{"id":"e-2691","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2692"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"642a64d150d474e455d20b30|a995a42b-3c3d-3754-90f3-961aee2a2816","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"642a64d150d474e455d20b30|a995a42b-3c3d-3754-90f3-961aee2a2816","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172719895},"e-2692":{"id":"e-2692","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2691"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"642a64d150d474e455d20b30|a995a42b-3c3d-3754-90f3-961aee2a2816","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"642a64d150d474e455d20b30|a995a42b-3c3d-3754-90f3-961aee2a2816","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172719895},"e-2693":{"id":"e-2693","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2694"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"642a89f9b24aeb03929797e1|efd609f8-8f70-ee0f-cb63-de8dde251a90","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"642a89f9b24aeb03929797e1|efd609f8-8f70-ee0f-cb63-de8dde251a90","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172823043},"e-2694":{"id":"e-2694","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2693"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"642a89f9b24aeb03929797e1|efd609f8-8f70-ee0f-cb63-de8dde251a90","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"642a89f9b24aeb03929797e1|efd609f8-8f70-ee0f-cb63-de8dde251a90","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172823043},"e-2695":{"id":"e-2695","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2696"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6426faf3d45a3454d208fbed|92aef76f-19d7-cf95-3ceb-aa93c003511a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6426faf3d45a3454d208fbed|92aef76f-19d7-cf95-3ceb-aa93c003511a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172869809},"e-2696":{"id":"e-2696","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2695"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6426faf3d45a3454d208fbed|92aef76f-19d7-cf95-3ceb-aa93c003511a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6426faf3d45a3454d208fbed|92aef76f-19d7-cf95-3ceb-aa93c003511a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172869809},"e-2697":{"id":"e-2697","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2698"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64269a3923073d9bc1db06ec|474c191a-25cb-781c-b106-43278502a643","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64269a3923073d9bc1db06ec|474c191a-25cb-781c-b106-43278502a643","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172917253},"e-2698":{"id":"e-2698","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2697"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64269a3923073d9bc1db06ec|474c191a-25cb-781c-b106-43278502a643","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64269a3923073d9bc1db06ec|474c191a-25cb-781c-b106-43278502a643","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172917253},"e-2699":{"id":"e-2699","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2700"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"642004693e93444c4a0b4420|e8486d36-4413-5840-bd5d-c60f6de0b96d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"642004693e93444c4a0b4420|e8486d36-4413-5840-bd5d-c60f6de0b96d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172992008},"e-2700":{"id":"e-2700","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2699"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"642004693e93444c4a0b4420|e8486d36-4413-5840-bd5d-c60f6de0b96d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"642004693e93444c4a0b4420|e8486d36-4413-5840-bd5d-c60f6de0b96d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681172992008},"e-2703":{"id":"e-2703","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2704"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641b8767f89f28aa41b19b12|ac69ecce-d1a6-e774-ecc6-f021cea2a0cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641b8767f89f28aa41b19b12|ac69ecce-d1a6-e774-ecc6-f021cea2a0cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681173543263},"e-2704":{"id":"e-2704","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2703"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641b8767f89f28aa41b19b12|ac69ecce-d1a6-e774-ecc6-f021cea2a0cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641b8767f89f28aa41b19b12|ac69ecce-d1a6-e774-ecc6-f021cea2a0cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681173543263},"e-2705":{"id":"e-2705","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2706"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2143ba8353c|9492d071-6d67-07e5-2c37-d95f5b80878a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2143ba8353c|9492d071-6d67-07e5-2c37-d95f5b80878a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681173622413},"e-2706":{"id":"e-2706","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2705"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2143ba8353c|9492d071-6d67-07e5-2c37-d95f5b80878a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2143ba8353c|9492d071-6d67-07e5-2c37-d95f5b80878a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681173622413},"e-2707":{"id":"e-2707","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2708"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2c6b9a8353d|cb577168-fba5-5cba-81d8-ea718c861320","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2c6b9a8353d|cb577168-fba5-5cba-81d8-ea718c861320","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681173710715},"e-2708":{"id":"e-2708","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2707"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2c6b9a8353d|cb577168-fba5-5cba-81d8-ea718c861320","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2c6b9a8353d|cb577168-fba5-5cba-81d8-ea718c861320","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681173710715},"e-2709":{"id":"e-2709","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2710"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2b5ada8353b|6c66a1a1-c54f-5fbf-c39a-201cc97fca93","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2b5ada8353b|6c66a1a1-c54f-5fbf-c39a-201cc97fca93","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681173883286},"e-2710":{"id":"e-2710","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2709"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2b5ada8353b|6c66a1a1-c54f-5fbf-c39a-201cc97fca93","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2b5ada8353b|6c66a1a1-c54f-5fbf-c39a-201cc97fca93","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681173883286},"e-2711":{"id":"e-2711","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2712"}},"mediaQueries":["main"],"target":{"id":"641478aa08fae22d5da83551|523b0560-7127-7f0c-7736-42751b000af7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae22d5da83551|523b0560-7127-7f0c-7736-42751b000af7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681173919174},"e-2712":{"id":"e-2712","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2711"}},"mediaQueries":["main"],"target":{"id":"641478aa08fae22d5da83551|523b0560-7127-7f0c-7736-42751b000af7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae22d5da83551|523b0560-7127-7f0c-7736-42751b000af7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681173919174},"e-2713":{"id":"e-2713","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2714"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2c910a8356d|5d0517b6-4195-e1b9-0e53-77baf03183c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2c910a8356d|5d0517b6-4195-e1b9-0e53-77baf03183c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681174196878},"e-2714":{"id":"e-2714","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2713"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2c910a8356d|5d0517b6-4195-e1b9-0e53-77baf03183c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2c910a8356d|5d0517b6-4195-e1b9-0e53-77baf03183c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681174196878},"e-2715":{"id":"e-2715","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2716"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae26510a8356c|ed3ad276-1fc2-c9fd-8af9-b80ba4d5a252","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae26510a8356c|ed3ad276-1fc2-c9fd-8af9-b80ba4d5a252","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681174454768},"e-2716":{"id":"e-2716","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2715"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae26510a8356c|ed3ad276-1fc2-c9fd-8af9-b80ba4d5a252","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae26510a8356c|ed3ad276-1fc2-c9fd-8af9-b80ba4d5a252","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681174454768},"e-2717":{"id":"e-2717","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2718"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2ec4ba83570|28297b57-1452-d991-e2f7-92c479b62984","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2ec4ba83570|28297b57-1452-d991-e2f7-92c479b62984","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681175187213},"e-2718":{"id":"e-2718","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2717"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2ec4ba83570|28297b57-1452-d991-e2f7-92c479b62984","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2ec4ba83570|28297b57-1452-d991-e2f7-92c479b62984","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681175187213},"e-2723":{"id":"e-2723","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-439","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2724"}},"mediaQueries":["main"],"target":{"selector":".grid-box","originalId":"5ed06122-0b8d-bd6a-0ce5-4c1e789a0082","appliesTo":"CLASS"},"targets":[{"selector":".grid-box","originalId":"5ed06122-0b8d-bd6a-0ce5-4c1e789a0082","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681203810935},"e-2724":{"id":"e-2724","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-440","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2723"}},"mediaQueries":["main"],"target":{"selector":".grid-box","originalId":"5ed06122-0b8d-bd6a-0ce5-4c1e789a0082","appliesTo":"CLASS"},"targets":[{"selector":".grid-box","originalId":"5ed06122-0b8d-bd6a-0ce5-4c1e789a0082","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681203810950},"e-2763":{"id":"e-2763","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2764"}},"mediaQueries":["main"],"target":{"id":"64353ccbccb1e5619102992d|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64353ccbccb1e5619102992d|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681210572482},"e-2764":{"id":"e-2764","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2763"}},"mediaQueries":["main"],"target":{"id":"64353ccbccb1e5619102992d|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64353ccbccb1e5619102992d|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681210572482},"e-2831":{"id":"e-2831","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2832"}},"mediaQueries":["main"],"target":{"id":"64353ce531b3f501d2879dec|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64353ce531b3f501d2879dec|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681210597959},"e-2832":{"id":"e-2832","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2831"}},"mediaQueries":["main"],"target":{"id":"64353ce531b3f501d2879dec|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64353ce531b3f501d2879dec|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681210597959},"e-2899":{"id":"e-2899","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2900"}},"mediaQueries":["main"],"target":{"id":"64353d0df156d950c358eabf|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64353d0df156d950c358eabf|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681210637964},"e-2900":{"id":"e-2900","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2899"}},"mediaQueries":["main"],"target":{"id":"64353d0df156d950c358eabf|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64353d0df156d950c358eabf|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681210637964},"e-2967":{"id":"e-2967","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2968"}},"mediaQueries":["main"],"target":{"id":"643544cb435378f8970c7756|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"643544cb435378f8970c7756|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681212620190},"e-2968":{"id":"e-2968","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2967"}},"mediaQueries":["main"],"target":{"id":"643544cb435378f8970c7756|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"643544cb435378f8970c7756|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681212620190},"e-3035":{"id":"e-3035","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3036"}},"mediaQueries":["main"],"target":{"id":"6435450b5e1dce372f324ca6|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6435450b5e1dce372f324ca6|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681212684315},"e-3036":{"id":"e-3036","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3035"}},"mediaQueries":["main"],"target":{"id":"6435450b5e1dce372f324ca6|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6435450b5e1dce372f324ca6|f8da9b87-1718-1e4f-ad03-d797c12e673a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681212684315},"e-3094":{"id":"e-3094","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-432","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3093"}},"mediaQueries":["main"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3096":{"id":"e-3096","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-435","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3095"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3098":{"id":"e-3098","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-436","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3097"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3100":{"id":"e-3100","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-432","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3099"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3101":{"id":"e-3101","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-431","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3102"}},"mediaQueries":["main","medium"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3103":{"id":"e-3103","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-433","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3104"}},"mediaQueries":["main","medium"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64f1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64f1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3105":{"id":"e-3105","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-430","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3106"}},"mediaQueries":["main","medium"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3107":{"id":"e-3107","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-429","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3108"}},"mediaQueries":["main","medium"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3109":{"id":"e-3109","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-434","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3111":{"id":"e-3111","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-431","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3113":{"id":"e-3113","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-433","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d6602","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d6602","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3115":{"id":"e-3115","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-434","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d6602","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d6602","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3119":{"id":"e-3119","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-429","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3120"}},"mediaQueries":["main","medium"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d6631","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d6631","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213721335},"e-3122":{"id":"e-3122","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-425","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3121"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb0f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb0f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3124":{"id":"e-3124","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-428","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3123"}},"mediaQueries":["main"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb10","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb10","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3125":{"id":"e-3125","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-424","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3126"}},"mediaQueries":["main"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb11","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb11","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3126":{"id":"e-3126","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-425","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3125"}},"mediaQueries":["main"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb11","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb11","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3127":{"id":"e-3127","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-423","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3128"}},"mediaQueries":["main","medium"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb13","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb13","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3129":{"id":"e-3129","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-426","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3130"}},"mediaQueries":["main","medium"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb16","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb16","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3131":{"id":"e-3131","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3132"}},"mediaQueries":["main","medium"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3133":{"id":"e-3133","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-421","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3134"}},"mediaQueries":["main","medium"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb1c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb1c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3135":{"id":"e-3135","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-423","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3136"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3137":{"id":"e-3137","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-427","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3138"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3139":{"id":"e-3139","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-426","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3140"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fc27","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fc27","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3141":{"id":"e-3141","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-427","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3142"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fc27","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fc27","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3142":{"id":"e-3142","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-428","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3141"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fc27","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fc27","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-3145":{"id":"e-3145","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-421","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3146"}},"mediaQueries":["main","medium"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fc56","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fc56","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681213766170},"e-4401":{"id":"e-4401","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4402"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432fc731ddcb092b4e84d48|651dfb8e-4646-6ef8-9db8-6a6640e15eb9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432fc731ddcb092b4e84d48|651dfb8e-4646-6ef8-9db8-6a6640e15eb9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234410495},"e-4402":{"id":"e-4402","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4401"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432fc731ddcb092b4e84d48|651dfb8e-4646-6ef8-9db8-6a6640e15eb9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432fc731ddcb092b4e84d48|651dfb8e-4646-6ef8-9db8-6a6640e15eb9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234410495},"e-4403":{"id":"e-4403","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4404"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432f87cb89d663617717b3c|ee85a4a2-505e-e331-d297-b7dcbe7a85a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432f87cb89d663617717b3c|ee85a4a2-505e-e331-d297-b7dcbe7a85a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234421475},"e-4404":{"id":"e-4404","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4403"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432f87cb89d663617717b3c|ee85a4a2-505e-e331-d297-b7dcbe7a85a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432f87cb89d663617717b3c|ee85a4a2-505e-e331-d297-b7dcbe7a85a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234421475},"e-4405":{"id":"e-4405","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4406"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432f7d8a316080e44c026f5|f9f42658-cb8b-2ab9-4210-d1fae3922cf4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432f7d8a316080e44c026f5|f9f42658-cb8b-2ab9-4210-d1fae3922cf4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234497848},"e-4406":{"id":"e-4406","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4405"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432f7d8a316080e44c026f5|f9f42658-cb8b-2ab9-4210-d1fae3922cf4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432f7d8a316080e44c026f5|f9f42658-cb8b-2ab9-4210-d1fae3922cf4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234497848},"e-4407":{"id":"e-4407","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4408"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432ef5db89d667e5970e5cd|5898d100-5d0a-f53f-b519-120b65da1dc9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432ef5db89d667e5970e5cd|5898d100-5d0a-f53f-b519-120b65da1dc9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234671670},"e-4408":{"id":"e-4408","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432ef5db89d667e5970e5cd|5898d100-5d0a-f53f-b519-120b65da1dc9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432ef5db89d667e5970e5cd|5898d100-5d0a-f53f-b519-120b65da1dc9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234671670},"e-4409":{"id":"e-4409","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4410"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432ebd2bc4ac185694be4c7|83137069-993e-e0aa-23ad-7bca4cef8be9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432ebd2bc4ac185694be4c7|83137069-993e-e0aa-23ad-7bca4cef8be9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234690866},"e-4410":{"id":"e-4410","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4409"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432ebd2bc4ac185694be4c7|83137069-993e-e0aa-23ad-7bca4cef8be9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432ebd2bc4ac185694be4c7|83137069-993e-e0aa-23ad-7bca4cef8be9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234690866},"e-4411":{"id":"e-4411","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4412"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432eaa1a316081d31bf1796|08f06f2f-54e6-af3b-8588-f859b86a9e1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432eaa1a316081d31bf1796|08f06f2f-54e6-af3b-8588-f859b86a9e1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234705676},"e-4412":{"id":"e-4412","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4411"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432eaa1a316081d31bf1796|08f06f2f-54e6-af3b-8588-f859b86a9e1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432eaa1a316081d31bf1796|08f06f2f-54e6-af3b-8588-f859b86a9e1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234705676},"e-4413":{"id":"e-4413","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-437","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4414"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432e8e6e2d0571dfdfffbf6|999165eb-d4f9-849b-d3ad-2c1869f95d00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432e8e6e2d0571dfdfffbf6|999165eb-d4f9-849b-d3ad-2c1869f95d00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234726903},"e-4414":{"id":"e-4414","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4413"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6432e8e6e2d0571dfdfffbf6|999165eb-d4f9-849b-d3ad-2c1869f95d00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6432e8e6e2d0571dfdfffbf6|999165eb-d4f9-849b-d3ad-2c1869f95d00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681234726903},"e-4491":{"id":"e-4491","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4492"}},"mediaQueries":["main"],"target":{"id":"643623055ab90f1d5fa26a4a|48cc2bde-8bf8-fc07-20c6-ef01875716e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"643623055ab90f1d5fa26a4a|48cc2bde-8bf8-fc07-20c6-ef01875716e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681269509885},"e-4492":{"id":"e-4492","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4491"}},"mediaQueries":["main"],"target":{"id":"643623055ab90f1d5fa26a4a|48cc2bde-8bf8-fc07-20c6-ef01875716e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"643623055ab90f1d5fa26a4a|48cc2bde-8bf8-fc07-20c6-ef01875716e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681269509885},"e-4558":{"id":"e-4558","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4559"}},"mediaQueries":["main"],"target":{"id":"64362d4d189a4865562e897a|9c1ed3de-2a91-d837-240a-66168ec2d166","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64362d4d189a4865562e897a|9c1ed3de-2a91-d837-240a-66168ec2d166","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681272141704},"e-4559":{"id":"e-4559","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4558"}},"mediaQueries":["main"],"target":{"id":"64362d4d189a4865562e897a|9c1ed3de-2a91-d837-240a-66168ec2d166","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64362d4d189a4865562e897a|9c1ed3de-2a91-d837-240a-66168ec2d166","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681272141704},"e-4569":{"id":"e-4569","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-116","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4570"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6436409ce1743d0c47a09e05|433f774e-93f6-b717-822b-66adbfc1e49c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6436409ce1743d0c47a09e05|433f774e-93f6-b717-822b-66adbfc1e49c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681281252911},"e-4570":{"id":"e-4570","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4569"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6436409ce1743d0c47a09e05|433f774e-93f6-b717-822b-66adbfc1e49c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6436409ce1743d0c47a09e05|433f774e-93f6-b717-822b-66adbfc1e49c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681281252911},"e-4576":{"id":"e-4576","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4577"}},"mediaQueries":["main"],"target":{"selector":".navbar-space.light","originalId":"641478aa08fae23c2da83555|b5fe4d55-48b2-b2e4-e37b-803098e76195","appliesTo":"CLASS"},"targets":[{"id":"641478aa08fae23c2da83555|b5fe4d55-48b2-b2e4-e37b-803098e76195","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681321267302},"e-4577":{"id":"e-4577","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4576"}},"mediaQueries":["main"],"target":{"selector":".navbar-space.light","originalId":"641478aa08fae23c2da83555|b5fe4d55-48b2-b2e4-e37b-803098e76195","appliesTo":"CLASS"},"targets":[{"id":"641478aa08fae23c2da83555|b5fe4d55-48b2-b2e4-e37b-803098e76195","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681321267320},"e-4580":{"id":"e-4580","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4581"}},"mediaQueries":["main"],"target":{"selector":".navbar-space.everycash","originalId":"64361f9c03d0cacb08f91c80|31e54203-05e6-bea1-1142-242361538def","appliesTo":"CLASS"},"targets":[{"id":"64361f9c03d0cacb08f91c80|31e54203-05e6-bea1-1142-242361538def","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681325963013},"e-4581":{"id":"e-4581","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4580"}},"mediaQueries":["main"],"target":{"selector":".navbar-space.everycash","originalId":"64361f9c03d0cacb08f91c80|31e54203-05e6-bea1-1142-242361538def","appliesTo":"CLASS"},"targets":[{"id":"64361f9c03d0cacb08f91c80|31e54203-05e6-bea1-1142-242361538def","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681325963013},"e-4598":{"id":"e-4598","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4599"}},"mediaQueries":["main","medium"],"target":{"id":"7295c023-e914-31d4-40f4-cf723dfc8298","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7295c023-e914-31d4-40f4-cf723dfc8298","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681404869552},"e-4602":{"id":"e-4602","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-430","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4603"}},"mediaQueries":["main","medium"],"target":{"id":"cb3620ad-ca9c-ce92-c5cb-46a59ab3817f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cb3620ad-ca9c-ce92-c5cb-46a59ab3817f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681408760881},"e-4672":{"id":"e-4672","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-477","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4673"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681510750166},"e-4673":{"id":"e-4673","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-478","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4672"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681510750180},"e-4674":{"id":"e-4674","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-477","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4675"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb20","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb20","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681511121037},"e-4676":{"id":"e-4676","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-477","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4677"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fc28","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fc28","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681511159141},"e-4677":{"id":"e-4677","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-478","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4676"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fc28","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fc28","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681511159158},"e-4679":{"id":"e-4679","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-428","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4678"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb25","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb25","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681512141760},"e-4681":{"id":"e-4681","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-428","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4680"}},"mediaQueries":["main"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681512252617},"e-4683":{"id":"e-4683","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-479","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4682"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb12","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb12","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681512314685},"e-4685":{"id":"e-4685","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-479","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4684"}},"mediaQueries":["main"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb10","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb10","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681512847532},"e-4698":{"id":"e-4698","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-477","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4699"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d6603","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d6603","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681515660372},"e-4699":{"id":"e-4699","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-478","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4698"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d6603","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d6603","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681515660388},"e-4710":{"id":"e-4710","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-427","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4711"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2407ca834fe|007e8627-495a-819c-5b93-d23005578520","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2407ca834fe|007e8627-495a-819c-5b93-d23005578520","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681545581872},"e-4712":{"id":"e-4712","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-423","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4713"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2407ca834fe|007e8627-495a-819c-5b93-d23005578520","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2407ca834fe|007e8627-495a-819c-5b93-d23005578520","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681545581872},"e-4714":{"id":"e-4714","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-477","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4715"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2407ca834fe|007e8627-495a-819c-5b93-d23005578521","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2407ca834fe|007e8627-495a-819c-5b93-d23005578521","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681545581872},"e-4717":{"id":"e-4717","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-428","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4716"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2407ca834fe|007e8627-495a-819c-5b93-d23005578526","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2407ca834fe|007e8627-495a-819c-5b93-d23005578526","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681545581872},"e-4718":{"id":"e-4718","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-426","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4719"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2407ca834fe|88946a69-0a29-0bd0-7694-4317e2c3eac7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2407ca834fe|88946a69-0a29-0bd0-7694-4317e2c3eac7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681545939988},"e-4720":{"id":"e-4720","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-427","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4721"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2407ca834fe|88946a69-0a29-0bd0-7694-4317e2c3eac7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2407ca834fe|88946a69-0a29-0bd0-7694-4317e2c3eac7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681545939988},"e-4721":{"id":"e-4721","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-428","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4720"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2407ca834fe|88946a69-0a29-0bd0-7694-4317e2c3eac7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2407ca834fe|88946a69-0a29-0bd0-7694-4317e2c3eac7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681545939988},"e-4722":{"id":"e-4722","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-477","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4723"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2407ca834fe|88946a69-0a29-0bd0-7694-4317e2c3eac8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2407ca834fe|88946a69-0a29-0bd0-7694-4317e2c3eac8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681545939988},"e-4723":{"id":"e-4723","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-478","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4722"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"641478aa08fae2407ca834fe|88946a69-0a29-0bd0-7694-4317e2c3eac8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2407ca834fe|88946a69-0a29-0bd0-7694-4317e2c3eac8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681545939988},"e-4724":{"id":"e-4724","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4725"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae2407ca834fe|783297b8-3c72-c5cd-b48a-85b14590151f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae2407ca834fe|783297b8-3c72-c5cd-b48a-85b14590151f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681549554430},"e-4731":{"id":"e-4731","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4732"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae23c2da83555|63a3d3ee-9c3e-413d-73ba-82dc73330121","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|63a3d3ee-9c3e-413d-73ba-82dc73330121","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681567773708},"e-4733":{"id":"e-4733","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4734"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae23c2da83555|63a3d3ee-9c3e-413d-73ba-82dc73330124","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|63a3d3ee-9c3e-413d-73ba-82dc73330124","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681567773708},"e-4735":{"id":"e-4735","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4736"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae23c2da83555|63a3d3ee-9c3e-413d-73ba-82dc73330127","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|63a3d3ee-9c3e-413d-73ba-82dc73330127","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681567773708},"e-4737":{"id":"e-4737","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4738"}},"mediaQueries":["main","medium"],"target":{"id":"641478aa08fae23c2da83555|63a3d3ee-9c3e-413d-73ba-82dc7333012d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|63a3d3ee-9c3e-413d-73ba-82dc7333012d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681567773708},"e-4739":{"id":"e-4739","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4740"}},"mediaQueries":["main"],"target":{"id":"641478aa08fae23c2da83555|63a3d3ee-9c3e-413d-73ba-82dc73330130","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641478aa08fae23c2da83555|63a3d3ee-9c3e-413d-73ba-82dc73330130","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1681567773708},"e-4750":{"id":"e-4750","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4751"}},"mediaQueries":["main"],"target":{"id":"643ad0ae4cc08284ae880f47|48cc2bde-8bf8-fc07-20c6-ef01875716e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"643ad0ae4cc08284ae880f47|48cc2bde-8bf8-fc07-20c6-ef01875716e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681576111086},"e-4751":{"id":"e-4751","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4750"}},"mediaQueries":["main"],"target":{"id":"643ad0ae4cc08284ae880f47|48cc2bde-8bf8-fc07-20c6-ef01875716e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"643ad0ae4cc08284ae880f47|48cc2bde-8bf8-fc07-20c6-ef01875716e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681576111086},"e-8272":{"id":"e-8272","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8273"}},"mediaQueries":["main"],"target":{"id":"641ebf6e697d56a06922947e|bec5d072-9811-2ab4-9e07-19df406ae066","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641ebf6e697d56a06922947e|bec5d072-9811-2ab4-9e07-19df406ae066","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681682912913},"e-8273":{"id":"e-8273","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8272"}},"mediaQueries":["main"],"target":{"id":"641ebf6e697d56a06922947e|bec5d072-9811-2ab4-9e07-19df406ae066","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"641ebf6e697d56a06922947e|bec5d072-9811-2ab4-9e07-19df406ae066","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681682912913},"e-8747":{"id":"e-8747","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8748"}},"mediaQueries":["main"],"target":{"selector":".navbar-space.combine","originalId":"64258bc24c40891a9c7dafdb|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"CLASS"},"targets":[{"selector":".navbar-space.combine","originalId":"64258bc24c40891a9c7dafdb|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681834049441},"e-8748":{"id":"e-8748","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8747"}},"mediaQueries":["main"],"target":{"selector":".navbar-space.combine","originalId":"64258bc24c40891a9c7dafdb|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"CLASS"},"targets":[{"selector":".navbar-space.combine","originalId":"64258bc24c40891a9c7dafdb|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681834049457},"e-8829":{"id":"e-8829","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-116","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8830"}},"mediaQueries":["main"],"target":{"selector":".navbar-space","originalId":"641478aa08fae26986a83523|4ae1b749-ffa6-5304-ed64-f1c3bc7a329b","appliesTo":"CLASS"},"targets":[{"selector":".navbar-space","originalId":"641478aa08fae26986a83523|4ae1b749-ffa6-5304-ed64-f1c3bc7a329b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681834213590},"e-8830":{"id":"e-8830","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8829"}},"mediaQueries":["main"],"target":{"selector":".navbar-space","originalId":"641478aa08fae26986a83523|4ae1b749-ffa6-5304-ed64-f1c3bc7a329b","appliesTo":"CLASS"},"targets":[{"selector":".navbar-space","originalId":"641478aa08fae26986a83523|4ae1b749-ffa6-5304-ed64-f1c3bc7a329b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681834213609},"e-8831":{"id":"e-8831","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-116","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8832"}},"mediaQueries":["main"],"target":{"selector":".navbar-space-single","originalId":"641478aa08fae26986a83523|4ae1b749-ffa6-5304-ed64-f1c3bc7a329b","appliesTo":"CLASS"},"targets":[{"selector":".navbar-space-single","originalId":"641478aa08fae26986a83523|4ae1b749-ffa6-5304-ed64-f1c3bc7a329b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681834322971},"e-8832":{"id":"e-8832","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8831"}},"mediaQueries":["main"],"target":{"selector":".navbar-space-single","originalId":"641478aa08fae26986a83523|4ae1b749-ffa6-5304-ed64-f1c3bc7a329b","appliesTo":"CLASS"},"targets":[{"selector":".navbar-space-single","originalId":"641478aa08fae26986a83523|4ae1b749-ffa6-5304-ed64-f1c3bc7a329b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681834323022},"e-8833":{"id":"e-8833","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8834"}},"mediaQueries":["main"],"target":{"selector":".navbar-space-combine","originalId":"64258bc24c40891a9c7dafdb|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"CLASS"},"targets":[{"selector":".navbar-space-combine","originalId":"64258bc24c40891a9c7dafdb|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681834420691},"e-8834":{"id":"e-8834","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8833"}},"mediaQueries":["main"],"target":{"selector":".navbar-space-combine","originalId":"64258bc24c40891a9c7dafdb|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"CLASS"},"targets":[{"selector":".navbar-space-combine","originalId":"64258bc24c40891a9c7dafdb|204dacbe-b34f-fcb2-f468-46a88f059c7c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1681834420709},"e-9057":{"id":"e-9057","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9058"}},"mediaQueries":["main","medium"],"target":{"id":"e48c9844-3a2e-cc02-4353-7d589e00f145","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e48c9844-3a2e-cc02-4353-7d589e00f145","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684916563593},"e-9059":{"id":"e-9059","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9060"}},"mediaQueries":["main","medium"],"target":{"id":"e48c9844-3a2e-cc02-4353-7d589e00f151","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e48c9844-3a2e-cc02-4353-7d589e00f151","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684916563593},"e-9061":{"id":"e-9061","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9062"}},"mediaQueries":["main","medium"],"target":{"id":"e48c9844-3a2e-cc02-4353-7d589e00f154","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e48c9844-3a2e-cc02-4353-7d589e00f154","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684916563593},"e-9063":{"id":"e-9063","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9064"}},"mediaQueries":["main","medium"],"target":{"id":"e48c9844-3a2e-cc02-4353-7d589e00f163","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e48c9844-3a2e-cc02-4353-7d589e00f163","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684916563593},"e-9065":{"id":"e-9065","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9066"}},"mediaQueries":["main"],"target":{"id":"e48c9844-3a2e-cc02-4353-7d589e00f166","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e48c9844-3a2e-cc02-4353-7d589e00f166","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684916563593},"e-9067":{"id":"e-9067","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9068"}},"mediaQueries":["main","medium"],"target":{"id":"f2d63a9f-fccb-ab0d-a3f0-479f5a325711","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f2d63a9f-fccb-ab0d-a3f0-479f5a325711","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684930442746},"e-9069":{"id":"e-9069","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9070"}},"mediaQueries":["main","medium"],"target":{"id":"f2d63a9f-fccb-ab0d-a3f0-479f5a32571d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f2d63a9f-fccb-ab0d-a3f0-479f5a32571d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684930442746},"e-9071":{"id":"e-9071","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9072"}},"mediaQueries":["main","medium"],"target":{"id":"f2d63a9f-fccb-ab0d-a3f0-479f5a325720","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f2d63a9f-fccb-ab0d-a3f0-479f5a325720","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684930442746},"e-9073":{"id":"e-9073","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9074"}},"mediaQueries":["main","medium"],"target":{"id":"f2d63a9f-fccb-ab0d-a3f0-479f5a32572f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f2d63a9f-fccb-ab0d-a3f0-479f5a32572f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684930442746},"e-9075":{"id":"e-9075","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-422","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9076"}},"mediaQueries":["main"],"target":{"id":"f2d63a9f-fccb-ab0d-a3f0-479f5a325732","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f2d63a9f-fccb-ab0d-a3f0-479f5a325732","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684930442746},"e-9083":{"id":"e-9083","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-626","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9084"}},"mediaQueries":["main"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690611790779},"e-9084":{"id":"e-9084","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-628","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9083"}},"mediaQueries":["main"],"target":{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1ee5654c-59e5-fcdd-9c03-503ad13d64fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690611790790},"e-9085":{"id":"e-9085","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-626","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9086"}},"mediaQueries":["main"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690612271307},"e-9086":{"id":"e-9086","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-628","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9085"}},"mediaQueries":["main"],"target":{"id":"193fc2c5-389b-c02f-45bc-f102d269fb1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"193fc2c5-389b-c02f-45bc-f102d269fb1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690612271321}},"actionLists":{"a-19":{"id":"a-19","title":"Menu hover out","actionItemGroups":[{"actionItems":[{"id":"a-19-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-19-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678931903205},"a-16":{"id":"a-16","title":"AboutHover","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":330,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-16-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-16-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":92,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-14":{"id":"a-14","title":"Pick&FitHover","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-14-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":100,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-17":{"id":"a-17","title":"Plan&FitHover","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":110,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-17-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-17-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":95,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-18":{"id":"a-18","title":"eVRHover","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":220,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-18-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-18-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":94,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-116":{"id":"a-116","title":"Navbar hide","actionItemGroups":[{"actionItems":[{"id":"a-116-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inCirc","duration":300,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-116-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-116-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-116-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list","selectorGuids":["47ad8609-cadb-cb09-a935-7ad284005cbf"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-116-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list-2","selectorGuids":["152641cd-6958-ed22-69b0-5e3d54af726a"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680799850585},"a-117":{"id":"a-117","title":"Navbar show","actionItemGroups":[{"actionItems":[{"id":"a-117-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee"]},"heightValue":75,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-117-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"heightValue":75,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-117-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCirc","duration":300,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":1,"unit":""}},{"id":"a-117-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list","selectorGuids":["47ad8609-cadb-cb09-a935-7ad284005cbf"]},"yValue":-13,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-117-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list-2","selectorGuids":["152641cd-6958-ed22-69b0-5e3d54af726a"]},"yValue":-13,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680799850585},"a-130":{"id":"a-130","title":"Navbar hide white","actionItemGroups":[{"actionItems":[{"id":"a-130-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inCirc","duration":300,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-130-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inCirc","duration":300,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":0,"unit":""}},{"id":"a-130-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-130-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-130-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list.white","selectorGuids":["47ad8609-cadb-cb09-a935-7ad284005cbf","bd1b7142-c5bd-8ccc-8683-4005e14441d2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-130-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list.white","selectorGuids":["47ad8609-cadb-cb09-a935-7ad284005cbf","bd1b7142-c5bd-8ccc-8683-4005e14441d2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680799850585},"a-131":{"id":"a-131","title":"Navbar show white","actionItemGroups":[{"actionItems":[{"id":"a-131-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"heightValue":75,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-131-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list-2.white","selectorGuids":["152641cd-6958-ed22-69b0-5e3d54af726a","f4d1dcdd-7342-be2a-54f2-8995d1c69144"]},"yValue":-13,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-131-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list.white","selectorGuids":["47ad8609-cadb-cb09-a935-7ad284005cbf","bd1b7142-c5bd-8ccc-8683-4005e14441d2"]},"yValue":-13,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-131-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"heightValue":75,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-131-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCirc","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680799850585},"a-135":{"id":"a-135","title":"Navbar hide white combine","actionItemGroups":[{"actionItems":[{"id":"a-135-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":0,"unit":""}},{"id":"a-135-n-20","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"value":"none"}},{"id":"a-135-n-19","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header.dark","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","5fe7ca5f-53a5-87c2-daca-d4440ddbd7b8"]},"value":"flex"}},{"id":"a-135-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"value":0,"unit":""}},{"id":"a-135-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-135-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-135-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.dark","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","5fe7ca5f-53a5-87c2-daca-d4440ddbd7b8"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-135-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.dark","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","5fe7ca5f-53a5-87c2-daca-d4440ddbd7b8"]},"value":1,"unit":""}},{"id":"a-135-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list.white","selectorGuids":["47ad8609-cadb-cb09-a935-7ad284005cbf","bd1b7142-c5bd-8ccc-8683-4005e14441d2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-135-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list-2.white","selectorGuids":["152641cd-6958-ed22-69b0-5e3d54af726a","f4d1dcdd-7342-be2a-54f2-8995d1c69144"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-135-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent.dropdown","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755","7dfc8c30-ed81-b59b-5ab1-93c5e2015cc7"]},"value":0,"unit":""}},{"id":"a-135-n-15","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent.dropdown","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755","7dfc8c30-ed81-b59b-5ab1-93c5e2015cc7"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-135-n-22","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"value":"none"}},{"id":"a-135-n-23","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header.dark","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","5fe7ca5f-53a5-87c2-daca-d4440ddbd7b8"]},"value":"flex"}},{"id":"a-135-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":0,"unit":""}},{"id":"a-135-n-32","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent.dropdown","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755","7dfc8c30-ed81-b59b-5ab1-93c5e2015cc7"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-135-n-31","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent.dropdown","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755","7dfc8c30-ed81-b59b-5ab1-93c5e2015cc7"]},"value":0,"unit":""}},{"id":"a-135-n-30","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list-2.white","selectorGuids":["152641cd-6958-ed22-69b0-5e3d54af726a","f4d1dcdd-7342-be2a-54f2-8995d1c69144"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-135-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list.white","selectorGuids":["47ad8609-cadb-cb09-a935-7ad284005cbf","bd1b7142-c5bd-8ccc-8683-4005e14441d2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-135-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.dark","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","5fe7ca5f-53a5-87c2-daca-d4440ddbd7b8"]},"value":1,"unit":""}},{"id":"a-135-n-27","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.dark","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","5fe7ca5f-53a5-87c2-daca-d4440ddbd7b8"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-135-n-26","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-135-n-25","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-135-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680799850585},"a-136":{"id":"a-136","title":"Navbar show white combine","actionItemGroups":[{"actionItems":[{"id":"a-136-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"ease","duration":0,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"value":"flex"}},{"id":"a-136-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"ease","duration":0,"target":{"selector":".header.dark","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","5fe7ca5f-53a5-87c2-daca-d4440ddbd7b8"]},"value":"none"}},{"id":"a-136-n-15","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent.dropdown","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755","7dfc8c30-ed81-b59b-5ab1-93c5e2015cc7"]},"heightValue":75,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-136-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.dark","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","5fe7ca5f-53a5-87c2-daca-d4440ddbd7b8"]},"heightValue":75,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-136-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"heightValue":75,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-136-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"heightValue":75,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-136-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":1,"unit":""}},{"id":"a-136-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.light","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","98ddd100-15a4-f6ab-1cb3-aaa0a162e48b"]},"value":1,"unit":""}},{"id":"a-136-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".navbar-translucent.dropdown","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755","7dfc8c30-ed81-b59b-5ab1-93c5e2015cc7"]},"value":0,"unit":""}},{"id":"a-136-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".header.dark","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee","5fe7ca5f-53a5-87c2-daca-d4440ddbd7b8"]},"value":0,"unit":""}},{"id":"a-136-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".m-navigation-list.white","selectorGuids":["47ad8609-cadb-cb09-a935-7ad284005cbf","bd1b7142-c5bd-8ccc-8683-4005e14441d2"]},"yValue":-13,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-136-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".m-navigation-list-2.white","selectorGuids":["152641cd-6958-ed22-69b0-5e3d54af726a","f4d1dcdd-7342-be2a-54f2-8995d1c69144"]},"yValue":-13,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680799850585},"a-147":{"id":"a-147","title":"Navigation / Arrow / ON","actionItemGroups":[{"actionItems":[{"id":"a-147-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":-24,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-147-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-147-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-147-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{},"value":1,"unit":""}},{"id":"a-147-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"id":"6309fc849da4261b42652888|cadeeded-9fe3-8e11-1b89-82e4e187abee"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1651724109047},"a-148":{"id":"a-148","title":"Navigation / Arrow / OFF","actionItemGroups":[{"actionItems":[{"id":"a-148-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{},"xValue":-24,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-148-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{},"value":0,"unit":""}},{"id":"a-148-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"id":"6309fc849da4261b42652888|cadeeded-9fe3-8e11-1b89-82e4e187abee"},"globalSwatchId":"b37e6d8f","rValue":247,"bValue":253,"gValue":249,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1651724109047},"a-149":{"id":"a-149","title":"AboutHover 3","actionItemGroups":[{"actionItems":[{"id":"a-149-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":330,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-149-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-149-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":92,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-152":{"id":"a-152","title":"eVRHover 3","actionItemGroups":[{"actionItems":[{"id":"a-152-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":220,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-152-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-152-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":94,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-151":{"id":"a-151","title":"Pick&FitHover 3","actionItemGroups":[{"actionItems":[{"id":"a-151-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-151-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":100,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-151-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-151-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-150":{"id":"a-150","title":"Plan&FitHover 3","actionItemGroups":[{"actionItems":[{"id":"a-150-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-150-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":110,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-150-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-150-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":95,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678929716922},"a-155":{"id":"a-155","title":"nav bg dropdown hover","actionItemGroups":[{"actionItems":[{"id":"a-155-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-155-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681035178559},"a-156":{"id":"a-156","title":"nav bg dropdown hover out","actionItemGroups":[{"actionItems":[{"id":"a-156-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681035178559},"a-177":{"id":"a-177","title":"nav bg dropdown hover out 4","actionItemGroups":[{"actionItems":[{"id":"a-177-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681035178559},"a-174":{"id":"a-174","title":"Menu hover out 6","actionItemGroups":[{"actionItems":[{"id":"a-174-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-174-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678931903205},"a-173":{"id":"a-173","title":"Pick&FitHover 6","actionItemGroups":[{"actionItems":[{"id":"a-173-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-173-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":100,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-173-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-173-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-175":{"id":"a-175","title":"Plan&FitHover 6","actionItemGroups":[{"actionItems":[{"id":"a-175-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-175-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":110,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-175-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-175-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":95,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678929716922},"a-172":{"id":"a-172","title":"eVRHover 6","actionItemGroups":[{"actionItems":[{"id":"a-172-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":220,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-172-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-172-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":94,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-171":{"id":"a-171","title":"AboutHover 6","actionItemGroups":[{"actionItems":[{"id":"a-171-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":330,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-171-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-171-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":92,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-176":{"id":"a-176","title":"nav bg dropdown hover 4","actionItemGroups":[{"actionItems":[{"id":"a-176-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-176-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681035178559},"a-389":{"id":"a-389","title":"AboutHover 32","actionItemGroups":[{"actionItems":[{"id":"a-389-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":330,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-389-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-389-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":92,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-390":{"id":"a-390","title":"eVRHover 32","actionItemGroups":[{"actionItems":[{"id":"a-390-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":220,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-390-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-390-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":94,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-391":{"id":"a-391","title":"Pick&FitHover 32","actionItemGroups":[{"actionItems":[{"id":"a-391-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-391-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":100,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-391-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-391-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-392":{"id":"a-392","title":"nav bg dropdown hover 3 new 16","actionItemGroups":[{"actionItems":[{"id":"a-392-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent-2","selectorGuids":["9f093e0e-9211-54d6-56d8-122e0b7a4904"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-392-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent-2","selectorGuids":["9f093e0e-9211-54d6-56d8-122e0b7a4904"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681035178559},"a-393":{"id":"a-393","title":"Menu hover out 32","actionItemGroups":[{"actionItems":[{"id":"a-393-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-393-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678931903205},"a-394":{"id":"a-394","title":"Plan&FitHover 32","actionItemGroups":[{"actionItems":[{"id":"a-394-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-394-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":110,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-394-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-394-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":95,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678929716922},"a-395":{"id":"a-395","title":"nav bg dropdown hover 19","actionItemGroups":[{"actionItems":[{"id":"a-395-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-395-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681035178559},"a-396":{"id":"a-396","title":"nav bg dropdown hover out 30","actionItemGroups":[{"actionItems":[{"id":"a-396-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681035178559},"a-397":{"id":"a-397","title":"AboutHover 33","actionItemGroups":[{"actionItems":[{"id":"a-397-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":330,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-397-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-397-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":92,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-398":{"id":"a-398","title":"eVRHover 33","actionItemGroups":[{"actionItems":[{"id":"a-398-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":220,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-398-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-398-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":94,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-399":{"id":"a-399","title":"Pick&FitHover 33","actionItemGroups":[{"actionItems":[{"id":"a-399-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-399-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":100,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-399-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-399-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-400":{"id":"a-400","title":"Menu hover out 33","actionItemGroups":[{"actionItems":[{"id":"a-400-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-400-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678931903205},"a-401":{"id":"a-401","title":"Plan&FitHover 33","actionItemGroups":[{"actionItems":[{"id":"a-401-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-401-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":110,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-401-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-401-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":95,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678929716922},"a-402":{"id":"a-402","title":"nav bg dropdown hover 4 white 13","actionItemGroups":[{"actionItems":[{"id":"a-402-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-402-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681035178559},"a-403":{"id":"a-403","title":"nav bg dropdown hover out 31","actionItemGroups":[{"actionItems":[{"id":"a-403-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681035178559},"a-404":{"id":"a-404","title":"nav bg dropdown hover out 4 white 13","actionItemGroups":[{"actionItems":[{"id":"a-404-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681035178559},"a-437":{"id":"a-437","title":"Navbar hide white catalog","actionItemGroups":[{"actionItems":[{"id":"a-437-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inCirc","duration":300,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-437-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inCirc","duration":300,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":1,"unit":""}},{"id":"a-437-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header","selectorGuids":["d3dc5999-6260-c0ef-1aa9-8d9626f1c5ee"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-437-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"heightValue":88,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-437-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list.white","selectorGuids":["47ad8609-cadb-cb09-a935-7ad284005cbf","bd1b7142-c5bd-8ccc-8683-4005e14441d2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-437-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-navigation-list.white","selectorGuids":["47ad8609-cadb-cb09-a935-7ad284005cbf","bd1b7142-c5bd-8ccc-8683-4005e14441d2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680799850585},"a-439":{"id":"a-439","title":"hover catalog in dropdown","actionItemGroups":[{"actionItems":[{"id":"a-439-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".category-images","selectorGuids":["2ee8716c-fac2-9c75-b2e3-d0643fc505d9"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-439-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".category-images","selectorGuids":["2ee8716c-fac2-9c75-b2e3-d0643fc505d9"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681202964345},"a-440":{"id":"a-440","title":"hover out catalog in dropdown","actionItemGroups":[{"actionItems":[{"id":"a-440-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".category-images","selectorGuids":["2ee8716c-fac2-9c75-b2e3-d0643fc505d9"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681202964345},"a-432":{"id":"a-432","title":"Menu hover out 37","actionItemGroups":[{"actionItems":[{"id":"a-432-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-432-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678931903205},"a-435":{"id":"a-435","title":"nav bg dropdown hover out 35","actionItemGroups":[{"actionItems":[{"id":"a-435-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681035178559},"a-436":{"id":"a-436","title":"nav bg dropdown hover out 4 white 15","actionItemGroups":[{"actionItems":[{"id":"a-436-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681035178559},"a-431":{"id":"a-431","title":"Pick&FitHover 37","actionItemGroups":[{"actionItems":[{"id":"a-431-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-431-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":100,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-431-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-431-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-433":{"id":"a-433","title":"Plan&FitHover 37","actionItemGroups":[{"actionItems":[{"id":"a-433-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-433-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":110,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-433-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-433-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":95,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678929716922},"a-430":{"id":"a-430","title":"eVRHover 37","actionItemGroups":[{"actionItems":[{"id":"a-430-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":220,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-430-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-430-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":94,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-429":{"id":"a-429","title":"AboutHover 37","actionItemGroups":[{"actionItems":[{"id":"a-429-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":330,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-429-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-429-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":92,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-434":{"id":"a-434","title":"nav bg dropdown hover 4 white 15","actionItemGroups":[{"actionItems":[{"id":"a-434-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-434-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent-white","selectorGuids":["38ce0a82-4ee0-5e23-3c5f-1b1b7ae7554f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681035178559},"a-425":{"id":"a-425","title":"Menu hover out 36","actionItemGroups":[{"actionItems":[{"id":"a-425-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-425-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678931903205},"a-428":{"id":"a-428","title":"nav bg dropdown hover out 34","actionItemGroups":[{"actionItems":[{"id":"a-428-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681035178559},"a-424":{"id":"a-424","title":"nav bg dropdown hover 3 new 18","actionItemGroups":[{"actionItems":[{"id":"a-424-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent-2","selectorGuids":["9f093e0e-9211-54d6-56d8-122e0b7a4904"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-424-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent-2","selectorGuids":["9f093e0e-9211-54d6-56d8-122e0b7a4904"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681035178559},"a-423":{"id":"a-423","title":"Pick&FitHover","actionItemGroups":[{"actionItems":[{"id":"a-423-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-423-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":100,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-423-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-423-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-426":{"id":"a-426","title":"Plan&FitHover","actionItemGroups":[{"actionItems":[{"id":"a-426-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-426-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":110,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-426-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-426-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":95,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678929716922},"a-422":{"id":"a-422","title":"eVRHover","actionItemGroups":[{"actionItems":[{"id":"a-422-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":220,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-422-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-422-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":94,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-421":{"id":"a-421","title":"AboutHover","actionItemGroups":[{"actionItems":[{"id":"a-421-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":250,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"xValue":330,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-421-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":1,"unit":""}},{"id":"a-421-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCirc","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"widthValue":92,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678929716922},"a-427":{"id":"a-427","title":"nav bg dropdown hover 21","actionItemGroups":[{"actionItems":[{"id":"a-427-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-427-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".navbar-translucent","selectorGuids":["ccd7d688-c8e8-8feb-2322-9b0ab1902755"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681035178559},"a-477":{"id":"a-477","title":"menu-wide-appear","actionItemGroups":[{"actionItems":[{"id":"a-477-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-wide","selectorGuids":["b2941f0f-0d6b-71d9-9fdf-9ed106658198"]},"value":"none"}}]},{"actionItems":[{"id":"a-477-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-wide","selectorGuids":["b2941f0f-0d6b-71d9-9fdf-9ed106658198"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1681510775081},"a-478":{"id":"a-478","title":"menu-wide-hidden","actionItemGroups":[{"actionItems":[{"id":"a-478-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-wide","selectorGuids":["b2941f0f-0d6b-71d9-9fdf-9ed106658198"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681510775081},"a-479":{"id":"a-479","title":"menuhover-hide","actionItemGroups":[{"actionItems":[{"id":"a-479-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".menuhover","selectorGuids":["1e3a5bf2-06c5-8ff2-18c5-280ddb8dc116"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1681512323025},"a-626":{"id":"a-626","title":"Dropdown Open Transition","actionItemGroups":[{"actionItems":[{"id":"a-626-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".m-navigation-pick-fit","selectorGuids":["094198d1-0236-ec62-5a96-be72455e4701"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-626-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".m-navigation-pick-fit","selectorGuids":["094198d1-0236-ec62-5a96-be72455e4701"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1690609804024},"a-628":{"id":"a-628","title":"Dropdown Close Transition","actionItemGroups":[{"actionItems":[{"id":"a-628-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".m-navigation-pick-fit","selectorGuids":["094198d1-0236-ec62-5a96-be72455e4701"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-628-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".m-navigation-pick-fit","selectorGuids":["094198d1-0236-ec62-5a96-be72455e4701"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-628-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".m-navigation-pick-fit","selectorGuids":["094198d1-0236-ec62-5a96-be72455e4701"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1690609804024}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavbarCombine({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="navbar-combine"
      tag="div"
      bind="448c39f3-4a61-fe54-6223-b82d0ad09e93"
    >
      <_Builtin.NavbarWrapper
        className="navbar"
        tag="div"
        bind="448c39f3-4a61-fe54-6223-b82d0ad09e94"
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.Block className="navbar-content black" tag="div">
          <_Builtin.Link
            className="everyspace-logo-white"
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block className="navbar-brand white" tag="div" />
          </_Builtin.Link>
          <_Builtin.NavbarMenu
            className="navbar-menu black"
            data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09e98"
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className="menu-wide black"
              data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09e99"
              tag="div"
            >
              <_Builtin.Block
                className="menu1 dark"
                data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09e9a"
                tag="div"
              >
                <_Builtin.Block className="menuhover white" tag="div" />
                <_Builtin.NavbarLink
                  className="navbar-link-hover white"
                  data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09e9c"
                  options={{
                    href: "#",
                    preload: "prerender",
                  }}
                />
                <_Builtin.NavbarLink
                  className="navbar-link-hover white"
                  data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09e9f"
                  options={{
                    href: "#",
                    preload: "prerender",
                  }}
                />
                <_Builtin.NavbarLink
                  className="navbar-link-hover white"
                  data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09ea2"
                  options={{
                    href: "#",
                    preload: "prerender",
                  }}
                />
                <_Builtin.NavbarLink
                  className="navbar-link-hover white"
                  data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09ea5"
                  options={{
                    href: "#",
                    preload: "prerender",
                  }}
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.DropdownWrapper
              className="navbar-link white"
              data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09ea8"
              tag="div"
              bind="448c39f3-4a61-fe54-6223-b82d0ad09ea8"
              delay="0"
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="navbar-link-pick-fit"
                tag="div"
              >
                <_Builtin.Block className="text-block-79" tag="div">
                  {"Pick & Fit"}
                </_Builtin.Block>
                <_Builtin.Icon
                  className="m-navigation-icon-arrow"
                  widget={{
                    type: "icon",
                    icon: "dropdown-toggle",
                  }}
                  bind="448c39f3-4a61-fe54-6223-b82d0ad09eac"
                />
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList className="m-navigation-list" tag="nav">
                <_Builtin.Block
                  className="dropdown-container-pick-fit"
                  tag="div"
                >
                  <_Builtin.Block
                    className="m-paragraph-regular pick-fit-rooms"
                    tag="div"
                  >
                    {"Rooms"}
                  </_Builtin.Block>
                  <_Builtin.Block className="m-navigation-pick-fit" tag="div">
                    <_Builtin.TabsWrapper
                      className="tabs-2"
                      current="Living Room"
                      easing="ease"
                      fadeIn={300}
                      fadeOut={100}
                    >
                      <_Builtin.TabsMenu className="rooms-select" tag="div">
                        <_Builtin.TabsLink
                          className="room-tab"
                          data-w-tab="Living Room"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit"
                            tag="div"
                          >
                            {"Living Room"}
                          </_Builtin.Block>
                          <_Builtin.Block className="div-block-99" tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad09eb8"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className="room-tab"
                          data-w-tab="Kitchen"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit"
                            tag="div"
                          >
                            {"Kitchen"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad09ebd"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className="room-tab"
                          data-w-tab="Bedroom"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit"
                            tag="div"
                          >
                            {"Bedroom"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad09ec2"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className="room-tab"
                          data-w-tab="Home Office"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit"
                            tag="div"
                          >
                            {"Home Office"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad09ec7"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className="room-tab"
                          data-w-tab="Kidspace"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit"
                            tag="div"
                          >
                            {"Kidspace"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad09ecc"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className="room-tab"
                          data-w-tab="Bathroom"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit"
                            tag="div"
                          >
                            {"Bathroom"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad09ed1"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                      </_Builtin.TabsMenu>
                      <_Builtin.TabsContent
                        className="m-navigation-wrapper"
                        tag="div"
                      >
                        <_Builtin.TabsPane
                          className="tab-pane-living-room"
                          tag="div"
                          data-w-tab="Living Room"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title"
                                    tag="div"
                                  >
                                    {"Living Room"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description"
                                    tag="div"
                                  >
                                    {"For the moments you cherish the most."}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.NotSupported _atom="DynamoWrapper" />
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Explore Living Room"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09eeb"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-33">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09ef1"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="eager"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6426f3d1cf54ff063cb2d73a_Screenshot%202023-03-10%20at%201.01.22%20AM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className="tab-pane-kitchen"
                          tag="div"
                          data-w-tab="Kitchen"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title"
                                    tag="div"
                                  >
                                    {"Kitchen"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description"
                                    tag="div"
                                  >
                                    {"Unleash your inner chef."}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.NotSupported _atom="DynamoWrapper" />
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Explore Kitchen"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09f0b"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-33">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09f11"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="eager"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/642aa2915b55392eae341797_Screenshot%202023-04-03%20at%204.53.30%20PM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className="tab-pane-bedroom"
                          tag="div"
                          data-w-tab="Bedroom"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title"
                                    tag="div"
                                  >
                                    {"Bedroom"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description"
                                    tag="div"
                                  >
                                    {
                                      "Comfort, from the moment you wake up until the sky says goodnight."
                                    }
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.NotSupported _atom="DynamoWrapper" />
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Explore Bedroom"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09f2b"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-32">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09f31"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="eager"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6431436ecbc3b7ab4b49bc0c_Screenshot%202023-04-06%20at%2012.40.35%20PM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className="tab-pane-home-office"
                          tag="div"
                          data-w-tab="Home Office"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title"
                                    tag="div"
                                  >
                                    {"Home Office"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description"
                                    tag="div"
                                  >
                                    {"The space where great ideas are born."}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.NotSupported _atom="DynamoWrapper" />
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Explore Home Office"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09f4b"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-33">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09f51"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="eager"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/64129f17b78238e67ad6b245_Screenshot%202023-03-10%20at%201.03.36%20AM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className="tab-pane-kidspace"
                          tag="div"
                          data-w-tab="Kidspace"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title"
                                    tag="div"
                                  >
                                    {"Kidspace"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description"
                                    tag="div"
                                  >
                                    {
                                      "Where creativity and imagination have no boundaries."
                                    }
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.NotSupported _atom="DynamoWrapper" />
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Explore Kidspace"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09f6b"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-33">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09f71"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/64129f1eb78238162ed6b397_Screenshot%202023-03-16%20at%2011.46.00%20AM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className="tab-pane-bathroom"
                          tag="div"
                          data-w-tab="Bathroom"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title"
                                    tag="div"
                                  >
                                    {"Bathroom"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description"
                                    tag="div"
                                  >
                                    {"Your at-home oasis."}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.NotSupported _atom="DynamoWrapper" />
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Explore Bathroom"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09f8b"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-33">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad09f91"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6412a1cbc3de72b3df9ffa4d_Screenshot%202023-03-16%20at%2011.54.05%20AM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                      </_Builtin.TabsContent>
                    </_Builtin.TabsWrapper>
                    <_Builtin.Block className="home-solutions-select" tag="div">
                      <_Builtin.Block
                        className="m-paragraph-regular home-solutions"
                        tag="div"
                      >
                        {"home Solutions"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="m-navigation-link-plain"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="m-paragraph-regular pick-fit"
                          tag="div"
                        >
                          {"Everydoor™"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad09f99"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="m-navigation-link-plain"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="m-paragraph-regular pick-fit"
                          tag="div"
                        >
                          {"Everyfloor™"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad09f9d"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="m-navigation-link-plain"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="m-paragraph-regular pick-fit"
                          tag="div"
                        >
                          {"Everylighting™"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad09fa1"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="m-navigation-link-plain"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="m-paragraph-regular pick-fit"
                          tag="div"
                        >
                          {"Everywall™"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad09fa5"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="m-navigation-link-plain"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="m-paragraph-regular pick-fit"
                          tag="div"
                        >
                          {"Smart Home"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad09fa9"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className="navbar-link white"
              data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09faa"
              tag="div"
              bind="448c39f3-4a61-fe54-6223-b82d0ad09faa"
              delay="0"
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="navbar-link-pick-fit"
                tag="div"
              >
                <_Builtin.Block className="text-block-79" tag="div">
                  {"Plan & Fit"}
                </_Builtin.Block>
                <_Builtin.Icon
                  className="m-navigation-icon-arrow"
                  widget={{
                    type: "icon",
                    icon: "dropdown-toggle",
                  }}
                  bind="448c39f3-4a61-fe54-6223-b82d0ad09fae"
                />
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="m-navigation-list-2"
                tag="nav"
                id="plan-fit-dropdown"
              >
                <_Builtin.Block className="m-container-large" tag="div">
                  <_Builtin.Block className="more-select" tag="div">
                    <_Builtin.Link
                      className="plan-fit-details-link"
                      button={false}
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block className="div-block-57" tag="div">
                        <_Builtin.Block
                          className="m-paragraph-regular plan-fit"
                          tag="div"
                        >
                          {"Plan & Fit"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="m-paragraph-mini text-weight-medium"
                          tag="div"
                        >
                          <_Builtin.Strong className="light-text-2">
                            {"Home furnishings and design made easy."}
                            <br />
                          </_Builtin.Strong>
                          <br />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="div-block-60" tag="div">
                        <_Builtin.Block
                          className="m-paragraph-mini text-weight-medium"
                          tag="div"
                        >
                          <_Builtin.Strong className="light-text">
                            {"Learn More"}
                          </_Builtin.Strong>
                          <br />
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad09fc0"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block className="dropdown-select" tag="div">
                    <_Builtin.Link
                      className="verdes-dropdown-link"
                      button={false}
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block className="div-block-57" tag="div">
                        <_Builtin.Block
                          className="m-paragraph-mini text-weight-medium"
                          tag="div"
                        >
                          <_Builtin.Strong className="light-text">
                            {"Plan specific rooms with"}
                          </_Builtin.Strong>
                          <br />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="m-paragraph-regular text-weight-medium"
                          tag="div"
                        >
                          {"Verified Designer"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className="m-icon-regular plan-fit"
                        bind="448c39f3-4a61-fe54-6223-b82d0ad09fca"
                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block className="div-block-58" tag="div" />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="prodes-dropdown-link"
                      button={false}
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block className="div-block-57" tag="div">
                        <_Builtin.Block
                          className="m-paragraph-mini text-weight-medium"
                          tag="div"
                        >
                          <_Builtin.Strong className="light-text">
                            {"Plan entire rooms with"}
                          </_Builtin.Strong>
                          <br />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="m-paragraph-regular text-weight-medium"
                          tag="div"
                        >
                          {"Pro Designer"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className="m-icon-regular plan-fit"
                        bind="448c39f3-4a61-fe54-6223-b82d0ad09fd4"
                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block className="div-block-59" tag="div" />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.NavbarLink
              className="navbar-link white"
              data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09fd6"
              options={{
                href: "#",
                preload: "prerender",
              }}
            >
              <_Builtin.Block className=" nav-link" tag="div">
                {"eVRspace"}
              </_Builtin.Block>
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className="navbar-link white"
              data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09fd9"
              options={{
                href: "#",
                preload: "prerender",
              }}
            >
              <_Builtin.Block className=" nav-link" tag="div">
                {"About Us"}
              </_Builtin.Block>
            </_Builtin.NavbarLink>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton className="mobile-menu-button" tag="div">
            <_Builtin.Icon
              className="icon-6"
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
              bind="448c39f3-4a61-fe54-6223-b82d0ad09fdd"
            />
          </_Builtin.NavbarButton>
          <_Builtin.NavbarMenu
            className="navbar-right-menu"
            tag="nav"
            role="navigation"
          >
            <_Builtin.NavbarLink
              className="language white"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block className=" english" tag="div">
                {"EN"}
              </_Builtin.Block>
            </_Builtin.NavbarLink>
            <_Builtin.NotSupported _atom="UserLogOutLogIn" />
          </_Builtin.NavbarMenu>
        </_Builtin.Block>
        <_Builtin.Block className="navbar-translucent dropdown" tag="div" />
      </_Builtin.NavbarWrapper>
      <_Builtin.NavbarWrapper
        className="header"
        tag="div"
        bind="448c39f3-4a61-fe54-6223-b82d0ad09fe4"
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.Block className="navbar-content white" tag="div">
          <_Builtin.Link
            className="everyspace-logo-black"
            button={false}
            options={{
              href: "#",
              preload: "prefetch",
            }}
          >
            <_Builtin.Block className="navbar-brand-black" tag="div" />
          </_Builtin.Link>
          <_Builtin.NavbarMenu
            className="navbar-menu white"
            data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09fe8"
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className="menu-wide white"
              data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09fe9"
              tag="div"
            >
              <_Builtin.Block
                className="menu1 white"
                data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09fea"
                tag="div"
              >
                <_Builtin.Block className="menuhover black" tag="div" />
                <_Builtin.NavbarLink
                  className="navbar-link-hover black"
                  data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09fec"
                  options={{
                    href: "#",
                    preload: "prerender",
                  }}
                />
                <_Builtin.NavbarLink
                  className="navbar-link-hover black"
                  data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09fef"
                  options={{
                    href: "#",
                    preload: "prerender",
                  }}
                />
                <_Builtin.NavbarLink
                  className="navbar-link-hover black"
                  data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09ff2"
                  options={{
                    href: "#",
                    preload: "prerender",
                  }}
                />
                <_Builtin.NavbarLink
                  className="navbar-link-hover black"
                  data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09ff5"
                  options={{
                    href: "#",
                    preload: "prerender",
                  }}
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.DropdownWrapper
              className="navbar-link black"
              data-w-id="448c39f3-4a61-fe54-6223-b82d0ad09ff8"
              tag="div"
              bind="448c39f3-4a61-fe54-6223-b82d0ad09ff8"
              delay="0"
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="navbar-link-pick-fit black"
                tag="div"
              >
                <_Builtin.Block className="text-block-79 black" tag="div">
                  {"Pick & Fit"}
                </_Builtin.Block>
                <_Builtin.Icon
                  className="m-navigation-icon-arrow black"
                  widget={{
                    type: "icon",
                    icon: "dropdown-toggle",
                  }}
                  bind="448c39f3-4a61-fe54-6223-b82d0ad09ffc"
                />
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="m-navigation-list white"
                tag="nav"
              >
                <_Builtin.Block
                  className="dropdown-container-pick-fit"
                  tag="div"
                >
                  <_Builtin.Block
                    className="m-paragraph-regular pick-fit-rooms"
                    tag="div"
                  >
                    {"Rooms"}
                  </_Builtin.Block>
                  <_Builtin.Block className="m-navigation-pick-fit" tag="div">
                    <_Builtin.TabsWrapper
                      className="tabs-2 white"
                      current="Bathroom"
                      easing="ease"
                      fadeIn={300}
                      fadeOut={100}
                    >
                      <_Builtin.TabsMenu className="rooms-select" tag="div">
                        <_Builtin.TabsLink
                          className="room-tab white"
                          data-w-tab="Living Room"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit black"
                            tag="div"
                          >
                            {"Living Room"}
                          </_Builtin.Block>
                          <_Builtin.Block className="div-block-99" tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular black"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad0a008"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className="room-tab white"
                          data-w-tab="Kitchen"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit black"
                            tag="div"
                          >
                            {"Kitchen"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular black"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad0a00d"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className="room-tab white"
                          data-w-tab="Bedroom"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit black"
                            tag="div"
                          >
                            {"Bedroom"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular black"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad0a012"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className="room-tab white"
                          data-w-tab="Home Office"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit black"
                            tag="div"
                          >
                            {"Home Office"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular black"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad0a017"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className="room-tab white"
                          data-w-tab="Kidspace"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit black"
                            tag="div"
                          >
                            {"Kidspace"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular black"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad0a01c"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                        <_Builtin.TabsLink
                          className="room-tab white"
                          data-w-tab="Bathroom"
                        >
                          <_Builtin.Block
                            className="m-paragraph-regular pick-fit black"
                            tag="div"
                          >
                            {"Bathroom"}
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.HtmlEmbed
                              className="m-icon-regular black"
                              bind="448c39f3-4a61-fe54-6223-b82d0ad0a021"
                              value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsLink>
                      </_Builtin.TabsMenu>
                      <_Builtin.TabsContent
                        className="m-navigation-wrapper"
                        tag="div"
                      >
                        <_Builtin.TabsPane
                          className="tab-pane-living-room"
                          tag="div"
                          data-w-tab="Living Room"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit white"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper white"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title black"
                                    tag="div"
                                  >
                                    {"Living Room"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description black"
                                    tag="div"
                                  >
                                    {"For the moments you cherish the most."}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="m-navigation-link-grid"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a02d-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-61"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc99b380546d9f186c18_icons8-tv%20(1).svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"TV backdrop"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a033-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-103"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc9f637d3993fae998d8_icons8-sliding-door-closet.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Cabinet"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a039-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-102"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca1e9cbf0ee65494a8a_icons8-brick-wall%20(1).svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Wall Panel"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a03f-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-101"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black vanity"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433befeac66a42521009f90_icons8-dressing-table.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Sofa"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a045-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-100"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc99637d39b696e998cb_icons8-table.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Coffee Table"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a04b-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-63"
                                    tag="div"
                                  >
                                    <_Builtin.Image
                                      className="furniture-icon black"
                                      width="40"
                                      height="40"
                                      loading="eager"
                                      alt="__wf_reserved_inherit"
                                      src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc99ab91bb117da361bf_icons8-wooden-floor.svg"
                                    />
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Flooring"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                              </_Builtin.Grid>
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Explore Living Room"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a055"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-33">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a05b"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="eager"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6426f3d1cf54ff063cb2d73a_Screenshot%202023-03-10%20at%201.01.22%20AM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className="tab-pane-kitchen"
                          tag="div"
                          data-w-tab="Kitchen"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit white"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper white"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title black"
                                    tag="div"
                                  >
                                    {"Kitchen"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description black"
                                    tag="div"
                                  >
                                    {"Unleash your inner chef."}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="m-navigation-link-grid"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a067-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-61"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc9fbc4ac1496b5861ed_icons8-kitchen-room.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Kitchen Set"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a06d-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-64"
                                    tag="div"
                                  >
                                    <_Builtin.Image
                                      className="furniture-icon black"
                                      width="40"
                                      height="40"
                                      loading="eager"
                                      alt="__wf_reserved_inherit"
                                      src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc9fe9cbf0303f494a6f_icons8-cupboard%20(1).svg"
                                    />
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Kitchen Cabinet"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a073-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-65"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca11ddcb01d09f44d12_icons8-stove.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Kitchen Island"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a079-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-66"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="44"
                                        height="44"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc9f92ccecb16d3dac52_icons8-dining-table.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Dining Table"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                              </_Builtin.Grid>
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Explore Kitchen"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a083"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-33">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a089"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="eager"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/642aa2915b55392eae341797_Screenshot%202023-04-03%20at%204.53.30%20PM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className="tab-pane-bedroom"
                          tag="div"
                          data-w-tab="Bedroom"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit white"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper white"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title black"
                                    tag="div"
                                  >
                                    {"Bedroom"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description black"
                                    tag="div"
                                  >
                                    {
                                      "Comfort, from the moment you wake up until the sky says goodnight."
                                    }
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="m-navigation-link-grid"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a095-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-61"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca1a50b9c2e91723147_icons8-bed.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Bed Frame"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a09b-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-69"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca1e9cbf0ee65494a8a_icons8-brick-wall%20(1).svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Wall Panel"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a0a1-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-104"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black vanity"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433befeac66a42521009f90_icons8-dressing-table.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Vanity"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a0a7-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-68"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black sidatable"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc9f443cd2d646b0d924_icons8-console-table.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Side Table"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a0ad-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-98"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc9f3f44a74bc3757d55_icons8-closet.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Closet"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a0b3-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-67"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca1b03b848e07fb3222_icons8-bureau.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Closet Island"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                              </_Builtin.Grid>
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Explore Bedroom"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a0bd"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-32">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a0c3"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="eager"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6431436ecbc3b7ab4b49bc0c_Screenshot%202023-04-06%20at%2012.40.35%20PM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className="tab-pane-home-office"
                          tag="div"
                          data-w-tab="Home Office"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit white"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper white"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title black"
                                    tag="div"
                                  >
                                    {"Home Office"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description black"
                                    tag="div"
                                  >
                                    {"The space where great ideas are born."}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="m-navigation-link-grid"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a0cf-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-61"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black workdesk"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc991ddcb0ac4df44d00_icons8-desk%20(2).svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Workdesk Set"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a0d5-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-105"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc9f3f44a74bc3757d55_icons8-closet.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Cabinets"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a0db-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-106"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca1e9cbf0ee65494a8a_icons8-brick-wall%20(1).svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Wall Panel"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                              </_Builtin.Grid>
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Explore Home Office"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a0e5"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-33">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a0eb"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="eager"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/64129f17b78238e67ad6b245_Screenshot%202023-03-10%20at%201.03.36%20AM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className="tab-pane-kidspace"
                          tag="div"
                          data-w-tab="Kidspace"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit white"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper white"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title black"
                                    tag="div"
                                  >
                                    {"Kidspace"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description black"
                                    tag="div"
                                  >
                                    {
                                      "Where creativity and imagination have no boundaries."
                                    }
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="m-navigation-link-grid kidspace"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a0f7-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-61"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca1a50b9c2e91723147_icons8-bed.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Bed Frame"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a0fd-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-107"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black dreamwall"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bfe9ac66a4d50000ae74_icons8-rainbow.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"DreamWall"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a103-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-108"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black sidatable"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc9f443cd2d646b0d924_icons8-console-table.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Side Table"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a109-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-110"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black desk-kid"
                                        width="25"
                                        height="25"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca5ab91bb4029a363e8_icons8-desk.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Desk"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a10f-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-109"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc9f3f44a74bc3757d55_icons8-closet.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Cabinet"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a115-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-111"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bc9f637d3993fae998d8_icons8-sliding-door-closet.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Wardrobe"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                              </_Builtin.Grid>
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Explore Kidspace"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a11f"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-33">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a125"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="eager"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/64129f1eb78238162ed6b397_Screenshot%202023-03-16%20at%2011.46.00%20AM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                        <_Builtin.TabsPane
                          className="tab-pane-bathroom"
                          tag="div"
                          data-w-tab="Bathroom"
                        >
                          <_Builtin.Block
                            className="m-navigation-content pick-fit white"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="m-navigation-grid-wrapper white"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="dropdown-title"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="title-description"
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular title black"
                                    tag="div"
                                  >
                                    {"Bathroom"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className="m-paragraph-regular description black"
                                    tag="div"
                                  >
                                    {"Your at-home oasis."}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Grid
                                className="m-navigation-link-grid"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a131-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-61"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04 white"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black case"
                                        width="42"
                                        height="42"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca521ae13e349367fda_icons8-bathroom-mirror.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Bathroom Vanity"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a137-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-112"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca1b03b848e07fb3222_icons8-bureau.svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Cabinets"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-dropdown-link white"
                                  id="w-node-_448c39f3-4a61-fe54-6223-b82d0ad0a13d-0ad09e93"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="div-block-113"
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className="m-margin-bottom-04"
                                      tag="div"
                                    >
                                      <_Builtin.Image
                                        className="furniture-icon black wall"
                                        width="40"
                                        height="40"
                                        loading="eager"
                                        alt="__wf_reserved_inherit"
                                        src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6433bca1e9cbf0ee65494a8a_icons8-brick-wall%20(1).svg"
                                      />
                                      <_Builtin.Block
                                        className="m-paragraph-regular text-weight-semibold black"
                                        tag="div"
                                      >
                                        {"Wall Panel"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                              </_Builtin.Grid>
                              <_Builtin.Block
                                className="buttons-block"
                                tag="div"
                              >
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Explore Bathroom"}
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a147"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className="m-navigation-button-icon-right white"
                                  button={false}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  <_Builtin.Block
                                    className="m-paragraph-regular text-medium black"
                                    tag="div"
                                  >
                                    {"Learn more about "}
                                    <_Builtin.Span className="text-span-33">
                                      {"Pick&Fit"}
                                    </_Builtin.Span>
                                  </_Builtin.Block>
                                  <_Builtin.HtmlEmbed
                                    className="m-icon-regular black"
                                    bind="448c39f3-4a61-fe54-6223-b82d0ad0a14d"
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                </_Builtin.Link>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Image
                              className="m-navigation-featured-image"
                              width="auto"
                              height="auto"
                              loading="eager"
                              alt="__wf_reserved_inherit"
                              src="https://uploads-ssl.webflow.com/63fc0698f87ebe53ab32acc8/6412a1cbc3de72b3df9ffa4d_Screenshot%202023-03-16%20at%2011.54.05%20AM.webp"
                            />
                          </_Builtin.Block>
                        </_Builtin.TabsPane>
                      </_Builtin.TabsContent>
                    </_Builtin.TabsWrapper>
                    <_Builtin.Block className="home-solutions-select" tag="div">
                      <_Builtin.Block
                        className="m-paragraph-regular home-solutions"
                        tag="div"
                      >
                        {"home Solutions"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="m-navigation-link-plain white"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="m-paragraph-regular pick-fit black"
                          tag="div"
                        >
                          {"Everydoor™"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular black"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad0a155"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="m-navigation-link-plain white"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="m-paragraph-regular pick-fit black"
                          tag="div"
                        >
                          {"Everyfloor™"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular black"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad0a159"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="m-navigation-link-plain white"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="m-paragraph-regular pick-fit black"
                          tag="div"
                        >
                          {"Everylighting™"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular black"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad0a15d"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="m-navigation-link-plain white"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="m-paragraph-regular pick-fit black"
                          tag="div"
                        >
                          {"Everywall™"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular black"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad0a161"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="m-navigation-link-plain white"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="m-paragraph-regular pick-fit black"
                          tag="div"
                        >
                          {"Smart Home"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular black"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad0a165"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className="navbar-link black"
              data-w-id="448c39f3-4a61-fe54-6223-b82d0ad0a166"
              tag="div"
              bind="448c39f3-4a61-fe54-6223-b82d0ad0a166"
              delay="0"
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="navbar-link-pick-fit"
                tag="div"
              >
                <_Builtin.Block className="text-block-79 black" tag="div">
                  {"Plan & Fit"}
                </_Builtin.Block>
                <_Builtin.Icon
                  className="m-navigation-icon-arrow"
                  widget={{
                    type: "icon",
                    icon: "dropdown-toggle",
                  }}
                  bind="448c39f3-4a61-fe54-6223-b82d0ad0a16a"
                />
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="m-navigation-list-2 white"
                tag="nav"
                id="plan-fit-dropdown"
              >
                <_Builtin.Block className="m-container-large white" tag="div">
                  <_Builtin.Block className="more-select" tag="div">
                    <_Builtin.Link
                      className="plan-fit-details-link white"
                      button={false}
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block className="div-block-57" tag="div">
                        <_Builtin.Block
                          className="m-paragraph-regular plan-fit"
                          tag="div"
                        >
                          {"Plan & Fit"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="m-paragraph-mini text-weight-medium"
                          tag="div"
                        >
                          <_Builtin.Strong className="light-text-2 black">
                            {"Home furnishings and design made easy."}
                            <br />
                          </_Builtin.Strong>
                          <br />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block className="div-block-60 black" tag="div">
                        <_Builtin.Block
                          className="m-paragraph-mini text-weight-medium"
                          tag="div"
                        >
                          <_Builtin.Strong className="light-text black">
                            {"Learn More"}
                          </_Builtin.Strong>
                          <br />
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="m-icon-regular black"
                          bind="448c39f3-4a61-fe54-6223-b82d0ad0a17c"
                          value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block className="dropdown-select" tag="div">
                    <_Builtin.Link
                      className="verdes-dropdown-link"
                      button={false}
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block className="div-block-57" tag="div">
                        <_Builtin.Block
                          className="m-paragraph-mini text-weight-medium"
                          tag="div"
                        >
                          <_Builtin.Strong className="light-text">
                            {"Plan specific rooms with"}
                          </_Builtin.Strong>
                          <br />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="m-paragraph-regular text-weight-medium"
                          tag="div"
                        >
                          {"Verified Designer"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className="m-icon-regular plan-fit"
                        bind="448c39f3-4a61-fe54-6223-b82d0ad0a186"
                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block className="div-block-58" tag="div" />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="prodes-dropdown-link"
                      button={false}
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block className="div-block-57" tag="div">
                        <_Builtin.Block
                          className="m-paragraph-mini text-weight-medium"
                          tag="div"
                        >
                          <_Builtin.Strong className="light-text">
                            {"Plan entire rooms with"}
                          </_Builtin.Strong>
                          <br />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="m-paragraph-regular text-weight-medium"
                          tag="div"
                        >
                          {"Pro Designer"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className="m-icon-regular plan-fit"
                        bind="448c39f3-4a61-fe54-6223-b82d0ad0a190"
                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15.4766%2011.1666L11.0066%206.69664L12.1849%205.51831L18.6666%2012L12.1849%2018.4816L11.0066%2017.3033L15.4766%2012.8333H5.33325V11.1666H15.4766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block className="div-block-59" tag="div" />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.NavbarLink
              className="navbar-link black"
              data-w-id="448c39f3-4a61-fe54-6223-b82d0ad0a192"
              options={{
                href: "#",
                preload: "prerender",
              }}
            >
              <_Builtin.Block className=" nav-link black" tag="div">
                {"eVRspace"}
              </_Builtin.Block>
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className="navbar-link black"
              data-w-id="448c39f3-4a61-fe54-6223-b82d0ad0a195"
              options={{
                href: "#",
                preload: "prerender",
              }}
            >
              <_Builtin.Block className=" nav-link black" tag="div">
                {"About Us"}
              </_Builtin.Block>
            </_Builtin.NavbarLink>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton className="mobile-menu-button-white" tag="div">
            <_Builtin.Icon
              className="icon-6 black"
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
              bind="448c39f3-4a61-fe54-6223-b82d0ad0a199"
            />
          </_Builtin.NavbarButton>
          <_Builtin.NavbarMenu
            className="navbar-right-menu-black"
            tag="nav"
            role="navigation"
          >
            <_Builtin.NavbarLink
              className="language-filled"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block className=" eng-black" tag="div">
                {"EN"}
              </_Builtin.Block>
            </_Builtin.NavbarLink>
            <_Builtin.NotSupported _atom="UserLogOutLogIn" />
          </_Builtin.NavbarMenu>
        </_Builtin.Block>
        <_Builtin.Block className="navbar-translucent-white" tag="div" />
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
