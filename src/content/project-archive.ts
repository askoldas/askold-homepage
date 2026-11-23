import type { CaseGalleryImage } from "@/content/projects";

export interface ArchiveGroup { title: string; images: readonly CaseGalleryImage[] }

export const projectArchive: Readonly<Record<string, readonly ArchiveGroup[]>> = {
  "fixmobile": [
    {
      "title": "Identity & print",
      "images": [
        {
          "src": "/media/work/fixmobile-logo-after.webp",
          "alt": "FixMobile: redesigned logo",
          "width": 758,
          "height": 350,
          "caption": "Redesigned logo"
        },
        {
          "src": "/media/work/fixmobile-business-cards.webp",
          "alt": "FixMobile: business cards",
          "width": 1338,
          "height": 1338,
          "caption": "Business cards"
        },
        {
          "src": "/media/work/fixmobile-logo-before.webp",
          "alt": "FixMobile: logo before the redesign",
          "width": 758,
          "height": 350,
          "caption": "Logo before the redesign"
        },
        {
          "src": "/media/archive/fixmobile/fix-sq-before.webp",
          "alt": "FixMobile: earlier identity presentation",
          "width": 600,
          "height": 600,
          "caption": "Earlier identity presentation"
        },
        {
          "src": "/media/work/fixmobile-jersey.webp",
          "alt": "FixMobile: branded jersey presentation",
          "width": 525,
          "height": 525,
          "caption": "Branded jersey presentation"
        },
        {
          "src": "/media/work/fixmobile-logo-showcase.webp",
          "alt": "FixMobile: logo presentation",
          "width": 768,
          "height": 512,
          "caption": "Logo presentation"
        },
        {
          "src": "/media/archive/fixmobile/logo-showcase-2.webp",
          "alt": "FixMobile: identity application",
          "width": 768,
          "height": 1024,
          "caption": "Identity application"
        },
        {
          "src": "/media/archive/fixmobile/logo-showcase-3.webp",
          "alt": "FixMobile: identity materials",
          "width": 768,
          "height": 512,
          "caption": "Identity materials"
        },
        {
          "src": "/media/archive/fixmobile/logo-showcase.webp",
          "alt": "FixMobile: identity composition",
          "width": 1536,
          "height": 1024,
          "caption": "Identity composition"
        },
        {
          "src": "/media/archive/fixmobile/printed.webp",
          "alt": "FixMobile: printed brand materials",
          "width": 1449,
          "height": 1600,
          "caption": "Printed brand materials"
        }
      ]
    },
    {
      "title": "Campaigns & store communication",
      "images": [
        {
          "src": "/media/work/fixmobile-campaign.webp",
          "alt": "FixMobile: campaign presentation",
          "width": 1600,
          "height": 1000,
          "caption": "Campaign presentation"
        },
        {
          "src": "/media/archive/fixmobile/esam-atverti.webp",
          "alt": "FixMobile: store opening communication",
          "width": 960,
          "height": 960,
          "caption": "Store opening communication"
        },
        {
          "src": "/media/work/fixmobile-shop-display.webp",
          "alt": "FixMobile: indoor store display",
          "width": 960,
          "height": 960,
          "caption": "Indoor store display"
        },
        {
          "src": "/media/archive/fixmobile/opening.webp",
          "alt": "FixMobile: opening promotion",
          "width": 1200,
          "height": 628,
          "caption": "Opening promotion"
        }
      ]
    },
    {
      "title": "Storefront & product design",
      "images": [
        {
          "src": "/media/archive/fixmobile/cards.webp",
          "alt": "FixMobile: product card interface",
          "width": 340,
          "height": 778,
          "caption": "Product card interface"
        },
        {
          "src": "/media/archive/fixmobile/laptop-content.webp",
          "alt": "FixMobile: storefront presentation",
          "width": 1033,
          "height": 1600,
          "caption": "Storefront presentation"
        },
        {
          "src": "/media/archive/fixmobile/menu.webp",
          "alt": "FixMobile: website navigation",
          "width": 981,
          "height": 509,
          "caption": "Website navigation"
        },
        {
          "src": "/media/work/fixmobile-product.webp",
          "alt": "FixMobile: product detail interface",
          "width": 1600,
          "height": 608,
          "caption": "Product detail interface"
        },
        {
          "src": "/media/work/fixmobile-overview.webp",
          "alt": "FixMobile: website and identity overview",
          "width": 1600,
          "height": 1600,
          "caption": "Website and identity overview"
        }
      ]
    }
  ],
  "masterbean": [
    {
      "title": "Packaging",
      "images": [
        {
          "src": "/media/archive/masterbean/bag-1.webp",
          "alt": "MasterBean: coffee bag design",
          "width": 370,
          "height": 370,
          "caption": "Coffee bag design"
        },
        {
          "src": "/media/archive/masterbean/bag-2.webp",
          "alt": "MasterBean: coffee bag variation",
          "width": 370,
          "height": 370,
          "caption": "Coffee bag variation"
        },
        {
          "src": "/media/archive/masterbean/bag-3.webp",
          "alt": "MasterBean: coffee bag application",
          "width": 370,
          "height": 370,
          "caption": "Coffee bag application"
        },
        {
          "src": "/media/work/masterbean-bags.webp",
          "alt": "MasterBean: coffee packaging",
          "width": 1536,
          "height": 1024,
          "caption": "Coffee packaging"
        },
        {
          "src": "/media/archive/masterbean/pack-1.webp",
          "alt": "MasterBean: coffee package design",
          "width": 370,
          "height": 370,
          "caption": "Coffee package design"
        },
        {
          "src": "/media/archive/masterbean/pack-2.webp",
          "alt": "MasterBean: coffee package variation",
          "width": 370,
          "height": 370,
          "caption": "Coffee package variation"
        },
        {
          "src": "/media/archive/masterbean/pack-3.webp",
          "alt": "MasterBean: coffee package application",
          "width": 370,
          "height": 370,
          "caption": "Coffee package application"
        },
        {
          "src": "/media/work/masterbean-packages.webp",
          "alt": "MasterBean: packaging system",
          "width": 1536,
          "height": 1024,
          "caption": "Packaging system"
        }
      ]
    },
    {
      "title": "Identity & materials",
      "images": [
        {
          "src": "/media/archive/masterbean/burlap.webp",
          "alt": "MasterBean: identity on burlap",
          "width": 960,
          "height": 640,
          "caption": "Identity on burlap"
        },
        {
          "src": "/media/work/masterbean-logo.webp",
          "alt": "MasterBean: embossed identity",
          "width": 768,
          "height": 512,
          "caption": "Embossed identity"
        },
        {
          "src": "/media/archive/masterbean/logo-2.webp",
          "alt": "MasterBean: logo application",
          "width": 1024,
          "height": 1024,
          "caption": "Logo application"
        },
        {
          "src": "/media/archive/masterbean/logo-3.webp",
          "alt": "MasterBean: identity variation",
          "width": 1024,
          "height": 1024,
          "caption": "Identity variation"
        },
        {
          "src": "/media/archive/masterbean/logo-4.webp",
          "alt": "MasterBean: brand presentation",
          "width": 640,
          "height": 427,
          "caption": "Brand presentation"
        }
      ]
    },
    {
      "title": "Website",
      "images": [
        {
          "src": "/media/work/masterbean-overview.webp",
          "alt": "MasterBean: website design",
          "width": 1039,
          "height": 2441,
          "caption": "Website design"
        }
      ]
    }
  ],
  "rubinrub": [
    {
      "title": "Website & menus",
      "images": [
        {
          "src": "/media/work/rubinrub-booking.webp",
          "alt": "RubinRub: booking interface",
          "width": 960,
          "height": 688,
          "caption": "Booking interface"
        },
        {
          "src": "/media/work/rubinrub-menu.webp",
          "alt": "RubinRub: menu presentation",
          "width": 1200,
          "height": 1312,
          "caption": "Menu presentation"
        },
        {
          "src": "/media/archive/rubinrub/spec.webp",
          "alt": "RubinRub: menu interface",
          "width": 1600,
          "height": 912,
          "caption": "Menu interface"
        },
        {
          "src": "/media/work/rubinrub-cover.webp",
          "alt": "RubinRub: website design",
          "width": 1200,
          "height": 1321,
          "caption": "Website design"
        }
      ]
    },
    {
      "title": "Cafe & promotional visuals",
      "images": [
        {
          "src": "/media/archive/rubinrub/desert.webp",
          "alt": "RubinRub: drinks promotion",
          "width": 1479,
          "height": 793,
          "caption": "Drinks promotion"
        },
        {
          "src": "/media/archive/rubinrub/interior.webp",
          "alt": "RubinRub: cafe interior",
          "width": 800,
          "height": 1013,
          "caption": "Cafe interior"
        },
        {
          "src": "/media/archive/rubinrub/menu-cover.webp",
          "alt": "RubinRub: menu cover",
          "width": 1600,
          "height": 917,
          "caption": "Menu cover"
        },
        {
          "src": "/media/archive/rubinrub/roses.webp",
          "alt": "RubinRub: brand mark and floral presentation",
          "width": 1300,
          "height": 750,
          "caption": "Brand mark and floral presentation"
        },
        {
          "src": "/media/archive/rubinrub/video.webp",
          "alt": "RubinRub: promotional visual",
          "width": 1600,
          "height": 782,
          "caption": "Promotional visual"
        },
        {
          "src": "/media/archive/rubinrub/678517b4a3d73a68e009cd1e.webp",
          "alt": "RubinRub: food and drinks presentation",
          "width": 1200,
          "height": 675,
          "caption": "Food and drinks presentation"
        }
      ]
    }
  ],
  "stefanel-riga": [
    {
      "title": "Outdoor campaigns",
      "images": [
        {
          "src": "/media/archive/stefanel-riga/1.webp",
          "alt": "Stefanel Riga: outdoor campaign placement 1",
          "width": 640,
          "height": 960,
          "caption": "Outdoor campaign placement 1"
        },
        {
          "src": "/media/archive/stefanel-riga/2.webp",
          "alt": "Stefanel Riga: outdoor campaign placement 2",
          "width": 960,
          "height": 639,
          "caption": "Outdoor campaign placement 2"
        },
        {
          "src": "/media/archive/stefanel-riga/3.webp",
          "alt": "Stefanel Riga: outdoor campaign placement 3",
          "width": 640,
          "height": 960,
          "caption": "Outdoor campaign placement 3"
        },
        {
          "src": "/media/archive/stefanel-riga/4.webp",
          "alt": "Stefanel Riga: outdoor campaign placement 4",
          "width": 640,
          "height": 960,
          "caption": "Outdoor campaign placement 4"
        },
        {
          "src": "/media/archive/stefanel-riga/5.webp",
          "alt": "Stefanel Riga: outdoor campaign placement 5",
          "width": 640,
          "height": 960,
          "caption": "Outdoor campaign placement 5"
        },
        {
          "src": "/media/archive/stefanel-riga/6.webp",
          "alt": "Stefanel Riga: outdoor campaign placement 6",
          "width": 640,
          "height": 960,
          "caption": "Outdoor campaign placement 6"
        },
        {
          "src": "/media/archive/stefanel-riga/7.webp",
          "alt": "Stefanel Riga: outdoor campaign placement 7",
          "width": 640,
          "height": 960,
          "caption": "Outdoor campaign placement 7"
        },
        {
          "src": "/media/archive/stefanel-riga/8.webp",
          "alt": "Stefanel Riga: outdoor campaign placement 8",
          "width": 640,
          "height": 960,
          "caption": "Outdoor campaign placement 8"
        },
        {
          "src": "/media/archive/stefanel-riga/9.webp",
          "alt": "Stefanel Riga: outdoor campaign placement 9",
          "width": 640,
          "height": 960,
          "caption": "Outdoor campaign placement 9"
        }
      ]
    },
    {
      "title": "Retail displays",
      "images": [
        {
          "src": "/media/archive/stefanel-riga/display.webp",
          "alt": "Stefanel Riga: retail display",
          "width": 1600,
          "height": 1101,
          "caption": "Retail display"
        },
        {
          "src": "/media/archive/stefanel-riga/hang-1.webp",
          "alt": "Stefanel Riga: in-store product arrangement",
          "width": 1200,
          "height": 610,
          "caption": "In-store product arrangement"
        },
        {
          "src": "/media/work/stefanel-riga-merchandising.webp",
          "alt": "Stefanel Riga: visual merchandising",
          "width": 1200,
          "height": 891,
          "caption": "Visual merchandising"
        },
        {
          "src": "/media/archive/stefanel-riga/hang-3.webp",
          "alt": "Stefanel Riga: retail presentation",
          "width": 805,
          "height": 1200,
          "caption": "Retail presentation"
        }
      ]
    },
    {
      "title": "Print & marketing",
      "images": [
        {
          "src": "/media/work/stefanel-riga-print.webp",
          "alt": "Stefanel Riga: marketing materials",
          "width": 1200,
          "height": 669,
          "caption": "Marketing materials"
        },
        {
          "src": "/media/work/stefanel-riga-cover.webp",
          "alt": "Stefanel Riga: fashion retail presentation",
          "width": 1600,
          "height": 1060,
          "caption": "Fashion retail presentation"
        },
        {
          "src": "/media/archive/stefanel-riga/poster.webp",
          "alt": "Stefanel Riga: print poster",
          "width": 320,
          "height": 480,
          "caption": "Print poster"
        }
      ]
    }
  ],
  "btx-outlet": [
    {
      "title": "Products & commerce",
      "images": [
        {
          "src": "/media/archive/btx-outlet/1.webp",
          "alt": "BTX Outlet: product photograph 1",
          "width": 352,
          "height": 352,
          "caption": "Product photograph 1"
        },
        {
          "src": "/media/archive/btx-outlet/2.webp",
          "alt": "BTX Outlet: product photograph 2",
          "width": 352,
          "height": 352,
          "caption": "Product photograph 2"
        },
        {
          "src": "/media/archive/btx-outlet/3.webp",
          "alt": "BTX Outlet: product photograph 3",
          "width": 352,
          "height": 352,
          "caption": "Product photograph 3"
        },
        {
          "src": "/media/archive/btx-outlet/4.webp",
          "alt": "BTX Outlet: product photograph 4",
          "width": 352,
          "height": 352,
          "caption": "Product photograph 4"
        },
        {
          "src": "/media/archive/btx-outlet/5.webp",
          "alt": "BTX Outlet: product photograph 5",
          "width": 352,
          "height": 352,
          "caption": "Product photograph 5"
        },
        {
          "src": "/media/archive/btx-outlet/6.webp",
          "alt": "BTX Outlet: product photograph 6",
          "width": 352,
          "height": 352,
          "caption": "Product photograph 6"
        },
        {
          "src": "/media/archive/btx-outlet/7.webp",
          "alt": "BTX Outlet: product photograph 7",
          "width": 352,
          "height": 352,
          "caption": "Product photograph 7"
        },
        {
          "src": "/media/archive/btx-outlet/8.webp",
          "alt": "BTX Outlet: product photograph 8",
          "width": 352,
          "height": 352,
          "caption": "Product photograph 8"
        },
        {
          "src": "/media/work/btx-outlet-shop.webp",
          "alt": "BTX Outlet: online store",
          "width": 1425,
          "height": 880,
          "caption": "Online store"
        },
        {
          "src": "/media/work/btx-outlet-product.webp",
          "alt": "BTX Outlet: product presentation",
          "width": 700,
          "height": 580,
          "caption": "Product presentation"
        },
        {
          "src": "/media/archive/btx-outlet/product-2.webp",
          "alt": "BTX Outlet: product detail presentation",
          "width": 700,
          "height": 580,
          "caption": "Product detail presentation"
        },
        {
          "src": "/media/archive/btx-outlet/product-3.webp",
          "alt": "BTX Outlet: product page variation",
          "width": 700,
          "height": 580,
          "caption": "Product page variation"
        },
        {
          "src": "/media/archive/btx-outlet/shoe.webp",
          "alt": "BTX Outlet: footwear presentation",
          "width": 1000,
          "height": 598,
          "caption": "Footwear presentation"
        }
      ]
    },
    {
      "title": "Identity",
      "images": [
        {
          "src": "/media/work/btx-outlet-logo-after.webp",
          "alt": "BTX Outlet: redesigned logo",
          "width": 758,
          "height": 350,
          "caption": "Redesigned logo"
        },
        {
          "src": "/media/work/btx-outlet-logo-before.webp",
          "alt": "BTX Outlet: previous logo",
          "width": 758,
          "height": 350,
          "caption": "Previous logo"
        },
        {
          "src": "/media/archive/btx-outlet/logo-dark.webp",
          "alt": "BTX Outlet: logo on a dark ground",
          "width": 768,
          "height": 512,
          "caption": "Logo on a dark ground"
        },
        {
          "src": "/media/archive/btx-outlet/logo-light.webp",
          "alt": "BTX Outlet: logo on a light ground",
          "width": 768,
          "height": 512,
          "caption": "Logo on a light ground"
        }
      ]
    },
    {
      "title": "Campaigns & retail",
      "images": [
        {
          "src": "/media/archive/btx-outlet/bernu.webp",
          "alt": "BTX Outlet: children's collection promotion",
          "width": 678,
          "height": 681,
          "caption": "Children's collection promotion"
        },
        {
          "src": "/media/archive/btx-outlet/billboard.webp",
          "alt": "BTX Outlet: billboard presentation",
          "width": 1200,
          "height": 707,
          "caption": "Billboard presentation"
        },
        {
          "src": "/media/archive/btx-outlet/black-friday.webp",
          "alt": "BTX Outlet: black friday campaign",
          "width": 1200,
          "height": 628,
          "caption": "Black Friday campaign"
        },
        {
          "src": "/media/work/btx-outlet-cover.webp",
          "alt": "BTX Outlet: retail brand presentation",
          "width": 1400,
          "height": 639,
          "caption": "Retail brand presentation"
        },
        {
          "src": "/media/archive/btx-outlet/poster-center.webp",
          "alt": "BTX Outlet: seasonal campaign poster",
          "width": 400,
          "height": 550,
          "caption": "Seasonal campaign poster"
        },
        {
          "src": "/media/archive/btx-outlet/poster-left.webp",
          "alt": "BTX Outlet: seasonal campaign design",
          "width": 400,
          "height": 550,
          "caption": "Seasonal campaign design"
        },
        {
          "src": "/media/archive/btx-outlet/poster-right.webp",
          "alt": "BTX Outlet: seasonal promotional poster",
          "width": 400,
          "height": 550,
          "caption": "Seasonal promotional poster"
        }
      ]
    }
  ],
  "seoquill": [
    {
      "title": "Website & ordering",
      "images": [
        {
          "src": "/media/archive/seoquill/about-us.webp",
          "alt": "SeoQuill: about page design",
          "width": 567,
          "height": 1600,
          "caption": "About page design"
        },
        {
          "src": "/media/work/seoquill-overview.webp",
          "alt": "SeoQuill: complete homepage design",
          "width": 600,
          "height": 2314,
          "caption": "Complete homepage design"
        },
        {
          "src": "/media/work/seoquill-order.webp",
          "alt": "SeoQuill: content-ordering interface",
          "width": 1600,
          "height": 2436,
          "caption": "Content-ordering interface"
        },
        {
          "src": "/media/archive/seoquill/services.webp",
          "alt": "SeoQuill: services page design",
          "width": 550,
          "height": 1600,
          "caption": "Services page design"
        }
      ]
    },
    {
      "title": "Visual identity",
      "images": [
        {
          "src": "/media/work/seoquill-logo.webp",
          "alt": "SeoQuill: logo presentation",
          "width": 1024,
          "height": 1024,
          "caption": "Logo presentation"
        },
        {
          "src": "/media/archive/seoquill/logo-vert.webp",
          "alt": "SeoQuill: vertical identity presentation",
          "width": 364,
          "height": 1024,
          "caption": "Vertical identity presentation"
        },
        {
          "src": "/media/archive/seoquill/seoquill-fav1.webp",
          "alt": "SeoQuill: identity mark",
          "width": 500,
          "height": 500,
          "caption": "Identity mark"
        },
        {
          "src": "/media/archive/seoquill/seoquill-fav2.webp",
          "alt": "SeoQuill: alternate identity mark",
          "width": 500,
          "height": 500,
          "caption": "Alternate identity mark"
        }
      ]
    }
  ]
};
