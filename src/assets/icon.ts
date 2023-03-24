type Icon = {
  [key: string]: {
    value: string;
    defs?: string;
  };
};

const icon: Icon = {
  TypeScript: {
    value: `<g clip-path="url(#clip0_1013_109)" size="62">
    <rect x="2.38525" y="22.4702" width="56.2182" height="36.2397" fill="white"/>
    <path d="M2.90625 0C1.29683 0 0 1.29683 0 2.90625V59.0938C0 60.7032 1.29683 62 2.90625 62H59.0938C60.7032 62 62 60.7032 62 59.0938V2.90625C62 1.29683 60.7032 0 59.0938 0H2.90625ZM47.7607 25.1875C49.3417 25.1875 50.7418 25.2831 51.9637 25.4742C53.1162 25.6469 54.2472 25.9414 55.3376 26.3526V32.7024C54.8142 32.3404 54.2581 32.0282 53.6765 31.7698C53.0767 31.5 52.4576 31.2754 51.8242 31.0982C50.6245 30.7639 49.3858 30.5901 48.1404 30.5815C47.3654 30.5815 46.6602 30.6538 46.0247 30.8037C45.4583 30.9248 44.9149 31.1359 44.4152 31.4288C43.9761 31.6975 43.6402 32.0204 43.4 32.395C43.1584 32.7725 43.0326 33.2126 43.0383 33.6608C43.0383 34.1672 43.1752 34.6244 43.4413 35.0274C43.71 35.4304 44.0923 35.8127 44.5858 36.1744C45.0792 36.5361 45.6785 36.8874 46.3837 37.2336C47.089 37.5823 47.8872 37.9414 48.7759 38.3083C49.9901 38.8172 51.0802 39.3597 52.0464 39.9306C53.0126 40.5041 53.8418 41.1525 54.5342 41.8758C55.2265 42.5966 55.7535 43.4207 56.1203 44.3481C56.4872 45.2755 56.6732 46.3527 56.6732 47.585C56.6732 49.2822 56.3503 50.7108 55.7096 51.863C55.0836 52.9993 54.1853 53.9625 53.0952 54.6659C51.9203 55.4109 50.6181 55.9329 49.2538 56.2056C47.7917 56.5156 46.2494 56.6706 44.6297 56.6706C43.0355 56.6776 41.4441 56.5357 39.8763 56.2469C38.5199 56.0123 37.2044 55.5834 35.9703 54.9733V48.1792C38.3051 50.1661 41.2669 51.264 44.3326 51.2792C45.1928 51.2792 45.9446 51.2017 46.5853 51.0467C47.2285 50.8917 47.7632 50.6747 48.1947 50.4008C48.6235 50.1218 48.9438 49.7963 49.1582 49.4192C49.3952 48.98 49.503 48.4828 49.4692 47.9849C49.4354 47.4871 49.2613 47.009 48.9671 46.6059C48.5833 46.098 48.1138 45.6609 47.5798 45.3143C46.9176 44.8753 46.2203 44.4917 45.4951 44.1672C44.6355 43.7747 43.7682 43.3992 42.8937 43.0409C40.5222 42.0515 38.7552 40.8399 37.5901 39.4113C36.4276 37.9827 35.8438 36.2545 35.8438 34.2318C35.8438 32.6456 36.1615 31.2842 36.797 30.1449C37.4325 29.0057 38.2953 28.0679 39.3907 27.3317C40.5492 26.5674 41.8354 26.017 43.1882 25.7067C44.6864 25.3535 46.2213 25.1792 47.7607 25.1875ZM8.71875 25.6732H33.4232V31.2687H24.5572V56.1875H17.5382V31.2687H8.71875V25.6732Z" fill="#007ACC"/>
    </g>`,
    defs: `<clipPath id="clip0_1013_109">
    <rect width="62" height="62" fill="white"/>
    </clipPath>`,
  },
  JavaScript: {
    value: `<g clip-path="url(#clip0_1052_61)" size="62">
    <path d="M0 0H62V62H0V0Z" fill="#F7DF1E"/>
    <path d="M16.302 51.8117L21.0465 48.9403C21.9619 50.5632 22.7946 51.9364 24.7919 51.9364C26.7064 51.9364 27.9137 51.1876 27.9137 48.2746V28.4641H33.74V48.3569C33.74 54.3915 30.2026 57.1384 25.0416 57.1384C20.3807 57.1384 17.6752 54.7245 16.3018 51.8112M36.9046 51.1873L41.6486 48.4407C42.8976 50.4802 44.5207 51.9783 47.3921 51.9783C49.8065 51.9783 51.3458 50.7713 51.3458 49.1065C51.3458 47.1089 49.7643 46.4012 47.1007 45.2363L45.6445 44.6115C41.4408 42.8224 38.6525 40.5749 38.6525 35.8305C38.6525 31.4605 41.9819 28.1309 47.1843 28.1309C50.8883 28.1309 53.5519 29.4212 55.4661 32.7922L50.9295 35.7058C49.9305 33.9162 48.8488 33.2088 47.1841 33.2088C45.4776 33.2088 44.3955 34.2909 44.3955 35.7058C44.3955 37.4536 45.4776 38.1615 47.9746 39.2436L49.4311 39.8677C54.3838 41.9905 57.1721 44.1545 57.1721 49.0234C57.1721 54.2677 53.052 57.1391 47.5168 57.1391C42.1066 57.1391 38.6106 54.5588 36.9044 51.1876" fill="black"/>
    </g>`,
    defs: `<defs>
    <clipPath id="clip0_1052_61">
    <rect width="62" height="62" fill="white"/>
    </clipPath>
    </defs>`,
  },
  CSS: {
    value: `<g size="32">
    <path d="M4.78125 30.5469L1.99219 0H31.9414L29.2188 30.5469L17 34" fill="#264DE4"/>
    <path d="M17 2.45703V31.3438L26.8945 28.6211L29.2188 2.45703" fill="#2965F1"/>
    <path d="M7.57031 6.24219H17V9.96094H7.90234M8.23438 13.8125H17V17.5977H8.56641M8.76562 19.457H12.4844L12.75 22.4453L17 23.5742V27.4922L9.23047 25.3672" fill="#EBEBEB"/>
    <path d="M17 13.8125V17.5977H21.582L21.1172 22.4453L17 23.5742V27.4922L24.6367 25.3672L26.3633 6.24219H17V9.96094H22.3125L21.9473 13.8125H17Z" fill="white"/>
    </g>
    `,
  },
  HTML: {
    value: `<g size="62">
    <path d="M11.4356 52.7019L7.08203 3.875H54.9189L50.5595 52.6942L30.9714 58.125L11.4356 52.7019Z" fill="#E44F26"/>
    <path d="M31 53.9749L46.8294 49.5864L50.5532 7.86816H31V53.9749Z" fill="#F1662A"/>
    <path d="M31 25.976H23.0756L22.5293 19.8438H31V13.855H30.9787H15.9844L16.1278 15.4631L17.5983 31.9648H31V25.976Z" fill="#EBEBEB"/>
    <path d="M30.9995 41.5283L30.9724 41.5361L24.3035 39.7361L23.8773 34.9602H20.6359H17.8652L18.7042 44.361L30.9724 47.7671L30.9995 47.7593V41.5283Z" fill="#EBEBEB"/>
    <path d="M30.9785 25.9761V31.9649H38.3526L37.659 39.7323L30.9785 41.5342V47.7652L43.2565 44.361L43.3456 43.3496L44.7522 27.5842L44.8995 25.9761H43.2855H30.9785Z" fill="white"/>
    <path d="M30.9785 13.855V17.575V19.8302V19.8438H45.4245H45.4439L45.564 18.4992L45.8372 15.4631L45.9806 13.855H30.9785Z" fill="white"/>
    </g>`,
  },
  SCSS: {
    value: `<g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_1052_76)" size="32">
    <path d="M27.5374 13.7876C26.4187 13.7938 25.4499 14.0626 24.6374 14.4626C24.3374 13.8688 24.0374 13.3501 23.9874 12.9626C23.9312 12.5126 23.8624 12.2376 23.9312 11.7001C23.9999 11.1626 24.3124 10.4001 24.3124 10.3376C24.3062 10.2813 24.2437 10.0063 23.5999 10.0001C22.9562 9.99385 22.3999 10.1251 22.3374 10.2938C22.2749 10.4626 22.1499 10.8501 22.0687 11.2501C21.9562 11.8376 20.7812 13.9188 20.1124 15.0126C19.8937 14.5876 19.7062 14.2126 19.6687 13.9126C19.6124 13.4626 19.5437 13.1876 19.6124 12.6501C19.6812 12.1126 19.9937 11.3501 19.9937 11.2876C19.9874 11.2313 19.9249 10.9563 19.2812 10.9501C18.6374 10.9438 18.0812 11.0751 18.0187 11.2438C17.9562 11.4126 17.8874 11.8126 17.7499 12.2001C17.6187 12.5876 16.0562 16.0626 15.6499 16.9688C15.4437 17.4313 15.2624 17.8001 15.1312 18.0501C14.9999 18.3001 15.1249 18.0688 15.1124 18.0938C14.9999 18.3063 14.9374 18.4251 14.9374 18.4251V18.4313C14.8499 18.5876 14.7562 18.7376 14.7124 18.7376C14.6812 18.7376 14.6187 18.3188 14.7249 17.7438C14.9562 16.5376 15.5187 14.6563 15.5124 14.5876C15.5124 14.5563 15.6187 14.2251 15.1499 14.0563C14.6937 13.8876 14.5312 14.1688 14.4937 14.1688C14.4562 14.1688 14.4249 14.2688 14.4249 14.2688C14.4249 14.2688 14.9312 12.1501 13.4562 12.1501C12.5312 12.1501 11.2562 13.1563 10.6249 14.0751C10.2249 14.2938 9.3749 14.7563 8.47491 15.2501C8.13116 15.4376 7.7749 15.6376 7.4374 15.8188L7.36865 15.7438C5.58115 13.8376 2.2749 12.4876 2.4124 9.9251C2.4624 8.99385 2.7874 6.5376 8.7624 3.5626C13.6562 1.1251 17.5749 1.79385 18.2562 3.28135C19.2249 5.40635 16.1624 9.35635 11.0749 9.9251C9.1374 10.1438 8.11865 9.39385 7.8624 9.1126C7.59365 8.81885 7.55615 8.80635 7.45615 8.8626C7.29365 8.9501 7.39365 9.2126 7.45615 9.36885C7.60615 9.7626 8.23115 10.4626 9.29365 10.8126C10.2249 11.1188 12.4999 11.2876 15.2499 10.2251C18.3312 9.03135 20.7374 5.71885 20.0312 2.9501C19.3124 0.131349 14.6374 -0.793651 10.2187 0.775099C7.5874 1.7126 4.7374 3.1751 2.6874 5.09385C0.249905 7.36885 -0.137595 9.35635 0.0249048 10.1813C0.593655 13.1251 4.6499 15.0438 6.2749 16.4626C6.19365 16.5063 6.11865 16.5501 6.0499 16.5876C5.2374 16.9876 2.14365 18.6063 1.36865 20.3188C0.493655 22.2563 1.50615 23.6501 2.18115 23.8376C4.26866 24.4188 6.40615 23.3751 7.5624 21.6563C8.7124 19.9376 8.5749 17.7063 8.04365 16.6876L8.0249 16.6501L8.66241 16.2751C9.07491 16.0313 9.48115 15.8063 9.8374 15.6126C9.6374 16.1563 9.49365 16.8001 9.41865 17.7376C9.33115 18.8376 9.78115 20.2626 10.3749 20.8251C10.6374 21.0688 10.9499 21.0751 11.1437 21.0751C11.8312 21.0751 12.1437 20.5063 12.4874 19.8251C12.9124 18.9938 13.2874 18.0313 13.2874 18.0313C13.2874 18.0313 12.8187 20.6376 14.0999 20.6376C14.5687 20.6376 15.0374 20.0313 15.2499 19.7188V19.7251C15.2499 19.7251 15.2624 19.7063 15.2874 19.6626C15.3374 19.5876 15.3624 19.5438 15.3624 19.5438V19.5313C15.5499 19.2063 15.9687 18.4626 16.5937 17.2313C17.3999 15.6438 18.1749 13.6563 18.1749 13.6563C18.1749 13.6563 18.2499 14.1438 18.4812 14.9438C18.6187 15.4188 18.9187 15.9376 19.1499 16.4438C18.9624 16.7063 18.8499 16.8563 18.8499 16.8563L18.8562 16.8626C18.7062 17.0626 18.5374 17.2751 18.3624 17.4876C17.7249 18.2501 16.9624 19.1188 16.8624 19.3688C16.7437 19.6626 16.7687 19.8813 16.9999 20.0563C17.1687 20.1813 17.4687 20.2063 17.7874 20.1813C18.3624 20.1438 18.7624 20.0001 18.9624 19.9126C19.2749 19.8001 19.6312 19.6313 19.9749 19.3813C20.5999 18.9188 20.9812 18.2626 20.9437 17.3876C20.9249 16.9063 20.7687 16.4313 20.5749 15.9813C20.6312 15.9001 20.6874 15.8188 20.7437 15.7313C21.7312 14.2876 22.4937 12.7001 22.4937 12.7001C22.4937 12.7001 22.5687 13.1876 22.7999 13.9876C22.9187 14.3938 23.1562 14.8376 23.3687 15.2751C22.4437 16.0313 21.8624 16.9063 21.6624 17.4813C21.2937 18.5438 21.5812 19.0251 22.1249 19.1376C22.3687 19.1876 22.7187 19.0751 22.9812 18.9626C23.3062 18.8563 23.6999 18.6751 24.0624 18.4063C24.6874 17.9438 25.2874 17.3001 25.2562 16.4313C25.2374 16.0313 25.1312 15.6376 24.9874 15.2626C25.7749 14.9376 26.7937 14.7501 28.0874 14.9063C30.8687 15.2313 31.4187 16.9688 31.3124 17.6938C31.2062 18.4188 30.6249 18.8188 30.4312 18.9438C30.2374 19.0626 30.1749 19.1063 30.1937 19.1938C30.2187 19.3251 30.3062 19.3188 30.4749 19.2938C30.7062 19.2563 31.9374 18.7001 31.9874 17.3626C32.0624 15.6438 30.4312 13.7688 27.5374 13.7876ZM6.0874 21.0188C5.16865 22.0251 3.8749 22.4063 3.3249 22.0813C2.73115 21.7376 2.9624 20.2563 4.09365 19.1876C4.78115 18.5376 5.6749 17.9376 6.2624 17.5688C6.39365 17.4876 6.59365 17.3688 6.83115 17.2251C6.86865 17.2001 6.89365 17.1876 6.89365 17.1876C6.9374 17.1626 6.9874 17.1313 7.0374 17.1001C7.45615 18.6251 7.05615 19.9626 6.0874 21.0188ZM12.8062 16.4501C12.4874 17.2313 11.8124 19.2376 11.4062 19.1251C11.0562 19.0313 10.8437 17.5126 11.3374 16.0126C11.5874 15.2563 12.1187 14.3563 12.4312 14.0063C12.9374 13.4438 13.4874 13.2563 13.6249 13.4876C13.7874 13.7876 13.0062 15.9626 12.8062 16.4501ZM18.3499 19.1001C18.2124 19.1688 18.0874 19.2188 18.0312 19.1813C17.9874 19.1563 18.0874 19.0626 18.0874 19.0626C18.0874 19.0626 18.7812 18.3188 19.0562 17.9751C19.2124 17.7751 19.3999 17.5438 19.5999 17.2813V17.3563C19.5999 18.2563 18.7374 18.8563 18.3499 19.1001ZM22.6249 18.1251C22.5249 18.0501 22.5374 17.8188 22.8749 17.0938C23.0062 16.8063 23.3062 16.3251 23.8249 15.8688C23.8874 16.0563 23.9249 16.2376 23.9187 16.4063C23.9124 17.5313 23.1124 17.9501 22.6249 18.1251Z" fill="#CF649A"/>
    </g>`,
    defs: `<defs xmlns="http://www.w3.org/2000/svg">
    <clipPath id="clip0_1052_76">
    <rect width="32" height="24" fill="white"/>
    </clipPath>
    </defs>`,
  },
  Shell: {
    value: `<g size="32">
    <path xmlns="http://www.w3.org/2000/svg" d="M15.4787 8.34801C15.3764 7.31676 14.9375 6.51562 14.1619 5.9446C13.3864 5.37358 12.3338 5.08807 11.0043 5.08807C10.1009 5.08807 9.33807 5.21591 8.71591 5.47159C8.09375 5.71875 7.61648 6.06392 7.28409 6.5071C6.96023 6.95028 6.7983 7.45312 6.7983 8.01562C6.78125 8.48438 6.87926 8.89347 7.09233 9.2429C7.31392 9.59233 7.61648 9.89489 8 10.1506C8.38352 10.3977 8.8267 10.6151 9.32955 10.8026C9.83239 10.9815 10.3693 11.1349 10.9403 11.2628L13.2926 11.8253C14.4347 12.081 15.483 12.4219 16.4375 12.848C17.392 13.2741 18.2188 13.7983 18.9176 14.4205C19.6165 15.0426 20.1577 15.7756 20.5412 16.6193C20.9332 17.4631 21.1335 18.4304 21.142 19.5213C21.1335 21.1236 20.7244 22.5128 19.9148 23.6889C19.1136 24.8565 17.9545 25.7642 16.4375 26.4119C14.929 27.0511 13.1094 27.3707 10.9787 27.3707C8.86506 27.3707 7.02415 27.0469 5.45597 26.3991C3.89631 25.7514 2.67756 24.7926 1.79972 23.5227C0.930398 22.2443 0.474432 20.6634 0.431818 18.7798H5.78835C5.84801 19.6577 6.09943 20.3906 6.54261 20.9787C6.99432 21.5582 7.59517 21.9972 8.34517 22.2955C9.10369 22.5852 9.96023 22.7301 10.9148 22.7301C11.8523 22.7301 12.6662 22.5937 13.3565 22.321C14.0554 22.0483 14.5966 21.669 14.9801 21.1832C15.3636 20.6974 15.5554 20.1392 15.5554 19.5085C15.5554 18.9205 15.3807 18.4261 15.0312 18.0256C14.6903 17.625 14.1875 17.2841 13.5227 17.0028C12.8665 16.7216 12.0611 16.4659 11.1065 16.2358L8.25568 15.5199C6.0483 14.983 4.3054 14.1435 3.02699 13.0014C1.74858 11.8594 1.11364 10.321 1.12216 8.38636C1.11364 6.80114 1.53551 5.41619 2.38778 4.23153C3.24858 3.04687 4.42898 2.12216 5.92898 1.45739C7.42898 0.792613 9.13352 0.460226 11.0426 0.460226C12.9858 0.460226 14.6818 0.792613 16.1307 1.45739C17.5881 2.12216 18.7216 3.04687 19.5312 4.23153C20.3409 5.41619 20.7585 6.78835 20.7841 8.34801H15.4787Z" fill="white"/>
    </g>`,
  },
  Go: {
    value: `<g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_1063_82)" size="62">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.85223 7.21832C4.73242 7.21832 4.70247 7.15842 4.76237 7.06856L5.39136 6.25987C5.45126 6.17001 5.60102 6.11011 5.72083 6.11011H16.4136C16.5334 6.11011 16.5633 6.19996 16.5034 6.28982L15.9943 7.06856C15.9344 7.15842 15.7846 7.24827 15.6947 7.24827L4.85223 7.21832Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.329279 9.97393C0.209473 9.97393 0.179521 9.91403 0.239424 9.82418L0.86841 9.01548C0.928313 8.92563 1.07807 8.86572 1.19788 8.86572H14.8558C14.9757 8.86572 15.0356 8.95558 15.0056 9.04543L14.766 9.76427C14.736 9.88408 14.6162 9.94398 14.4964 9.94398L0.329279 9.97393Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.57781 12.7296C7.45801 12.7296 7.42806 12.6397 7.48796 12.5498L7.90728 11.801C7.96719 11.7112 8.08699 11.6213 8.2068 11.6213H14.1971C14.3169 11.6213 14.3768 11.7112 14.3768 11.831L14.3169 12.5498C14.3169 12.6696 14.1971 12.7595 14.1073 12.7595L7.57781 12.7296Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6674 6.67922C36.7805 7.15845 35.4925 7.51787 33.6355 7.99709C33.1863 8.1169 33.1563 8.14685 32.7669 7.69758C32.3177 7.1884 31.9882 6.85893 31.3592 6.55941C29.4723 5.63091 27.6452 5.90048 25.938 7.00869C23.9012 8.32656 22.8529 10.2734 22.8829 12.6995C22.9128 15.0956 24.5602 17.0725 26.9264 17.4019C28.9631 17.6715 30.6703 16.9526 32.0182 15.4251C32.2877 15.0956 32.5273 14.7362 32.8268 14.3169C31.7486 14.3169 30.4008 14.3169 27.0462 14.3169C26.4172 14.3169 26.2674 13.9275 26.4771 13.4183C26.8665 12.4898 27.5853 10.9324 28.0046 10.1536C28.0945 9.97391 28.3041 9.67439 28.7534 9.67439H39.6558C39.5959 10.4831 39.5959 11.2918 39.4761 12.1005C39.1467 14.257 38.338 16.2338 37.0201 17.971C34.8636 20.8164 32.0481 22.5836 28.4839 23.0628C25.5486 23.4522 22.823 22.8831 20.4268 21.086C18.2104 19.4087 16.9525 17.1923 16.623 14.4367C16.2336 11.172 17.1921 8.23671 19.1689 5.66086C21.2954 2.87536 24.1109 1.10821 27.5553 0.479221C30.3708 -0.0299581 33.0665 0.299511 35.4925 1.94685C37.08 2.99516 38.2182 4.43284 38.9669 6.17004C39.1467 6.43961 39.0268 6.58936 38.6674 6.67922Z" fill="white"/>
    <path d="M48.5815 23.2425C45.8559 23.1826 43.3699 22.4039 41.2733 20.6068C39.5062 19.0792 38.398 17.1324 38.0385 14.8261C37.4994 11.4415 38.4279 8.44637 40.4646 5.78067C42.6511 2.9053 45.2868 1.40772 48.8511 0.778734C51.9062 0.239603 54.7815 0.53912 57.3873 2.30627C59.7535 3.92366 61.2211 6.11013 61.6105 8.9855C62.1197 13.029 60.9516 16.3237 58.1661 19.1391C56.1893 21.1459 53.7632 22.4039 50.9777 22.9729C50.169 23.1227 49.3603 23.1526 48.5815 23.2425ZM55.71 11.142C55.6801 10.7526 55.6801 10.4531 55.6202 10.1536C55.081 7.1884 52.3554 5.5111 49.51 6.17004C46.7245 6.79902 44.9274 8.56617 44.2685 11.3816C43.7294 13.7179 44.8675 16.084 47.024 17.0425C48.6714 17.7613 50.3187 17.6715 51.9062 16.8628C54.2724 15.6348 55.5603 13.7179 55.71 11.142Z" fill="white"/>
    </g>`,
    defs: `<defs xmlns="http://www.w3.org/2000/svg">
    <clipPath id="clip0_1063_82">
    <rect width="62" height="23.3623" fill="white"/>
    </clipPath>
    </defs>`,
  },
  Dockerfile: {
    value: `<g size="32">
    <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M31.3395 8.81215C30.6189 8.31217 28.9676 8.12467 27.6765 8.37466C27.5264 7.12471 26.8358 6.03101 25.6349 5.0623L24.9443 4.56232L24.4639 5.28104C23.8634 6.2185 23.5632 7.53095 23.6533 8.7809C23.6833 9.21838 23.8334 9.9996 24.2838 10.6871C23.8634 10.9371 22.9927 11.2495 21.8518 11.2495H0.144346L0.0842979 11.4995C-0.125871 12.7495 -0.125872 16.6556 2.33611 19.6555C4.19761 21.9366 6.95983 23.0928 10.5928 23.0928C18.4591 23.0928 24.2838 19.3117 27.016 12.4682C28.0969 12.4995 30.4087 12.4682 31.5797 10.1246C31.6097 10.0621 31.6697 9.9371 31.8799 9.46837L32 9.21838L31.3395 8.81215ZM17.4983 0H14.1957V3.12487H17.4983V0ZM17.4983 3.74985H14.1957V6.87472H17.4983V3.74985ZM13.5952 3.74985H10.2925V6.87472H13.5952V3.74985ZM9.69203 3.74985H6.38938V6.87472H9.69203V3.74985ZM5.78889 7.4997H2.48623V10.6246H5.78889V7.4997ZM9.69203 7.4997H6.38938V10.6246H9.69203V7.4997ZM13.5952 7.4997H10.2925V10.6246H13.5952V7.4997ZM17.4983 7.4997H14.1957V10.6246H17.4983V7.4997ZM21.4015 7.4997H18.0988V10.6246H21.4015V7.4997Z" fill="white"/>
    </g>`,
  },
  Java: {
    value: `<g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_1079_25)" size="62" >
    <path d="M22.5181 47.9337C22.5181 47.9337 20.135 49.3829 24.1746 49.7975C29.0378 50.4175 31.6282 50.3149 37.0106 49.2802C38.0923 49.9427 39.2364 50.4975 40.4264 50.9368C28.317 56.1138 12.9933 50.6268 22.5181 47.9337ZM20.9681 41.2047C20.9681 41.2047 18.3796 43.1713 22.4173 43.5879C27.697 44.1052 31.8375 44.2079 38.983 42.7605C39.6779 43.4653 40.5287 43.9969 41.4668 44.3125C26.8697 48.6602 10.5133 44.7252 20.9681 41.2047ZM49.5404 53.0041C49.5404 53.0041 51.2996 54.4534 47.5738 55.5926C40.6376 57.6657 18.4842 58.2857 12.2726 55.5926C10.0987 54.6626 14.2391 53.316 15.5663 53.1087C16.9129 52.7987 17.6395 52.7987 17.6395 52.7987C15.2563 51.1422 1.80039 56.2145 10.8078 57.6619C35.5497 61.6996 55.9438 55.9026 49.5249 53.0041H49.5404ZM23.638 34.1639C23.638 34.1639 12.354 36.857 19.6002 37.787C22.706 38.2016 28.813 38.097 34.5073 37.6843C39.1651 37.2697 43.8267 36.4443 43.8267 36.4443C43.8267 36.4443 42.1701 37.1689 41.0309 37.8935C29.5415 40.8967 7.48889 39.5501 13.8051 36.4443C19.1875 33.8558 23.6399 34.1677 23.6399 34.1677L23.638 34.1639ZM43.8267 45.4479C55.4207 39.4416 50.0383 33.6485 46.3106 34.3712C45.3806 34.5785 44.964 34.7858 44.964 34.7858C44.964 34.7858 45.274 34.1658 45.9986 33.9585C53.3495 31.37 59.1465 41.722 43.6155 45.7579C43.6155 45.7579 43.7182 45.6552 43.8228 45.4479H43.8267ZM24.7811 61.8042C35.9605 62.5289 53.0434 61.3896 53.4561 56.108C53.4561 56.108 52.6288 58.1811 44.2433 59.7311C34.7185 61.4904 22.9172 61.2811 15.981 60.1457C15.981 60.1457 17.4302 61.3877 24.7811 61.8042Z" fill="white"/>
    <path d="M36.8043 0.00195312C36.8043 0.00195312 43.2233 6.52358 30.6973 16.3583C20.6553 24.3292 28.4208 28.8843 30.6973 34.0613C24.7957 28.7816 20.5526 24.1219 23.4511 19.7761C27.6942 13.3552 39.3928 10.2688 36.8043 0.00195312ZM33.5106 29.7135C36.5137 33.1293 32.6833 36.2351 32.6833 36.2351C32.6833 36.2351 40.3442 32.302 36.8237 27.435C33.6152 22.7773 31.1275 20.4988 44.5873 12.7352C44.5873 12.7352 23.3658 18.0149 33.5106 29.7135Z" fill="#F58219"/>
    </g>`,
    defs: `<defs xmlns="http://www.w3.org/2000/svg">
    <clipPath id="clip0_1079_25">
    <rect width="62" height="62" fill="white"/>
    </clipPath>
    </defs>`,
  },
  Python: {
    value: `<g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_1079_28)" size="62">
    <path d="M30.7346 0.017334C15.0346 0.017334 16.0149 6.82579 16.0149 6.82579L16.0323 13.8796H31.0146V15.9973H10.0816C10.0816 15.9973 0.0351562 14.8579 0.0351562 30.6991C0.0351562 46.5408 8.80394 45.979 8.80394 45.979H14.0371V38.6278C14.0371 38.6278 13.755 29.8591 22.6659 29.8591H37.5256C37.5256 29.8591 45.8743 29.9939 45.8743 21.7904V8.22623C45.8743 8.22623 47.1422 0.017334 30.7346 0.017334ZM22.4734 4.76086C22.8275 4.76054 23.1781 4.83004 23.5052 4.96537C23.8324 5.10071 24.1296 5.29923 24.38 5.54958C24.6303 5.79992 24.8288 6.09718 24.9642 6.42433C25.0995 6.75148 25.169 7.10211 25.1687 7.45615C25.169 7.81019 25.0995 8.16082 24.9642 8.48797C24.8288 8.81512 24.6303 9.11238 24.38 9.36272C24.1296 9.61307 23.8324 9.81159 23.5052 9.94693C23.1781 10.0823 22.8275 10.1518 22.4734 10.1514C22.1194 10.1518 21.7687 10.0823 21.4416 9.94693C21.1144 9.81159 20.8172 9.61307 20.5668 9.36272C20.3165 9.11238 20.118 8.81512 19.9826 8.48797C19.8473 8.16082 19.7778 7.81019 19.7781 7.45615C19.7778 7.10211 19.8473 6.75148 19.9826 6.42433C20.118 6.09718 20.3165 5.79992 20.5668 5.54958C20.8172 5.29923 21.1144 5.10071 21.4416 4.96537C21.7687 4.83004 22.1194 4.76054 22.4734 4.76086Z" fill="url(#paint0_linear_1079_28)"/>
    <path d="M31.1802 61.5403C46.8802 61.5403 45.8999 54.7318 45.8999 54.7318L45.8825 47.6783H30.9V45.5606H51.833C51.833 45.5606 61.8794 46.7 61.8794 30.8583C61.8794 15.0168 53.1106 15.5786 53.1106 15.5786H47.8774V22.9295C47.8774 22.9295 48.1596 31.6983 39.2486 31.6983H24.3889C24.3889 31.6983 16.0403 31.5634 16.0403 39.7673V53.3316C16.0403 53.3316 14.7726 61.5403 31.1799 61.5403H31.1802ZM39.4414 56.7972C39.0874 56.7976 38.7367 56.7281 38.4096 56.5927C38.0824 56.4574 37.7852 56.2589 37.5348 56.0085C37.2845 55.7582 37.086 55.4609 36.9506 55.1338C36.8153 54.8066 36.7458 54.456 36.7461 54.102C36.7457 53.7479 36.8152 53.3972 36.9505 53.0701C37.0859 52.7429 37.2844 52.4456 37.5347 52.1952C37.7851 51.9449 38.0823 51.7463 38.4095 51.611C38.7367 51.4756 39.0873 51.4061 39.4414 51.4064C39.7954 51.4061 40.1461 51.4756 40.4732 51.6109C40.8004 51.7463 41.0976 51.9448 41.348 52.1951C41.5983 52.4455 41.7968 52.7427 41.9322 53.0699C42.0675 53.397 42.137 53.7477 42.1367 54.1017C42.137 54.4558 42.0675 54.8064 41.9322 55.1335C41.7968 55.4607 41.5983 55.7579 41.348 56.0083C41.0976 56.2586 40.8004 56.4571 40.4732 56.5925C40.1461 56.7278 39.7954 56.7976 39.4414 56.7972Z" fill="url(#paint1_linear_1079_28)"/>
    </g>`,
    defs: `<defs xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="paint0_linear_1079_28" x1="594.359" y1="553.379" x2="3659.19" y2="3587.63" gradientUnits="userSpaceOnUse">
    <stop stop-color="#387EB8"/>
    <stop offset="1" stop-color="#366994"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1079_28" x1="893.263" y1="961.472" x2="4184.53" y2="4072.81" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE052"/>
    <stop offset="1" stop-color="#FFC331"/>
    </linearGradient>
    <clipPath id="clip0_1079_28">
    <rect width="62" height="61.752" fill="white"/>
    </clipPath>
    </defs>`,
  },
  "C++": {
    value: `<g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_1079_18)" size="62">
    <path d="M55.0128 18.2365C55.0124 17.1968 54.79 16.2781 54.3404 15.4896C53.8987 14.7143 53.2372 14.0644 52.3499 13.5506C45.0258 9.32749 37.6946 5.1173 30.3729 0.889879C28.399 -0.249688 26.4851 -0.208143 24.5259 0.947783C21.6107 2.66703 7.0152 11.0291 2.66595 13.5482C0.874801 14.5851 0.00322884 16.172 0.00279833 18.2346C0 26.7275 0.00279833 35.2202 0 43.7134C0.000430513 44.7303 0.213319 45.6311 0.643186 46.4077C1.08511 47.2066 1.75585 47.8743 2.66358 48.3997C7.01305 50.9189 21.6104 59.2803 24.525 61C26.4851 62.1565 28.399 62.1979 30.3735 61.0579C37.6955 56.8302 45.0271 52.6203 52.3523 48.3971C53.26 47.8719 53.9307 47.2038 54.3727 46.4056C54.8019 45.629 55.0152 44.7281 55.0156 43.711C55.0156 43.711 55.0156 26.7297 55.0128 18.2365Z" fill="#5C8DBC"/>
    <path d="M27.5919 30.8911L0.643066 46.4076C1.08499 47.2065 1.75573 47.8742 2.66346 48.3996C7.01293 50.9188 21.6103 59.2802 24.5249 60.9999C26.485 62.1564 28.3989 62.1978 30.3734 61.0578C37.6953 56.8301 45.027 52.6202 52.3521 48.397C53.2599 47.8718 53.9306 47.2037 54.3725 46.4055L27.5919 30.8911Z" fill="#1A4674"/>
    <path d="M19.6099 35.4873C21.178 38.2249 24.1259 40.0714 27.5076 40.0714C30.9102 40.0714 33.8749 38.2014 35.4351 35.4345L27.5918 30.8911L19.6099 35.4873Z" fill="#1A4674"/>
    <path d="M55.0126 18.2366C55.0122 17.1969 54.7899 16.2782 54.3402 15.4897L27.5918 30.8913L54.3725 46.4057C54.8017 45.6291 55.015 44.7282 55.0154 43.7111C55.0154 43.7111 55.0154 26.7298 55.0126 18.2366Z" fill="#1B598E"/>
    <path d="M53.5401 32.0002H51.4474V34.0933H49.3543V32.0002H47.2618V29.9077H49.3543V27.8149H51.4474V29.9077H53.5401V32.0002ZM45.9039 32.0002H43.8114V34.0933H41.7187V32.0002H39.626V29.9077H41.7187V27.8149H43.8114V29.9077H45.9039V32.0002Z" fill="white"/>
    <path d="M35.4351 35.4345C33.8749 38.2014 30.9102 40.0713 27.5077 40.0713C24.126 40.0713 21.1781 38.2249 19.6099 35.4873C18.8222 34.1136 18.4084 32.5573 18.4101 30.9738C18.4101 25.9495 22.4834 21.8764 27.5077 21.8764C30.8676 21.8764 33.8 23.6998 35.3759 26.4095L43.3277 21.8305C40.1671 16.3747 34.2663 12.7041 27.5077 12.7041C17.4173 12.7041 9.23779 20.8838 9.23779 30.9738C9.23779 34.284 10.1184 37.3882 11.6575 40.0658C14.8101 45.5505 20.7277 49.2436 27.5077 49.2436C34.3001 49.2436 40.2269 45.5356 43.3751 40.0348L35.4351 35.4345Z" fill="white"/>
    </g>`,
    defs: `<defs xmlns="http://www.w3.org/2000/svg">
    <clipPath id="clip0_1079_18">
    <rect width="55.1056" height="62" fill="white"/>
    </clipPath>
    </defs>`,
  },
  Vue: {
    value: `<g xmlns="http://www.w3.org/2000/svg" size="62">
    <path d="M38.1688 4.84375L31 17.1469L23.8313 4.84375H0L31 58.125L62 4.84375H38.1688Z" fill="#42B883"/>
    <path d="M38.1687 4.84375L30.9999 17.1469L23.8312 4.84375H12.3999L30.9999 36.8125L49.5999 4.84375H38.1687Z" fill="#35495E"/>
    </g>`,
  },
};

const iconHandler = {
  get: function (target: Icon, prop: string) {
    if (target[prop]) {
      return target[prop];
    }
    return false;
  },

  set: function (...any: any[]) {
    throw new Error("mutating a data object is not possible");
  },
};

const ProxyIcon = new Proxy(icon, iconHandler);

export { ProxyIcon as Icons };
