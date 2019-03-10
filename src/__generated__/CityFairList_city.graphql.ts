/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _CityFairList_city$ref: unique symbol;
export type CityFairList_city$ref = typeof _CityFairList_city$ref;
export type CityFairList_city = {
    readonly fairs: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly id: string;
                readonly name: string | null;
                readonly exhibition_period: string | null;
                readonly counts: ({
                    readonly partners: any | null;
                }) | null;
                readonly location: ({
                    readonly coordinates: ({
                        readonly lat: number | null;
                        readonly lng: number | null;
                    }) | null;
                }) | null;
                readonly image: ({
                    readonly image_url: string | null;
                    readonly aspect_ratio: number;
                    readonly url: string | null;
                }) | null;
                readonly profile: ({
                    readonly icon: ({
                        readonly id: string | null;
                        readonly href: string | null;
                        readonly height: number | null;
                        readonly width: number | null;
                        readonly url: string | null;
                    }) | null;
                    readonly __id: string;
                    readonly id: string;
                    readonly name: string | null;
                }) | null;
                readonly start_at: string | null;
                readonly end_at: string | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": CityFairList_city$ref;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CityFairList_city",
  "type": "City",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "fairs"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 20
    },
    {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": ""
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "fairs",
      "name": "__CityFairList_fairs_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "FairConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "FairEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Fair",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "image",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Image",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "image_url",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "aspect_ratio",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "url",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                v0,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "exhibition_period",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "counts",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "FairCounts",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "partners",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "location",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Location",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "coordinates",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "LatLng",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "lat",
                          "args": null,
                          "storageKey": null
                        },
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "lng",
                          "args": null,
                          "storageKey": null
                        }
                      ]
                    },
                    v1
                  ]
                },
                v2,
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "profile",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Profile",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "icon",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "Image",
                      "plural": false,
                      "selections": [
                        v0,
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "href",
                          "args": null,
                          "storageKey": null
                        },
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "height",
                          "args": null,
                          "storageKey": null
                        },
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "width",
                          "args": null,
                          "storageKey": null
                        },
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "url",
                          "args": [
                            {
                              "kind": "Literal",
                              "name": "version",
                              "value": "square140",
                              "type": "[String]"
                            }
                          ],
                          "storageKey": "url(version:\"square140\")"
                        }
                      ]
                    },
                    v1,
                    v0,
                    v2
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "start_at",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "end_at",
                  "args": null,
                  "storageKey": null
                },
                v1,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '8fa164c04b77d6317a4e7c33b8e77196';
export default node;