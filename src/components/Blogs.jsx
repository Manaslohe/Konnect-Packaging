import React from "react";

function Blogs() {
  return (
    <div className="overflow-hidden relative mx-auto w-full max-w-none bg-white min-h-[1855px] max-md:p-5 max-md:max-w-[991px] max-md:min-h-[auto] max-sm:max-w-screen-sm">
      <div className="flex absolute top-12 z-10 items-center bg-black rounded-3xl h-[41px] left-[25px] w-[129px] max-sm:top-5 max-sm:h-[35px] max-sm:left-[15px] max-sm:w-[100px]">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="102:199" layer-name="ri:arrow-up-line" width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="back-arrow" style="width: 32px; height: 31px; transform: rotate(-90deg); position: absolute; left: 8px; top: 5px"> <path d="M10.111 14.6667L25.8332 14.6667L25.8332 17.3333L10.111 17.3333L17.0395 24.4853L15.2131 26.3707L5.1665 16L15.2131 5.62933L17.0395 7.51467L10.111 14.6667Z" fill="white"></path> </svg>',
            }}
          />
        </div>
        <div
          layer-name="BACK"
          className="absolute top-2 left-11 w-14 text-xl font-semibold text-white h-[25px] max-sm:text-base max-sm:left-[35px] max-sm:top-[5px]"
        >
          BACK
        </div>
      </div>
      <div className="absolute h-[777px] left-[25px] rounded-[352px_0px] top-[114px] w-[1390px] max-md:left-0 max-md:w-full max-md:rounded-[50px_0px]" />
      <div className="absolute h-[1627px] left-[25px] rounded-[343px_0px_344px_0px] top-[114px] w-[1390px] max-md:left-0 max-md:w-full max-md:rounded-[50px_0px]" />
      <div
        layer-name="BLOG"
        className="absolute top-32 text-9xl h-[188px] left-[762px] text-yellow-50 text-opacity-50 w-[600px] z-[1] max-md:left-2/4 max-md:text-7xl max-md:text-center max-md:-translate-x-2/4 max-sm:text-6xl max-sm:opacity-30"
      >
        BLOG
      </div>
      <div
        layer-name="FAQ"
        className="absolute text-9xl h-[188px] left-[753px] text-yellow-50 text-opacity-50 top-[1003px] w-[462px] z-[1] max-md:left-2/4 max-md:text-7xl max-md:text-center max-md:-translate-x-2/4 max-sm:text-6xl max-sm:opacity-30"
      >
        FAQ
      </div>
      <div className="relative z-[2]">
        <div
          layer-name="BLOG"
          className="absolute text-7xl text-black h-[88px] left-[799px] top-[228px] w-[280px] max-md:left-2/4 max-md:w-auto max-md:text-5xl max-md:text-center max-md:-translate-x-2/4 max-sm:text-4xl max-sm:top-[120px]"
        >
          BLOG
        </div>
        <div
          layer-name="INSIGHTS & UPDATES"
          className="absolute text-3xl font-medium text-black h-[37px] left-[830px] top-[310px] w-[656px] max-md:left-2/4 max-md:text-2xl max-md:text-center max-md:-translate-x-2/4 max-md:w-[90%] max-sm:text-xl max-sm:top-[180px]"
        >
          INSIGHTS &amp; UPDATES
        </div>
        <div
          layer-name="Stay informed with the latest trends, tips, and breakthroughs in sustainable packaging and industrial innovation."
          className="absolute text-xl text-black h-[72px] left-[830px] top-[355px] w-[569px] max-md:left-2/4 max-md:text-lg max-md:text-center max-md:-translate-x-2/4 max-md:w-[90%] max-sm:text-base max-sm:top-[220px]"
        >
          Stay informed with the latest trends, tips, and breakthroughs in
          sustainable packaging and industrial innovation.
        </div>
        <div className="absolute rounded-3xl border-2 border-white border-solid bg-white bg-opacity-50 h-[50px] left-[825px] top-[453px] w-[561px] max-md:left-2/4 max-md:-translate-x-2/4 max-md:w-[90%] max-sm:h-[45px] max-sm:top-[300px] max-sm:w-[95%]">
          <div
            layer-name="Search question here"
            className="absolute top-2.5 left-7 text-2xl italic font-thin h-[30px] text-black text-opacity-50 w-[359px] max-sm:top-2 max-sm:left-5 max-sm:text-lg"
          >
            Search question here
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="102:115" layer-name="iconamoon:search-thin" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon" style="width: 41px; height: 41px; transform: rotate(94.502deg); position: absolute; right: 15px; top: 5px"> <path d="M5.45141 35.7728L13.3433 29.033M13.3433 29.033C14.4962 30.383 15.9037 31.4926 17.4854 32.2986C19.0671 33.1046 20.7921 33.5912 22.5618 33.7305C24.3316 33.8699 26.1115 33.6593 27.7998 33.1108C29.4882 32.5623 31.052 31.6866 32.4019 30.5337C33.7519 29.3809 34.8615 27.9734 35.6675 26.3917C36.4735 24.81 36.9601 23.085 37.0995 21.3152C37.2388 19.5455 37.0282 17.7656 36.4797 16.0772C35.9312 14.3889 35.0555 12.8251 33.9027 11.4751C31.5743 8.74879 28.2584 7.05904 24.6842 6.7776C21.11 6.49616 17.5704 7.64608 14.8441 9.9744C12.1177 12.3027 10.428 15.6187 10.1465 19.1929C9.86508 22.7671 11.015 26.3067 13.3433 29.033Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
          </div>
        </div>
        <div className="absolute left-[77px] top-[427px] w-[600px] max-md:relative max-md:left-2/4 max-md:-translate-x-2/4 max-md:top-[100px] max-md:w-[90%] max-sm:top-[380px] max-sm:w-[95%]">
          <div className="flex relative items-start mb-5">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:133" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="bullet-point" style="width: 9px; height: 9px; position: absolute; left: 0; top: 7px"> <circle cx="4.5" cy="4.5" r="4.5" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div className="flex-1 ml-4 max-w-[518px]">
              <div
                layer-name="The Shift Toward Eco-Friendly Industrial Packaging"
                className="mb-1.5 text-xl font-medium text-black max-md:text-lg max-sm:text-base"
              >
                The Shift Toward Eco-Friendly Industrial Packaging
              </div>
              <div
                layer-name="Explore how sustainable materials are replacing traditional plastics in sectors like automotive and manufacturing."
                className="text-base text-black max-md:text-sm max-sm:text-sm"
              >
                Explore how sustainable materials are replacing traditional
                plastics in sectors like automotive and manufacturing.
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:137" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-circle" style="width: 42px; height: 42px; position: absolute; right: 0; top: 0"> <circle cx="21" cy="21" r="21" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:142" layer-name="ic:sharp-plus" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-plus" style="width: 36px; height: 36px; position: absolute; right: 3px; top: 3px"> <path d="M28.5 19.497H19.5V28.497H16.5V19.497H7.5V16.497H16.5V7.49701H19.5V16.497H28.5V19.497Z" fill="white"></path> </svg>',
                }}
              />
            </div>
          </div>
          <div className="mx-0 my-5 h-px bg-black w-[582px] max-sm:w-full" />
          <div className="flex relative items-start mb-5">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:134" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="bullet-point" style="width: 9px; height: 9px; position: absolute; left: 0; top: 7px"> <circle cx="4.5" cy="4.5" r="4.5" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div className="flex-1 ml-4 max-w-[518px]">
              <div
                layer-name="Why Aluminum-Backed Paper Is a Game Changer"
                className="mb-1.5 text-xl font-medium text-black max-md:text-lg max-sm:text-base"
              >
                Why Aluminum-Backed Paper Is a Game Changer
              </div>
              <div
                layer-name="Discover how Konnect's collaboration with Hindalco is transforming packaging with biodegradable and corrosion-resistant solutions."
                className="text-base text-black max-md:text-sm max-sm:text-sm"
              >
                Discover how Konnect's collaboration with Hindalco is
                transforming packaging with biodegradable and
                corrosion-resistant solutions.
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:144" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-circle" style="width: 42px; height: 42px; position: absolute; right: 0; top: 0"> <circle cx="21" cy="21" r="21" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:145" layer-name="ic:sharp-plus" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-plus" style="width: 36px; height: 36px; position: absolute; right: 3px; top: 3px"> <path d="M28.5 19.497H19.5V28.497H16.5V19.497H7.5V16.497H16.5V7.49701H19.5V16.497H28.5V19.497Z" fill="white"></path> </svg>',
                }}
              />
            </div>
          </div>
          <div className="mx-0 my-5 h-px bg-black w-[582px] max-sm:w-full" />
          <div className="flex relative items-start mb-5">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:135" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="bullet-point" style="width: 9px; height: 9px; position: absolute; left: 0; top: 7px"> <circle cx="4.5" cy="4.5" r="4.5" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div className="flex-1 ml-4 max-w-[518px]">
              <div
                layer-name="Solving the Problem of Packaging Waste in Heavy Industries"
                className="mb-1.5 text-xl font-medium text-black max-md:text-lg max-sm:text-base"
              >
                Solving the Problem of Packaging Waste in Heavy Industries
              </div>
              <div
                layer-name="Learn how single-layer biodegradable bags reduce cost, waste, and carbon footprint while maintaining strength and protection."
                className="text-base text-black max-md:text-sm max-sm:text-sm"
              >
                Learn how single-layer biodegradable bags reduce cost, waste,
                and carbon footprint while maintaining strength and protection.
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:147" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-circle" style="width: 42px; height: 42px; position: absolute; right: 0; top: 0"> <circle cx="21" cy="21" r="21" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:148" layer-name="ic:sharp-plus" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-plus" style="width: 36px; height: 36px; position: absolute; right: 3px; top: 3px"> <path d="M28.5 19.497H19.5V28.497H16.5V19.497H7.5V16.497H16.5V7.49701H19.5V16.497H28.5V19.497Z" fill="white"></path> </svg>',
                }}
              />
            </div>
          </div>
          <div className="mx-0 my-5 h-px bg-black w-[582px] max-sm:w-full" />
          <div className="flex relative items-start mb-5">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:136" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="bullet-point" style="width: 9px; height: 9px; position: absolute; left: 0; top: 7px"> <circle cx="4.5" cy="4.5" r="4.5" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div className="flex-1 ml-4 max-w-[518px]">
              <div
                layer-name="How Konnect Aligns with ESG & ZED Goals"
                className="mb-1.5 text-xl font-medium text-black max-md:text-lg max-sm:text-base"
              >
                How Konnect Aligns with ESG &amp; ZED Goals
              </div>
              <div
                layer-name="Find out how our products help businesses meet environmental mandates and secure government tenders through certified packaging."
                className="text-base text-black max-md:text-sm max-sm:text-sm"
              >
                Find out how our products help businesses meet environmental
                mandates and secure government tenders through certified
                packaging.
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:150" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-circle" style="width: 42px; height: 42px; position: absolute; right: 0; top: 0"> <circle cx="21" cy="21" r="21" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:151" layer-name="ic:sharp-plus" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-plus" style="width: 36px; height: 36px; position: absolute; right: 3px; top: 3px"> <path d="M28.5 19.497H19.5V28.497H16.5V19.497H7.5V16.497H16.5V7.49701H19.5V16.497H28.5V19.497Z" fill="white"></path> </svg>',
                }}
              />
            </div>
          </div>
          <div className="mx-0 my-5 h-px bg-black w-[582px] max-sm:w-full" />
        </div>
      </div>
      <div className="relative z-[2]">
        <div
          layer-name="FAQ"
          className="absolute text-7xl text-black h-[88px] left-[816px] top-[1103px] w-[193px] max-md:left-2/4 max-md:w-auto max-md:text-5xl max-md:text-center max-md:-translate-x-2/4 max-sm:text-4xl max-sm:top-[120px]"
        >
          FAQ
        </div>
        <div
          layer-name="QUESTIONS & ANSWERS"
          className="absolute text-3xl font-medium text-black h-[37px] left-[821px] top-[1185px] w-[656px] max-md:left-2/4 max-md:text-2xl max-md:text-center max-md:-translate-x-2/4 max-md:w-[90%] max-sm:text-xl max-sm:top-[180px]"
        >
          QUESTIONS &amp; ANSWERS
        </div>
        <div
          layer-name="Find quick answers to common questions about our sustainable packaging solutions, certifications, and services."
          className="absolute text-xl text-black h-[72px] left-[821px] top-[1230px] w-[569px] max-md:left-2/4 max-md:text-lg max-md:text-center max-md:-translate-x-2/4 max-md:w-[90%] max-sm:text-base max-sm:top-[220px]"
        >
          Find quick answers to common questions about our sustainable packaging
          solutions, certifications, and services.
        </div>
        <div className="absolute rounded-3xl border-2 border-white border-solid bg-white bg-opacity-50 h-[50px] left-[816px] top-[1328px] w-[561px] max-md:left-2/4 max-md:-translate-x-2/4 max-md:w-[90%] max-sm:h-[45px] max-sm:top-[300px] max-sm:w-[95%]">
          <div
            layer-name="Search question here"
            className="absolute top-2.5 left-7 text-2xl italic font-thin h-[30px] text-black text-opacity-50 w-[359px] max-sm:top-2 max-sm:left-5 max-sm:text-lg"
          >
            Search question here
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="102:161" layer-name="iconamoon:search-thin" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon" style="width: 41px; height: 41px; transform: rotate(94.502deg); position: absolute; right: 15px; top: 5px"> <path d="M5.45141 35.7728L13.3433 29.033M13.3433 29.033C14.4962 30.3829 15.9037 31.4926 17.4854 32.2986C19.0671 33.1046 20.7921 33.5912 22.5618 33.7305C24.3316 33.8699 26.1115 33.6593 27.7998 33.1108C29.4882 32.5623 31.052 31.6866 32.4019 30.5337C33.7519 29.3808 34.8615 27.9734 35.6675 26.3917C36.4735 24.81 36.9601 23.085 37.0995 21.3152C37.2388 19.5455 37.0282 17.7656 36.4797 16.0772C35.9312 14.3888 35.0555 12.825 33.9027 11.4751C31.5743 8.74876 28.2584 7.05901 24.6842 6.77757C21.11 6.49613 17.5704 7.64605 14.8441 9.97437C12.1177 12.3027 10.428 15.6187 10.1465 19.1929C9.86508 22.7671 11.015 26.3066 13.3433 29.033Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
          </div>
        </div>
        <div className="absolute left-[92px] top-[1281px] w-[600px] max-md:relative max-md:left-2/4 max-md:-translate-x-2/4 max-md:top-[100px] max-md:w-[90%] max-sm:top-[380px] max-sm:w-[95%]">
          <div className="flex relative items-start mb-5">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:171" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="bullet-point" style="width: 9px; height: 9px; position: absolute; left: 0; top: 7px"> <circle cx="4.5" cy="4.5" r="4.5" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div className="flex-1 ml-4 max-w-[518px]">
              <div
                layer-name="What makes Konnect's packaging eco-friendly?"
                className="mb-1.5 text-xl font-medium text-black max-md:text-lg max-sm:text-base"
              >
                What makes Konnect's packaging eco-friendly?
              </div>
              <div
                layer-name="Our packaging is made using biodegradable materials and solvent-free processes, significantly reducing environmental impact."
                className="text-base text-black max-md:text-sm max-sm:text-sm"
              >
                Our packaging is made using biodegradable materials and
                solvent-free processes, significantly reducing environmental
                impact.
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:175" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-circle" style="width: 42px; height: 42px; position: absolute; right: 0; top: 0"> <circle cx="21" cy="21" r="21" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:182" layer-name="ic:sharp-plus" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-plus" style="width: 36px; height: 36px; position: absolute; right: 3px; top: 3px"> <path d="M28.5 19.4969H19.5V28.4969H16.5V19.4969H7.5V16.4969H16.5V7.49695H19.5V16.4969H28.5V19.4969Z" fill="white"></path> </svg>',
                }}
              />
            </div>
          </div>
          <div className="mx-0 my-5 h-px bg-black w-[582px] max-sm:w-full" />
          <div className="flex relative items-start mb-5">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:172" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="bullet-point" style="width: 9px; height: 9px; position: absolute; left: 0; top: 7px"> <circle cx="4.5" cy="4.5" r="4.5" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div className="flex-1 ml-4 max-w-[518px]">
              <div
                layer-name="Are your products suitable for export?"
                className="mb-1.5 text-xl font-medium text-black max-md:text-lg max-sm:text-base"
              >
                Are your products suitable for export?
              </div>
              <div
                layer-name="Yes, our packaging solutions are certified with ROHS, CE, and ZED—making them ideal for global markets and government tenders."
                className="text-base text-black max-md:text-sm max-sm:text-sm"
              >
                Yes, our packaging solutions are certified with ROHS, CE, and
                ZED—making them ideal for global markets and government tenders.
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:176" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-circle" style="width: 42px; height: 42px; position: absolute; right: 0; top: 0"> <circle cx="21" cy="21" r="21" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:184" layer-name="ic:sharp-plus" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-plus" style="width: 36px; height: 36px; position: absolute; right: 3px; top: 3px"> <path d="M28.5 19.4969H19.5V28.4969H16.5V19.4969H7.5V16.4969H16.5V7.49695H19.5V16.4969H28.5V19.4969Z" fill="white"></path> </svg>',
                }}
              />
            </div>
          </div>
          <div className="mx-0 my-5 h-px bg-black w-[582px] max-sm:w-full" />
          <div className="flex relative items-start mb-5">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:173" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="bullet-point" style="width: 9px; height: 9px; position: absolute; left: 0; top: 7px"> <circle cx="4.5" cy="4.5" r="4.5" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div className="flex-1 ml-4 max-w-[518px]">
              <div
                layer-name="Can I customize the size and print of the bags?"
                className="mb-1.5 text-xl font-medium text-black max-md:text-lg max-sm:text-base"
              >
                Can I customize the size and print of the bags?
              </div>
              <div
                layer-name="Absolutely. We offer full customization options including size, lamination type, and branding prints to meet your exact requirements."
                className="text-base text-black max-md:text-sm max-sm:text-sm"
              >
                Absolutely. We offer full customization options including size,
                lamination type, and branding prints to meet your exact
                requirements.
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:177" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-circle" style="width: 42px; height: 42px; position: absolute; right: 0; top: 0"> <circle cx="21" cy="21" r="21" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:186" layer-name="ic:sharp-plus" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-plus" style="width: 36px; height: 36px; position: absolute; right: 3px; top: 3px"> <path d="M28.5 19.4969H19.5V28.4969H16.5V19.4969H7.5V16.4969H16.5V7.49695H19.5V16.4969H28.5V19.4969Z" fill="white"></path> </svg>',
                }}
              />
            </div>
          </div>
          <div className="mx-0 my-5 h-px bg-black w-[582px] max-sm:w-full" />
          <div className="flex relative items-start mb-5">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:174" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="bullet-point" style="width: 9px; height: 9px; position: absolute; left: 0; top: 7px"> <circle cx="4.5" cy="4.5" r="4.5" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div className="flex-1 ml-4 max-w-[518px]">
              <div
                layer-name="How long does VCI protection last in your packaging?"
                className="mb-1.5 text-xl font-medium text-black max-md:text-lg max-sm:text-base"
              >
                How long does VCI protection last in your packaging?
              </div>
              <div
                layer-name="Depending on the product type, our VCI (Volatile Corrosion Inhibitor) solutions offer protection from 8 months up to 5 years."
                className="text-base text-black max-md:text-sm max-sm:text-sm"
              >
                Depending on the product type, our VCI (Volatile Corrosion
                Inhibitor) solutions offer protection from 8 months up to 5
                years.
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:178" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-circle" style="width: 42px; height: 42px; position: absolute; right: 0; top: 0"> <circle cx="21" cy="21" r="21" fill="black"></circle> </svg>',
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="102:188" layer-name="ic:sharp-plus" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="expand-plus" style="width: 36px; height: 36px; position: absolute; right: 3px; top: 3px"> <path d="M28.5 19.4969H19.5V28.4969H16.5V19.4969H7.5V16.4969H16.5V7.49695H19.5V16.4969H28.5V19.4969Z" fill="white"></path> </svg>',
                }}
              />
            </div>
          </div>
          <div className="mx-0 my-5 h-px bg-black w-[582px] max-sm:w-full" />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
