import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          aboutUs: 'About Us',
          products: 'Products',
          contactUs: 'Contact Us',
          heroTitle: 'Cixi City Tuoxin Bearing Co., Ltd.',
          heroSubtitle: 'Specialized in non-standard/stainless steel bearing design & production',
          aboutTitle: 'About Us',
          aboutContent: 'Cixi City Tuoxin Bearing Co., Ltd. is a manufacturing enterprise specializing in the design and production of non-standard/stainless steel bearings. It is located in Cixi City on the bank of Hangzhou Bay in the Yangtze River Delta. The company was founded in 1995 and the main factory area covers an area of 15,000 square meters. It consists of a finished bearing factory and two affiliated wholly-owned bearing ring factories. The company specializes in manufacturing non-standard bearings.',
          productsTitle: 'Our Products',
          contactTitle: 'Contact Us',
          contactAddress: 'Address: No. 111, Huancheng West Road, Zhouxiang Town, Cixi City, Zhejiang Province',
          contactPhone: 'Phone: (+86) 138 5832 9978',
          contactFax: 'Fax: (+86) 574 6330 5855',
          contactEmail: 'Email: sales@tosinbearing.com',
          footerText: '© {{year}} Cixi City Tuoxin Bearing Co., Ltd. All rights reserved.',
          productName_1: 'Stainless steel bearings',
          productDescription_1: `
            <h2>Stainless steel bearings</h2>
            <div class="products_r_l"><img src="product/p1.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>Inner and outer rings:</strong> AISI440C, AISI304，AISI316L, SI3N4, ZRO2<br />
            <strong>Balls:</strong> AISI440C, SI3N4, ZRO2 (AISI304，AISI316 BALLS only for 304,316 RINGS) <br />
            <strong>Cage:</strong> AISI304，PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>Shield/Seal:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>Precision grade:</strong> ABEC-1，ABEC-3，ABEC-5<br />
            <strong>Noise level:</strong> Z1，Z2，Z3<br />
            <strong>Vibration level:</strong> V1，V2<br />
            <strong>Clearance:</strong> C0, C2, C3, C4, C5  <br />
            <strong>Hardness:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p1.jpg" onmouseover="showbig('product/p1.jpg')" alt="Stainless steel bearings"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>As the main product of TOSIN, stainless steel bearings are widely used in medical equipment, food processing machinery, marine engineering equipment, ocean-going ships and special high and low temperature equipment with their excellent corrosion resistance and performance comparable to bearing steel. TOSIN provides stainless steel bearings of different materials including AISI440C, AISI304, and AISI316L. TOSIN's newly developed special surface treatment technology can greatly improve the salt spray resistance and corrosion resistance of the bearing to adapt to various harsh working conditions.
            </p>
            <div class="clear"></div>
            <div class="clear"></div> <br />
            <strong>Technical Parameters</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
            <img src="product/products5.jpg" width="1100px">
            <img src="product/products6.jpg" width="1100px">
            <img src="product/products7.jpg" width="1100px">
          `,
          productName_2: 'Ceramic ball bearings',
          productDescription_2: `
            <h2>Ceramic ball bearings</h2>
            <div class="products_r_l"><img src="product/p2.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>Inner and outer rings:</strong> AISI440C, SI3N4，ZRO2<br />
            <strong>Balls:</strong> SI3N4, ZRO2  <br />
            <strong>Cage:</strong> AISI304，PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>Shield/Seal:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>Noise level:</strong> Z1，Z2，Z3<br />
            <strong>Vibration level:</strong> V1，V2<br />
            <strong>Clearance:</strong> C0, C2, C3, C4, C5  <br />
            <strong>Hardness:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p2.jpg" onmouseover="showbig('product/p2.jpg')" alt="Ceramic ball bearings"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN provides a full range of ceramic ball bearings to meet customers' high-speed and high-precision requirements. With their unique material properties, ceramic ball bearings bring higher speeds, lighter weight, smoother operation and longer life. TOSIN ceramic ball bearings can be arbitrarily selected for the inner and outer rings (AISI440C, GCr15, SI3N4, ZRO2) and ball (SI3N4, ZRO2) materials.
            </p>
            <div class="clear"></div>
            <strong>Technical Parameters</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
            <img src="product/products5.jpg" width="1100px">
            <img src="product/products6.jpg" width="1100px">
            <img src="product/products7.jpg" width="1100px">
          `,
          productName_3: 'Precision thin-wall bearings',
          productDescription_3: `
            <h2>Precision thin-wall bearings</h2>
            <div class="products_r_l"><img src="product/p3.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>Inner and outer rings:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>Balls:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>Cage:</strong> AISI304, PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>Shield/Seal:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>Precision grade:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7<br />
            <strong>Noise level:</strong> Z1，Z2，Z3, Z4<br />
            <strong>Vibration level:</strong> V1，V2, V3<br />
            <strong>Clearance:</strong> C0, C2, C3, C4, C5  <br />
            <strong>Sealing form:</strong> OPEN, Z, ZZ, RS, 2RS, 2RZ<br />
            <strong>Hardness:</strong> 58-63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p3.jpg" onmouseover="showbig('product/p3.jpg')" alt="Precision thin-wall bearings"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>Thin-walled bearings have the characteristics of small friction torque, high rigidity, and good rotation accuracy. TOSIN has more than 20 years of production experience in thin-walled bearings of 6700, 6800, 6900, B5XX and other series, so it has won the favor of many customers. Our 6800, 6900 and other products can reach the quality level of Z3V3.
            </p>
            <div class="clear"></div>
            <strong>Technical Parameters</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
          `,
          productName_4: 'Precision EMQ motor grade bearings',
          productDescription_4: `
            <h2>Precision EMQ motor grade bearings</h2>
            <div class="products_r_l"><img src="product/p4.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>Sealing form:</strong> OPEN, Z, ZZ, RS, 2RS, 2RZ<br />
            <strong>Precision grade:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7 <br />
            <strong>Vibration level:</strong> V1, V2, V3, V4 <br />
            <strong>Noise level:</strong> Z1，Z2，Z3，Z4 <br />
            <strong>Clearance:</strong> C0, C2, C3, C4, C5 <br />
            <strong>Bearing material:</strong> GCr15 <br />
            <strong>Hardness:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p4.jpg" onmouseover="showbig('product/p4.jpg')" alt="Precision EMQ motor grade bearings"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN OEM EMQ precision motor bearings for many European and American companies. The steel is purchased from Jiangyin Xingcheng Special Steel, and the quality can reach the Z4V4 level. The products are widely used in various home appliances, power tools, auto parts, etc.
            </p>
            <div class="clear"></div>
            <strong>Technical Parameters</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
            <img src="product/products5.jpg" width="1100px">
            <img src="product/products6.jpg" width="1100px">
            <img src="product/products7.jpg" width="1100px">
          `,
          productName_5: 'Non-standard/full ball bearings',
          productDescription_5: `
            <h2>Non-standard/full ball bearings</h2>
            <div class="products_r_l"><img src="product/p7.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>Inner and outer rings:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>Balls:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>Cage:</strong> AISI304, PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>Shield/Seal:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>Precision grade:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7<br />
            <strong>Clearance:</strong> C0, C2, C3, C4, C5  <br />
            <strong>Sealing form:</strong> OPEN, Z, ZZ, RS, 2RS, 2RZ<br />
            <strong>Hardness:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p7.jpg" onmouseover="showbig('product/p7.jpg')" alt="Non-standard/full ball bearings"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN has rich experience in the R&D and manufacturing of non-standard bearings. The products include full ball bearings, single/double-sided protruding bearings, plastic-coated bearings, special-sized bearings, special-structured bearings, etc., which are widely used. As a special advantage of producing non-standard bearings, from blank rings to finished products are all produced by TOSIN's own factory.
            </p>
          `,
          productName_6: 'Flange bearings',
          productDescription_6: `
            <h2>Flange bearings</h2>
            <div class="products_r_l"><img src="product/p5.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>Inner and outer rings:</strong> GCr15, AISI440C<br />
            <strong>Balls:</strong> GCr15, AISI440C<br />
            <strong>Cage:</strong> AISI304<br />
            <strong>Shield/Seal:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>Precision grade:</strong> ABEC-1，ABEC-3，ABEC-5<br />
            <strong>Noise level:</strong> Z1，Z2，Z3<br />
            <strong>Vibration level:</strong> V1，V2<br />
            <strong>Clearance:</strong> C0, C2, C3, C4, C5  <br />
            <strong>Hardness:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p5.jpg" onmouseover="showbig('product/p5.jpg')" alt="Flange bearings"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN flange bearings are widely used in motors, OA systems, dental drills and other fields. We provide two materials of bearing steel and stainless steel for users to choose.
            </p>
            <div class="clear"></div>
            <strong>Technical Parameters</strong><br />
            <img src="product/products5.jpg" style="width: 1100px;">
            <img src="product/products7.jpg" style="width: 1100px;">
          `,
          productName_7: 'Bicycle headset bearings',
          productDescription_7: `
            <h2>Bicycle headset bearings</h2>
            <div class="products_r_l"><img src="product/p6.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>Inner and outer rings:</strong> GCr15, AISI440C<br />
            <strong>Balls:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>Cage:</strong> AISI304, PA66<br />
            <strong>Shield/Seal:</strong> AISI304, NBR<br />
            <strong>Precision grade:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7  <br />
            <strong>Hardness:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p6.jpg" onmouseover="showbig('product/p6.jpg')" alt="Bicycle headset bearings"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN has developed many different types of bicycle headset bearings for high-end bicycle customers. TOSIN's own ring factory is an advantage, which can more conveniently meet the special needs of customers.
            </p>
          `,
          productName_8: 'Angular contact bearings',
          productDescription_8: `
            <h2>Angular contact bearings</h2>
            <div class="products_r_l"><img src="product/p8.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>Inner and outer rings:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>Balls:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>Cage:</strong> PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>Precision grade:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7<br />
            <strong>Hardness:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p8.jpg" onmouseover="showbig('product/p8.jpg')" alt="Angular contact bearings"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>With its special structure, angular contact bearings can bear a large amount of axial load and radial load. TOSIN can also be customized according to the special requirements of customers.
            </p>
            <div class="clear"></div>
            <div id="maintable">
            <div class="clear"></div>
            <strong>Technical Parameters</strong><br />
            <table class="tablestyle1" cellpadding="1" cellspacing="1" >
              <tr class="top" >
                <td>Name </td>
                <td>d/mm</td>
                <td>D/mm </td>
                <td>B/mm </td>
                <td>rs/min </td>
                <td>ris/min </td>
                <td>Dynamic load </td>
                <td>Static load </td>
                <td>Grease lubrication</td>
                <td>Oil lubrication </td>
                <td>Weight/Kg </td>
              </tr>
              <tr >
                <td>708ACETA</td>
                <td>8 </td>
                <td>22 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.91 </td>
                <td>1.12 </td>
                <td>67000 </td>
                <td>100000 </td>
                <td>0.011 </td>
              </tr>
              <tr >
                <td>708CETA</td>
                <td>8 </td>
                <td>22 </td>
                <td>3 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.96 </td>
                <td>1.16 </td>
                <td>70000 </td>
                <td>110000 </td>
                <td>0.011 </td>
              </tr>
              <tr >
                <td>709ACETA</td>
                <td>9 </td>
                <td>24 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.12 </td>
                <td>1.29 </td>
                <td>63000 </td>
                <td>95000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>709CETA</td>
                <td>9 </td>
                <td>24 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.25 </td>
                <td>1.34 </td>
                <td>70000 </td>
                <td>110000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>7000ACETA</td>
                <td>10 </td>
                <td>26 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.97 </td>
                <td>1.6 </td>
                <td>56000 </td>
                <td>85000 </td>
                <td>0.018 </td>
              </tr>
              <tr >
                <td>7000CETA</td>
                <td>10 </td>
                <td>26 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.1 </td>
                <td>1.66 </td>
                <td>67000 </td>
                <td>100000 </td>
                <td>0.18 </td>
              </tr>
              <tr >
                <td>7001ACETA</td>
                <td>12 </td>
                <td>28 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.36 </td>
                <td>1.83 </td>
                <td>53000 </td>
                <td>80000 </td>
                <td>0.02 </td>
              </tr>
              <tr >
                <td>7001CETA</td>
                <td>12 </td>
                <td>28 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.49 </td>
                <td>1.9 </td>
                <td>60000 </td>
                <td>90000 </td>
                <td>0.02 </td>
              </tr>
              <tr >
                <td>7002ACETA</td>
                <td>15 </td>
                <td>32 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.94 </td>
                <td>2.32 </td>
                <td>45000 </td>
                <td>67000 </td>
                <td>0.028 </td>
              </tr>
              <tr >
                <td>7002CETA</td>
                <td>15 </td>
                <td>32 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>5.2 </td>
                <td>2.45 </td>
                <td>50000 </td>
                <td>70000 </td>
                <td>0.028 </td>
              </tr>
              <tr >
                <td>7003ACETA</td>
                <td>17 </td>
                <td>35 </td>
                <td>10 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>6.5 </td>
                <td>3.1 </td>
                <td>40000 </td>
                <td>60000 </td>
                <td>0.037 </td>
              </tr>
              <tr >
                <td>7003CETA</td>
                <td>17 </td>
                <td>35 </td>
                <td>10 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>6.76 </td>
                <td>3.25 </td>
                <td>48000 </td>
                <td>70000 </td>
                <td>0.037 </td>
              </tr>
              <tr >
                <td>7004ACETA</td>
                <td>20 </td>
                <td>42 </td>
                <td>12 </td>
                <td>0.3 </td>
                <td>0.3 </td>
                <td>8.32 </td>
                <td>4.15 </td>
                <td>34000 </td>
                <td>50000 </td>
                <td>0.065 </td>
              </tr>
              <tr >
                <td>7004CETA</td>
                <td>20 </td>
                <td>42 </td>
                <td>12 </td>
                <td>0.3 </td>
                <td>0.3 </td>
                <td>8.17 </td>
                <td>4.3 </td>
                <td>38000 </td>
                <td>56000 </td>
                <td>0.065 </td>
              </tr>
              <tr >
                <td>7005ACETA</td>
                <td>24 </td>
                <td>47 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>9.23 </td>
                <td>5 </td>
                <td>28000 </td>
                <td>43000 </td>
                <td>0.075 </td>
              </tr>
              <tr >
                <td>7005CETA</td>
                <td>25 </td>
                <td>47 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>9.56 </td>
                <td>5.2 </td>
                <td>34000 </td>
                <td>50000 </td>
                <td>0.075 </td>
              </tr>
              <tr >
                <td>7006ACETA</td>
                <td>30 </td>
                <td>55 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>13.8 </td>
                <td>7.65 </td>
                <td>24000 </td>
                <td>38000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>7006CETA</td>
                <td>30 </td>
                <td>55 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>14.3 </td>
                <td>8 </td>
                <td>28000 </td>
                <td>43000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>7007ACETA</td>
                <td>35 </td>
                <td>62 </td>
                <td>14 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>14.8 </td>
                <td>9 </td>
                <td>19000 </td>
                <td>32000 </td>
                <td>0.15 </td>
              </tr>
              <tr >
                <td>7007CETA</td>
                <td>35 </td>
                <td>62 </td>
                <td>14 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>15.6 </td>
                <td>9.5 </td>
                <td>22000 </td>
                <td>36000 </td>
                <td>0.15 </td>
              </tr>
              <tr >
                <td>7008ACETA</td>
                <td>40 </td>
                <td>68 </td>
                <td>15 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>15.9 </td>
                <td>10.4 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7008CETA</td>
                <td>40 </td>
                <td>68 </td>
                <td>15 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>16.8 </td>
                <td>11 </td>
                <td>19000 </td>
                <td>32000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7009ACETA</td>
                <td>45 </td>
                <td>75 </td>
                <td>16 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>28.6 </td>
                <td>22.4 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.23 </td>
              </tr>
              <tr >
                <td>7009CETA</td>
                <td>45 </td>
                <td>75 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>28.6 </td>
                <td>22.4 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.23 </td>
              </tr>
              <tr >
                <td>7010ACETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>16 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>28.1 </td>
                <td>23.2 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.25 </td>
              </tr>
              <tr >
                <td>7010CETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>29.6 </td>
                <td>24 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.25 </td>
              </tr>
              <tr >
                <td>7011ACETA</td>
                <td>50 </td>
                <td>90 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>37.1 </td>
                <td>31 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>7011CETA</td>
                <td>55 </td>
                <td>90 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>39.7 </td>
                <td>32.5 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>7012ACETA</td>
                <td>60 </td>
                <td>95 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>39 </td>
                <td>33.5 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.4 </td>
              </tr>
              <tr >
                <td>7012CETA</td>
                <td>60 </td>
                <td>95 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>40.3 </td>
                <td>34.5 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.4 </td>
              </tr>
              <tr >
                <td>7013ACETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>39 </td>
                <td>35.5 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>0.42 </td>
              </tr>
              <tr >
                <td>7013CETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>41.6 </td>
                <td>37.5 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.42 </td>
              </tr>
              <tr >
                <td>7014ACETA</td>
                <td>70 </td>
                <td>110 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>48.8 </td>
                <td>44 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.59 </td>
              </tr>
              <tr >
                <td>7014CETA</td>
                <td>70 </td>
                <td>110 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>52 </td>
                <td>45.5 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>0.59 </td>
              </tr>
              <tr >
                <td>7015ACETA</td>
                <td>75 </td>
                <td>115 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>49.4 </td>
                <td>46.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.62 </td>
              </tr>
              <tr >
                <td>7015CETA</td>
                <td>75 </td>
                <td>115 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>52.2 </td>
                <td>49 </td>
                <td>12000 </td>
                <td>18000 </td>
                <td>0.62 </td>
              </tr>
              <tr >
                <td>7016ACETA</td>
                <td>80 </td>
                <td>125 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>62.4 </td>
                <td>58.5 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>0.85 </td>
              </tr>
              <tr >
                <td>7016CETA</td>
                <td>80 </td>
                <td>125 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>65 </td>
                <td>61 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.85 </td>
              </tr>
              <tr >
                <td>7017ACETA</td>
                <td>85 </td>
                <td>130 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>63.7 </td>
                <td>62 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>0.89 </td>
              </tr>
              <tr >
                <td>7017CETA</td>
                <td>85 </td>
                <td>130 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>67.6 </td>
                <td>65.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.89 </td>
              </tr>
              <tr >
                <td>7018ACETA</td>
                <td>90 </td>
                <td>140 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>74.1 </td>
                <td>72 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>1.15 </td>
              </tr>
              <tr >
                <td>7018CETA</td>
                <td>90 </td>
                <td>140 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>76.5 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>1.15 </td>
              </tr>
              <tr >
                <td>7019ACETA</td>
                <td>95 </td>
                <td>145 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>76.1 </td>
                <td>76.5 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7019CETA</td>
                <td>95 </td>
                <td>145 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>81.9 </td>
                <td>80 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7020ACETA</td>
                <td>100 </td>
                <td>150 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>80 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.25 </td>
              </tr>
              <tr >
                <td>7020CETA</td>
                <td>100 </td>
                <td>150 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>82.3 </td>
                <td>85 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>1.25 </td>
              </tr>
              <tr >
                <td>7021ACETA</td>
                <td>105 </td>
                <td>160 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>90.4 </td>
                <td>93 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.6 </td>
              </tr>
              <tr >
                <td>7021CETA</td>
                <td>105 </td>
                <td>160 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>95.6 </td>
                <td>96.5 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.6 </td>
              </tr>
              <tr >
                <td>7022ACETA</td>
                <td>110 </td>
                <td>170 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>104 </td>
                <td>104 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>1.95 </td>
              </tr>
              <tr >
                <td>7022CETA</td>
                <td>110 </td>
                <td>170 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>111 </td>
                <td>108 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.95 </td>
              </tr>
              <tr >
                <td>7024ACETA</td>
                <td>120 </td>
                <td>180 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>111 </td>
                <td>116 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>2.1 </td>
              </tr>
              <tr >
                <td>7024CETA</td>
                <td>120 </td>
                <td>180 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>114 </td>
                <td>122 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>2.1 </td>
              </tr>
              <tr >
                <td>7026ACETA</td>
                <td>130 </td>
                <td>200 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>140 </td>
                <td>150 </td>
                <td>6000 </td>
                <td>9000 </td>
                <td>3.2 </td>
              </tr>
              <tr >
                <td>7026CETA</td>
                <td>130 </td>
                <td>200 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>148 </td>
                <td>156 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>&nbsp;</td>
              </tr>
              <tr >
                <td>7028ACETA</td>
                <td>140 </td>
                <td>210 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>146 </td>
                <td>156 </td>
                <td>5600 </td>
                <td>8500 </td>
                <td>3.4 </td>
              </tr>
              <tr >
                <td>7028CETA</td>
                <td>140 </td>
                <td>210 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>153 </td>
                <td>166 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>3.4 </td>
              </tr>
              <tr >
                <td>7200ACETA</td>
                <td>10 </td>
                <td>30 </td>
                <td>9 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.2 </td>
                <td>2.12 </td>
                <td>53000 </td>
                <td>80000 </td>
                <td>0.029 </td>
              </tr>
              <tr >
                <td>7200CETA</td>
                <td>10 </td>
                <td>30 </td>
                <td>9 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.4 </td>
                <td>2.2 </td>
                <td>60000 </td>
                <td>90000 </td>
                <td>0.029 </td>
              </tr>
              <tr >
                <td>7201ACETA</td>
                <td>12 </td>
                <td>32 </td>
                <td>10 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.72 </td>
                <td>2.45 </td>
                <td>48000 </td>
                <td>70000 </td>
                <td>0.036 </td>
              </tr>
              <tr >
                <td>7201CETA</td>
                <td>12 </td>
                <td>32 </td>
                <td>10 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.85 </td>
                <td>2.55 </td>
                <td>53000 </td>
                <td>80000 </td>
                <td>0.036 </td>
              </tr>
              <tr >
                <td>7202ACETA</td>
                <td>15 </td>
                <td>35 </td>
                <td>11 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>7.15 </td>
                <td>3.2 </td>
                <td>43000 </td>
                <td>63000 </td>
                <td>0.043 </td>
              </tr>
              <tr >
                <td>7202CETA</td>
                <td>15 </td>
                <td>35 </td>
                <td>11 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>7.41 </td>
                <td>3.35 </td>
                <td>48000 </td>
                <td>70000 </td>
                <td>0.043 </td>
              </tr>
              <tr >
                <td>7203ACETA</td>
                <td>14 </td>
                <td>40 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>8.84 </td>
                <td>4 </td>
                <td>38000 </td>
                <td>56000 </td>
                <td>0.062 </td>
              </tr>
              <tr >
                <td>7203CETA</td>
                <td>17 </td>
                <td>40 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>9.23 </td>
                <td>4.15 </td>
                <td>43000 </td>
                <td>63000 </td>
                <td>0.062 </td>
              </tr>
              <tr >
                <td>7204ACETA</td>
                <td>20 </td>
                <td>47 </td>
                <td>14 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>11.4 </td>
                <td>5.6 </td>
                <td>32000 </td>
                <td>48000 </td>
                <td>0.1 </td>
              </tr>
              <tr >
                <td>7204CETA</td>
                <td>20 </td>
                <td>47 </td>
                <td>14 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>11.9 </td>
                <td>5.85 </td>
                <td>36000 </td>
                <td>53000 </td>
                <td>0.1 </td>
              </tr>
              <tr >
                <td>7205ACETA</td>
                <td>25 </td>
                <td>52 </td>
                <td>15 </td>
                <td>0.3 </td>
                <td>0.3 </td>
                <td>13 </td>
                <td>6.95 </td>
                <td>26000 </td>
                <td>40000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>7205CETA</td>
                <td>25 </td>
                <td>52 </td>
                <td>15 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>13.5 </td>
                <td>7.2 </td>
                <td>30000 </td>
                <td>45000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>7206ACETA</td>
                <td>30 </td>
                <td>62 </td>
                <td>16 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>23.4 </td>
                <td>15.3 </td>
                <td>20000 </td>
                <td>34000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7206CETA</td>
                <td>30 </td>
                <td>62 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>24.2 </td>
                <td>16 </td>
                <td>24000 </td>
                <td>38000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7207ACETA</td>
                <td>35 </td>
                <td>72 </td>
                <td>17 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>30.7 </td>
                <td>20.8 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.28 </td>
              </tr>
              <tr >
                <td>7207CETA</td>
                <td>35 </td>
                <td>72 </td>
                <td>17 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>31.9 </td>
                <td>21.6 </td>
                <td>20000 </td>
                <td>34000 </td>
                <td>0.28 </td>
              </tr>
              <tr >
                <td>7208ACETA</td>
                <td>40 </td>
                <td>80 </td>
                <td>18 </td>
                <td>0.6 </td>
                <td>0.6 </td>
                <td>39 </td>
                <td>27 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.36 </td>
              </tr>
              <tr >
                <td>7208CETA</td>
                <td>40 </td>
                <td>80 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>41 </td>
                <td>28 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.36 </td>
              </tr>
              <tr >
                <td>7209ACETA</td>
                <td>45 </td>
                <td>85 </td>
                <td>19 </td>
                <td>0.6 </td>
                <td>0.6 </td>
                <td>41 </td>
                <td>30 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.41 </td>
              </tr>
              <tr >
                <td>7209CETA</td>
                <td>45 </td>
                <td>85 </td>
                <td>19 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>42.3 </td>
                <td>31 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.41 </td>
              </tr>
              <tr >
                <td>7210ACETA</td>
                <td>50 </td>
                <td>90 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>42.3 </td>
                <td>32.5 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.46 </td>
              </tr>
              <tr >
                <td>7210CETA</td>
                <td>50 </td>
                <td>90 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>44.9 </td>
                <td>34 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.46 </td>
              </tr>
              <tr >
                <td>7211ACETA</td>
                <td>55 </td>
                <td>100 </td>
                <td>21 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>52.7 </td>
                <td>40.5 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.61 </td>
              </tr>
              <tr >
                <td>7211CETA</td>
                <td>55 </td>
                <td>100 </td>
                <td>21 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>55.3 </td>
                <td>43 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.61 </td>
              </tr>
              <tr >
                <td>7212ACETA</td>
                <td>60 </td>
                <td>110 </td>
                <td>22 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>63.7 </td>
                <td>50 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>0.8 </td>
              </tr>
              <tr >
                <td>7212CETA</td>
                <td>60 </td>
                <td>110 </td>
                <td>22 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>67.6 </td>
                <td>53 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.8 </td>
              </tr>
              <tr >
                <td>7213ACETA</td>
                <td>65 </td>
                <td>120 </td>
                <td>23 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>72.8 </td>
                <td>57 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>1 </td>
              </tr>
              <tr >
                <td>7213CETA</td>
                <td>65 </td>
                <td>120 </td>
                <td>23 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>76.1 </td>
                <td>60 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>1 </td>
              </tr>
              <tr >
                <td>7214ACETA</td>
                <td>70 </td>
                <td>125 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>76.1 </td>
                <td>62 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>1.1 </td>
              </tr>
              <tr >
                <td>7214CETA</td>
                <td>70 </td>
                <td>125 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>64 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>1.1 </td>
              </tr>
              <tr >
                <td>7215ACETA</td>
                <td>75 </td>
                <td>130 </td>
                <td>25 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>67 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7215CETA</td>
                <td>75 </td>
                <td>130 </td>
                <td>25 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>83.2 </td>
                <td>69.5 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7216ACETA</td>
                <td>80 </td>
                <td>140 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>92.3 </td>
                <td>78 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>1.45 </td>
              </tr>
              <tr >
                <td>7216CETA</td>
                <td>80 </td>
                <td>140 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>97.5 </td>
                <td>81.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>1.45 </td>
              </tr>
              <tr >
                <td>7217ACETA</td>
                <td>85 </td>
                <td>150 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>95.5 </td>
                <td>85 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>1.8 </td>
              </tr>
              <tr >
                <td>7217CETA</td>
                <td>85 </td>
                <td>150 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>99.5 </td>
                <td>88 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>1.8 </td>
              </tr>
              <tr >
                <td>7218ACETA</td>
                <td>90 </td>
                <td>160 </td>
                <td>30 </td>
                <td>2 </td>
                <td>1 </td>
                <td>121 </td>
                <td>106 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>2.25 </td>
              </tr>
              <tr >
                <td>7218CETA</td>
                <td>90 </td>
                <td>160 </td>
                <td>30 </td>
                <td>2 </td>
                <td>1 </td>
                <td>127 </td>
                <td>112 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>2.25 </td>
              </tr>
              <tr >
                <td>7219ACETA</td>
                <td>95 </td>
                <td>170 </td>
                <td>32 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>133 </td>
                <td>114 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>2.7 </td>
              </tr>
              <tr >
                <td>7219CETA</td>
                <td>95 </td>
                <td>170 </td>
                <td>32 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>138 </td>
                <td>120 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>2.7 </td>
              </tr>
              <tr >
                <td>7220ACETA</td>
                <td>100 </td>
                <td>180 </td>
                <td>34 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>148 </td>
                <td>129 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>3.25 </td>
              </tr>
              <tr >
                <td>7220CETA</td>
                <td>100 </td>
                <td>180 </td>
                <td>34 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>156 </td>
                <td>137 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>3.25 </td>
              </tr>
              <tr >
                <td>7221ACETA</td>
                <td>105 </td>
                <td>190 </td>
                <td>36 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>163 </td>
                <td>146 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>3.85 </td>
              </tr>
              <tr >
                <td>7221CETA</td>
                <td>105 </td>
                <td>190 </td>
                <td>36 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>172 </td>
                <td>153 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>3.85 </td>
              </tr>
              <tr >
                <td>7222ACETA</td>
                <td>110 </td>
                <td>200 </td>
                <td>38 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>168 </td>
                <td>160 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>4.55 </td>
              </tr>
              <tr >
                <td>7222CETA</td>
                <td>110 </td>
                <td>200 </td>
                <td>38 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>178 </td>
                <td>166 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>4.55 </td>
              </tr>
              <tr >
                <td>7224ACETA</td>
                <td>120 </td>
                <td>215 </td>
                <td>40 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>190 </td>
                <td>183 </td>
                <td>6700 </td>
                <td>9000 </td>
                <td>5.4 </td>
              </tr>
              <tr >
                <td>7224CETA</td>
                <td>120 </td>
                <td>215 </td>
                <td>40 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>199 </td>
                <td>193 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>5.4 </td>
              </tr>
              <tr >
                <td>7226ACETA</td>
                <td>130 </td>
                <td>230 </td>
                <td>40 </td>
                <td>3 </td>
                <td>1.1 </td>
                <td>203 </td>
                <td>212 </td>
                <td>5600 </td>
                <td>8500 </td>
                <td>6.3 </td>
              </tr>
              <tr >
                <td>7226CETA</td>
                <td>130 </td>
                <td>230 </td>
                <td>40 </td>
                <td>3 </td>
                <td>1.1 </td>
                <td>216 </td>
                <td>224 </td>
                <td>6300 </td>
                <td>9500 </td>
                <td>6.3 </td>
              </tr>
              <tr >
                <td>71900ACETA</td>
                <td>10 </td>
                <td>22 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.42 </td>
                <td>1.06 </td>
                <td>63000 </td>
                <td>95000 </td>
                <td>0.009 </td>
              </tr>
              <tr >
                <td>71900CETA</td>
                <td>10 </td>
                <td>22 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.51 </td>
                <td>1.1 </td>
                <td>70000 </td>
                <td>110000 </td>
                <td>0.009 </td>
              </tr>
              <tr >
                <td>71901ACETA</td>
                <td>12 </td>
                <td>24 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.55 </td>
                <td>1.18 </td>
                <td>56000 </td>
                <td>85000 </td>
                <td>0.01 </td>
              </tr>
              <tr >
                <td>71901CETA</td>
                <td>12 </td>
                <td>24 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.65 </td>
                <td>1.25 </td>
                <td>63000 </td>
                <td>95000 </td>
                <td>0.01 </td>
              </tr>
              <tr >
                <td>71902ACETA</td>
                <td>15 </td>
                <td>28 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.77 </td>
                <td>1.8 </td>
                <td>50000 </td>
                <td>75000 </td>
                <td>0.015 </td>
              </tr>
              <tr >
                <td>71902CETA</td>
                <td>15 </td>
                <td>28 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.97 </td>
                <td>1.9 </td>
                <td>56000 </td>
                <td>85000 </td>
                <td>0.015 </td>
              </tr>
              <tr >
                <td>71903ACETA</td>
                <td>17 </td>
                <td>30 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.97 </td>
                <td>2 </td>
                <td>45000 </td>
                <td>67000 </td>
                <td>0.017 </td>
              </tr>
              <tr >
                <td>71903CETA</td>
                <td>17 </td>
                <td>30 </td>
                <td>3 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.16 </td>
                <td>2.08 </td>
                <td>50000 </td>
                <td>75000 </td>
                <td>0.017 </td>
              </tr>
              <tr >
                <td>71904ACETA</td>
                <td>20 </td>
                <td>37 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>5.72 </td>
                <td>3.05 </td>
                <td>38000 </td>
                <td>56000 </td>
                <td>0.035 </td>
              </tr>
              <tr >
                <td>71904CETA</td>
                <td>20 </td>
                <td>37 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>6.05 </td>
                <td>3.2 </td>
                <td>43000 </td>
                <td>63000 </td>
                <td>0.035 </td>
              </tr>
              <tr >
                <td>71905ACETA</td>
                <td>25 </td>
                <td>42 </td>
                <td>9 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>6.37 </td>
                <td>3.8 </td>
                <td>32000 </td>
                <td>48000 </td>
                <td>0.042 </td>
              </tr>
              <tr >
                <td>71905CETA</td>
                <td>25 </td>
                <td>42 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>6.75 </td>
                <td>4 </td>
                <td>36000 </td>
                <td>53000 </td>
                <td>0.042 </td>
              </tr>
              <tr >
                <td>71906ACETA</td>
                <td>30 </td>
                <td>47 </td>
                <td>9 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>6.76 </td>
                <td>4.3 </td>
                <td>26000 </td>
                <td>40000 </td>
                <td>0.048 </td>
              </tr>
              <tr >
                <td>71906CETA</td>
                <td>30 </td>
                <td>47 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>7.15 </td>
                <td>4.55 </td>
                <td>30000 </td>
                <td>45000 </td>
                <td>0.048 </td>
              </tr>
              <tr >
                <td>71907ACETA</td>
                <td>30 </td>
                <td>55 </td>
                <td>10 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>9.23 </td>
                <td>6.2 </td>
                <td>22000 </td>
                <td>36000 </td>
                <td>0.074 </td>
              </tr>
              <tr >
                <td>71907CETA</td>
                <td>35 </td>
                <td>55 </td>
                <td>10 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>9.75 </td>
                <td>6.55 </td>
                <td>26000 </td>
                <td>40000 </td>
                <td>0.074 </td>
              </tr>
              <tr >
                <td>71908ACETA</td>
                <td>40 </td>
                <td>62 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>12.4 </td>
                <td>8.5 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>71908CETA</td>
                <td>40 </td>
                <td>62 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>12.4 </td>
                <td>8.5 </td>
                <td>20000 </td>
                <td>34000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>71909ACETA</td>
                <td>45 </td>
                <td>68 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>12.4 </td>
                <td>9 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71909CETA</td>
                <td>45 </td>
                <td>68 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>13 </td>
                <td>9.5 </td>
                <td>19000 </td>
                <td>32000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71910ACETA</td>
                <td>50 </td>
                <td>72 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>12.7 </td>
                <td>9.8 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71910CETA</td>
                <td>50 </td>
                <td>72 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>13.5 </td>
                <td>10.4 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71911ACETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>18.2 </td>
                <td>13.7 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.18 </td>
              </tr>
              <tr >
                <td>71911CETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.5 </td>
                <td>14.6 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.18 </td>
              </tr>
              <tr >
                <td>71912ACETA</td>
                <td>55 </td>
                <td>85 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>18.6 </td>
                <td>14.6 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>71912CETA</td>
                <td>55 </td>
                <td>85 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.9 </td>
                <td>15.3 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>71913ACETA</td>
                <td>60 </td>
                <td>90 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.5 </td>
                <td>16 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.21 </td>
              </tr>
              <tr >
                <td>71913CETA</td>
                <td>60 </td>
                <td>90 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.5 </td>
                <td>16 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.21 </td>
              </tr>
              <tr >
                <td>71914ACETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>32.5 </td>
                <td>32.5 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>0.33 </td>
              </tr>
              <tr >
                <td>71914CETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>34.5 </td>
                <td>34 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.33 </td>
              </tr>
              <tr >
                <td>71915ACETA</td>
                <td>70 </td>
                <td>105 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>33.8 </td>
                <td>35.5 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.35 </td>
              </tr>
              <tr >
                <td>71915CETA</td>
                <td>70 </td>
                <td>105 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>35.8 </td>
                <td>37.5 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>0.35 </td>
              </tr>
              <tr >
                <td>71916ACETA</td>
                <td>75 </td>
                <td>110 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>34.5 </td>
                <td>36.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>71916CETA</td>
                <td>75 </td>
                <td>110 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>36.4 </td>
                <td>39 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>71917ACETA</td>
                <td>80 </td>
                <td>120 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>43.6 </td>
                <td>45.5 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>0.53 </td>
              </tr>
              <tr >
                <td>71917CETA</td>
                <td>80 </td>
                <td>1201 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>46.2 </td>
                <td>48 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.53 </td>
              </tr>
              <tr >
                <td>71918ACETA</td>
                <td>85 </td>
                <td>125 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>44.2 </td>
                <td>48 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>0.55 </td>
              </tr>
              <tr >
                <td>71918CETA</td>
                <td>85 </td>
                <td>110 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>47.5 </td>
                <td>51 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.55 </td>
              </tr>
              <tr >
                <td>71919ACETA</td>
                <td>90 </td>
                <td>140 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>46.2 </td>
                <td>52 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>0.58 </td>
              </tr>
              <tr >
                <td>71919CETA</td>
                <td>90 </td>
                <td>130 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>49.4 </td>
                <td>54 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>0.58 </td>
              </tr>
            </table>
          </div>
          `,
          productName_9: 'Bearing rings',
          productDescription_9: `
            <h2>Bearing rings</h2>
            <div class="products_r_l"><img src="product/p9.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p style="text-indet:2em">
            TOSIN started with ring production in 1995 and has a history of more than 20 years of bearing ring production. It produces various high-grade precision bearing rings, thin-walled bearing rings, non-standard bearing rings, etc. All steel is purchased from China's largest and top bearing steel manufacturer - Jiangyin Xingcheng Special Steel Co., Ltd. under CITIC Pacific Group.<br />
            TOSIN's ring department adopts a fully automatic continuous production line and has passed the ISO9001 quality system certification. In order to better serve auto parts customers, we are applying for ISO/TS16949 certification.<br />
            Our customers include the world's largest bearing manufacturer - Sweden's SKF Group, the United States General Bearing Co., Ltd., Ningbo Gengda Group, etc.<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p9.jpg" onmouseover="showbig('product/p9.jpg')" alt="Bearing rings"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN started with ring production in 1995 and has a history of more than 20 years of bearing ring production. It produces various high-grade precision bearing rings, thin-walled bearing rings, non-standard bearing rings, etc. All steel is purchased from China's best bearing steel manufacturer - Jiangyin Xingcheng Special Steel Co., Ltd. under CITIC Pacific Group.<br />
            TOSIN's ring department adopts a fully automatic continuous production line and has passed the ISO9001 quality system certification. In order to better serve auto parts customers, we are applying for ISO/TS16949 certification.<br />
            Our customers include the world's largest bearing manufacturer - Sweden's SKF Group, the United States General Bearing Co., Ltd., Ningbo Gengda Group, etc.<br />
            </p>
            <div class="clear"></div>
            <p style="text-align:center;"><img src="images/sc1.jpg" style="width: 550px;"></p>
            <div class="clear"></div>
            <strong>Our customers</strong><br />
            <img src="images/skf.png" style="width: 200px;padding-left:30px;">
            <img src="images/general.jpeg" style="width: 180px;padding-left:30px;">
            <img src="images/gd.png" style="width: 400px;padding-left:30px;">
          `
        }
      },
      zh: {
        translation: {
          aboutUs: '关于我们',
          products: '产品',
          contactUs: '联系我们',
          heroTitle: '慈溪市拓新轴承有限公司',
          heroSubtitle: '专业从事非标/不锈钢轴承设计和生产',
          aboutTitle: '关于我们',
          aboutContent: '慈溪市拓新轴承有限公司是一家专业从事非标/不锈钢轴承设计和生产的制造型企业。公司位于长三角杭州湾畔的慈溪市。公司成立于1995年，主厂区占地面积15000平方米。由一个成品轴承厂和两个附属的全资轴承套圈厂组成。公司专业生产非标轴承。',
          productsTitle: '我们的产品',
          contactTitle: '联系我们',
          contactAddress: '地址: 浙江省慈溪市周巷镇环城西路111号',
          contactPhone: '电话: (+86) 138 5832 9978',
          contactFax: '传真: (+86) 574 6330 5855',
          contactEmail: '邮箱: sales@tosinbearing.com',
          footerText: '© {{year}} 慈溪市拓新轴承有限公司 版权所有。',
          productName_1: '不锈钢轴承',
          productDescription_1: `
            <h2>不鏽鋼軸承</h2>
            <div class="products_r_l"><img src="product/p1.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>內外圈:</strong> AISI440C, AISI304，AISI316L, SI3N4, ZRO2<br />
            <strong>鋼球:</strong> AISI440C, SI3N4, ZRO2 (AISI304，AISI316 BALLS only for 304,316 RINGS) <br />
            <strong>保持架:</strong> AISI304，PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>防塵蓋:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>精度等級:</strong> ABEC-1，ABEC-3，ABEC-5<br />
            <strong>噪音等級:</strong> Z1，Z2，Z3<br />
            <strong>震動等級:</strong> V1，V2<br />
            <strong>遊隙代碼:</strong> C0, C2, C3, C4, C5  <br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p1.jpg" onmouseover="showbig('product/p1.jpg')" alt="不鏽鋼軸承"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>作為TOSIN的主要產品，不銹鋼軸承以優異的耐腐蝕性能和比肩軸承鋼的運轉性能而廣泛運用於醫療器械、食品加工機械、海洋工程設備、遠洋船舶和特殊高低溫設備中。TOSIN提供包括AISI440C、AISI304、AISI316L等材料在內的不同材質不銹鋼軸承。TOSIN新研發的特殊表面處理技術可以大幅提高軸承的耐鹽霧和耐腐蝕性能，以適應各種惡劣使用工況。
            </p>
            <div class="clear"></div>
            <div class="clear"></div> <br />
            <strong>技術參數</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
            <img src="product/products5.jpg" width="1100px">
            <img src="product/products6.jpg" width="1100px">
            <img src="product/products7.jpg" width="1100px">
          `,
          productName_2: '陶瓷球轴承',
          productDescription_2: `
            <h2>陶瓷球軸承</h2>
            <div class="products_r_l"><img src="product/p2.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>內外圈:</strong> AISI440C, SI3N4，ZRO2<br />
            <strong>鋼球:</strong> SI3N4, ZRO2  <br />
            <strong>保持架:</strong> AISI304，PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>防塵蓋:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>噪音等級:</strong> Z1，Z2，Z3<br />
            <strong>震動等級:</strong> V1，V2<br />
            <strong>遊隙代碼:</strong> C0, C2, C3, C4, C5  <br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p2.jpg" onmouseover="showbig('product/p2.jpg')" alt="陶瓷球軸承"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN提供全系列的陶瓷球軸承來滿足客戶高轉速和高精密的要求。陶瓷球軸承以其特有的材料性能，帶來更高的轉速，更輕的重量，更順暢的運轉和更久的壽命。TOSIN陶瓷球軸承可對內外圈(AISI440C, GCr15，SI3N4, ZRO2)和球體(SI3N4, ZRO2)材質進行任意選擇。
            </p>
            <div class="clear"></div>
            <strong>技術參數</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
            <img src="product/products5.jpg" width="1100px">
            <img src="product/products6.jpg" width="1100px">
            <img src="product/products7.jpg" width="1100px">
          `,
          productName_3: '精密薄壁轴承',
          productDescription_3: `
            <h2>精密薄壁軸承</h2>
            <div class="products_r_l"><img src="product/p3.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>內外圈:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>鋼球:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>保持架:</strong> AISI304, PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>防塵蓋:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>精度等級:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7<br />
            <strong>噪音等級:</strong> Z1，Z2，Z3, Z4<br />
            <strong>震動等級:</strong> V1，V2, V3<br />
            <strong>遊隙代碼:</strong> C0, C2, C3, C4, C5  <br />
            <strong>密封形式:</strong> OPEN, Z, ZZ, RS, 2RS, 2RZ<br />
            <strong>硬度:</strong> 58-63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p3.jpg" onmouseover="showbig('product/p3.jpg')" alt="精密薄壁軸承"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>薄壁軸承具有摩擦力矩小、剛度高、轉動精度好等特點。TOSIN在6700、6800、6900、B5XX等系列的薄壁軸承上擁有超過20年的生產經驗，因此贏得了許多客戶的青睞。我們的6800、6900等產品，可以達到Z3V3的質量等級。
            </p>
            <div class="clear"></div>
            <strong>技術參數</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
          `,
          productName_4: '精密EMQ电机级轴承',
          productDescription_4: `
            <h2>精密EMQ電機級軸承</h2>
            <div class="products_r_l"><img src="product/p4.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>密封形式:</strong> OPEN, Z, ZZ, RS, 2RS, 2RZ<br />
            <strong>精度等級:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7 <br />
            <strong>震動等級:</strong> V1, V2, V3, V4 <br />
            <strong>噪音等級:</strong> Z1，Z2，Z3，Z4 <br />
            <strong>遊隙代碼:</strong> C0, C2, C3, C4, C5 <br />
            <strong>軸承材料:</strong> GCr15 <br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p4.jpg" onmouseover="showbig('product/p4.jpg')" alt="精密EMQ電機級軸承"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN為許多歐美企業代工EMQ精密電機軸承，鋼材采購自江陰興澄特鋼，質量最高可以達到Z4V4級別，產品廣泛運用於各種家電、電動工具、汽車零部件等。
            </p>
            <div class="clear"></div>
            <strong>技術參數</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
            <img src="product/products5.jpg" width="1100px">
            <img src="product/products6.jpg" width="1100px">
            <img src="product/products7.jpg" width="1100px">
          `,
          productName_5: '非标/满球轴承',
          productDescription_5: `
            <h2>非標/滿球軸承</h2>
            <div class="products_r_l"><img src="product/p7.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内外圈:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>鋼球:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>保持架:</strong> AISI304, PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>防塵蓋:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>精度等級:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7<br />
            <strong>遊隙代碼:</strong> C0, C2, C3, C4, C5  <br />
            <strong>密封形式:</strong> OPEN, Z, ZZ, RS, 2RS, 2RZ<br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p7.jpg" onmouseover="showbig('product/p7.jpg')" alt="非標/滿球軸承"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN在非標軸承的研發制造商擁有豐富的經驗，產品包括滿球軸承、單面/雙面突出軸承，包塑軸承，特殊尺寸軸承，特殊結構軸承等，運用非常廣泛。作為生產非標軸承的壹個特別優勢，從毛坯套圈到成品均全部由TOSIN自有工廠生產。
            </p>
          `,
          productName_6: '法兰轴承',
          productDescription_6: `
            <h2>法蘭軸承</h2>
            <div class="products_r_l"><img src="product/p5.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内外圈:</strong> GCr15, AISI440C<br />
            <strong>鋼球:</strong> GCr15, AISI440C<br />
            <strong>保持架:</strong> AISI304<br />
            <strong>防塵蓋:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>精度等級:</strong> ABEC-1，ABEC-3，ABEC-5<br />
            <strong>噪音等級:</strong> Z1，Z2，Z3<br />
            <strong>震動等級:</strong> V1，V2<br />
            <strong>遊隙代碼:</strong> C0, C2, C3, C4, C5  <br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p5.jpg" onmouseover="showbig('product/p5.jpg')" alt="法蘭軸承"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN法蘭軸承廣泛用於電機、OA系統、牙鉆等領域。我們提供軸承鋼和不銹鋼兩種材質，供用戶選擇。
            </p>
            <div class="clear"></div>
            <strong>技術參數</strong><br />
            <img src="product/products5.jpg" style="width: 1100px;">
            <img src="product/products7.jpg" style="width: 1100px;">
          `,
          productName_7: '自行车碗组轴承',
          productDescription_7: `
            <h2>自行車碗組軸承</h2>
            <div class="products_r_l"><img src="product/p6.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内外圈:</strong> GCr15, AISI440C<br />
            <strong>鋼球:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>保持架:</strong> AISI304, PA66<br />
            <strong>防塵蓋:</strong> AISI304, NBR<br />
            <strong>精度等級:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7  <br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p6.jpg" onmouseover="showbig('product/p6.jpg')" alt="自行車碗組軸承"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN已經為高檔自行車客戶開發出許多種運用於的不同型號的自行車碗組軸承。TOSIN的自有套圈工廠作為優勢，可以更加方便地滿足客戶的特殊需求。
            </p>
          `,
          productName_8: '角接触轴承',
          productDescription_8: `
            <h2>角接觸軸承</h2>
            <div class="products_r_l"><img src="product/p8.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内外圈:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>鋼球:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>保持架:</strong> PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>精度等級:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7<br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p8.jpg" onmouseover="showbig('product/p8.jpg')" alt="角接觸軸承"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>角接觸軸承以其特殊的結構，可以承受大量的軸向負荷與徑向負荷。TOSIN同樣可以按照客戶的特殊要求進行定制。
            </p>
            <div class="clear"></div>
            <div id="maintable">
            <div class="clear"></div>
            <strong>技術參數</strong><br />
            <table class="tablestyle1" cellpadding="1" cellspacing="1" >
              <tr class="top" >
                <td>名稱 </td>
                <td>d/mm</td>
                <td>D/mm </td>
                <td>B/mm </td>
                <td>rs/min </td>
                <td>ris/min </td>
                <td>動載荷/動態 </td>
                <td>靜載荷/靜態 </td>
                <td>脂潤滑</td>
                <td>油潤滑 </td>
                <td>重量/Kg </td>
              </tr>
              <tr >
                <td>708ACETA</td>
                <td>8 </td>
                <td>22 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.91 </td>
                <td>1.12 </td>
                <td>67000 </td>
                <td>100000 </td>
                <td>0.011 </td>
              </tr>
              <tr >
                <td>708CETA</td>
                <td>8 </td>
                <td>22 </td>
                <td>3 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.96 </td>
                <td>1.16 </td>
                <td>70000 </td>
                <td>110000 </td>
                <td>0.011 </td>
              </tr>
              <tr >
                <td>709ACETA</td>
                <td>9 </td>
                <td>24 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.12 </td>
                <td>1.29 </td>
                <td>63000 </td>
                <td>95000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>709CETA</td>
                <td>9 </td>
                <td>24 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.25 </td>
                <td>1.34 </td>
                <td>70000 </td>
                <td>110000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>7000ACETA</td>
                <td>10 </td>
                <td>26 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.97 </td>
                <td>1.6 </td>
                <td>56000 </td>
                <td>85000 </td>
                <td>0.018 </td>
              </tr>
              <tr >
                <td>7000CETA</td>
                <td>10 </td>
                <td>26 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.1 </td>
                <td>1.66 </td>
                <td>67000 </td>
                <td>100000 </td>
                <td>0.18 </td>
              </tr>
              <tr >
                <td>7001ACETA</td>
                <td>12 </td>
                <td>28 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.36 </td>
                <td>1.83 </td>
                <td>53000 </td>
                <td>80000 </td>
                <td>0.02 </td>
              </tr>
              <tr >
                <td>7001CETA</td>
                <td>12 </td>
                <td>28 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.49 </td>
                <td>1.9 </td>
                <td>60000 </td>
                <td>90000 </td>
                <td>0.02 </td>
              </tr>
              <tr >
                <td>7002ACETA</td>
                <td>15 </td>
                <td>32 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.94 </td>
                <td>2.32 </td>
                <td>45000 </td>
                <td>67000 </td>
                <td>0.028 </td>
              </tr>
              <tr >
                <td>7002CETA</td>
                <td>15 </td>
                <td>32 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>5.2 </td>
                <td>2.45 </td>
                <td>50000 </td>
                <td>70000 </td>
                <td>0.028 </td>
              </tr>
              <tr >
                <td>7003ACETA</td>
                <td>17 </td>
                <td>35 </td>
                <td>10 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>6.5 </td>
                <td>3.1 </td>
                <td>40000 </td>
                <td>60000 </td>
                <td>0.037 </td>
              </tr>
              <tr >
                <td>7003CETA</td>
                <td>17 </td>
                <td>35 </td>
                <td>10 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>6.76 </td>
                <td>3.25 </td>
                <td>48000 </td>
                <td>70000 </td>
                <td>0.037 </td>
              </tr>
              <tr >
                <td>7004ACETA</td>
                <td>20 </td>
                <td>42 </td>
                <td>12 </td>
                <td>0.3 </td>
                <td>0.3 </td>
                <td>8.32 </td>
                <td>4.15 </td>
                <td>34000 </td>
                <td>50000 </td>
                <td>0.065 </td>
              </tr>
              <tr >
                <td>7004CETA</td>
                <td>20 </td>
                <td>42 </td>
                <td>12 </td>
                <td>0.3 </td>
                <td>0.3 </td>
                <td>8.17 </td>
                <td>4.3 </td>
                <td>38000 </td>
                <td>56000 </td>
                <td>0.065 </td>
              </tr>
              <tr >
                <td>7005ACETA</td>
                <td>24 </td>
                <td>47 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>9.23 </td>
                <td>5 </td>
                <td>28000 </td>
                <td>43000 </td>
                <td>0.075 </td>
              </tr>
              <tr >
                <td>7005CETA</td>
                <td>25 </td>
                <td>47 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>9.56 </td>
                <td>5.2 </td>
                <td>34000 </td>
                <td>50000 </td>
                <td>0.075 </td>
              </tr>
              <tr >
                <td>7006ACETA</td>
                <td>30 </td>
                <td>55 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>13.8 </td>
                <td>7.65 </td>
                <td>24000 </td>
                <td>38000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>7006CETA</td>
                <td>30 </td>
                <td>55 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>14.3 </td>
                <td>8 </td>
                <td>28000 </td>
                <td>43000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>7007ACETA</td>
                <td>35 </td>
                <td>62 </td>
                <td>14 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>14.8 </td>
                <td>9 </td>
                <td>19000 </td>
                <td>32000 </td>
                <td>0.15 </td>
              </tr>
              <tr >
                <td>7007CETA</td>
                <td>35 </td>
                <td>62 </td>
                <td>14 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>15.6 </td>
                <td>9.5 </td>
                <td>22000 </td>
                <td>36000 </td>
                <td>0.15 </td>
              </tr>
              <tr >
                <td>7008ACETA</td>
                <td>40 </td>
                <td>68 </td>
                <td>15 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>15.9 </td>
                <td>10.4 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7008CETA</td>
                <td>40 </td>
                <td>68 </td>
                <td>15 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>16.8 </td>
                <td>11 </td>
                <td>19000 </td>
                <td>32000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7009ACETA</td>
                <td>45 </td>
                <td>75 </td>
                <td>16 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>28.6 </td>
                <td>22.4 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.23 </td>
              </tr>
              <tr >
                <td>7009CETA</td>
                <td>45 </td>
                <td>75 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>28.6 </td>
                <td>22.4 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.23 </td>
              </tr>
              <tr >
                <td>7010ACETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>16 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>28.1 </td>
                <td>23.2 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.25 </td>
              </tr>
              <tr >
                <td>7010CETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>29.6 </td>
                <td>24 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.25 </td>
              </tr>
              <tr >
                <td>7011ACETA</td>
                <td>50 </td>
                <td>90 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>37.1 </td>
                <td>31 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>7011CETA</td>
                <td>55 </td>
                <td>90 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>39.7 </td>
                <td>32.5 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>7012ACETA</td>
                <td>60 </td>
                <td>95 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>39 </td>
                <td>33.5 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.4 </td>
              </tr>
              <tr >
                <td>7012CETA</td>
                <td>60 </td>
                <td>95 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>40.3 </td>
                <td>34.5 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.4 </td>
              </tr>
              <tr >
                <td>7013ACETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>39 </td>
                <td>35.5 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>0.42 </td>
              </tr>
              <tr >
                <td>7013CETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>41.6 </td>
                <td>37.5 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.42 </td>
              </tr>
              <tr >
                <td>7014ACETA</td>
                <td>70 </td>
                <td>110 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>48.8 </td>
                <td>44 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.59 </td>
              </tr>
              <tr >
                <td>7014CETA</td>
                <td>70 </td>
                <td>110 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>52 </td>
                <td>45.5 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>0.59 </td>
              </tr>
              <tr >
                <td>7015ACETA</td>
                <td>75 </td>
                <td>115 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>49.4 </td>
                <td>46.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.62 </td>
              </tr>
              <tr >
                <td>7015CETA</td>
                <td>75 </td>
                <td>115 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>52.2 </td>
                <td>49 </td>
                <td>12000 </td>
                <td>18000 </td>
                <td>0.62 </td>
              </tr>
              <tr >
                <td>7016ACETA</td>
                <td>80 </td>
                <td>125 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>62.4 </td>
                <td>58.5 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>0.85 </td>
              </tr>
              <tr >
                <td>7016CETA</td>
                <td>80 </td>
                <td>125 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>65 </td>
                <td>61 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.85 </td>
              </tr>
              <tr >
                <td>7017ACETA</td>
                <td>85 </td>
                <td>130 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>63.7 </td>
                <td>62 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>0.89 </td>
              </tr>
              <tr >
                <td>7017CETA</td>
                <td>85 </td>
                <td>130 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>67.6 </td>
                <td>65.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.89 </td>
              </tr>
              <tr >
                <td>7018ACETA</td>
                <td>90 </td>
                <td>140 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>74.1 </td>
                <td>72 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>1.15 </td>
              </tr>
              <tr >
                <td>7018CETA</td>
                <td>90 </td>
                <td>140 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>76.5 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>1.15 </td>
              </tr>
              <tr >
                <td>7019ACETA</td>
                <td>95 </td>
                <td>145 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>76.1 </td>
                <td>76.5 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7019CETA</td>
                <td>95 </td>
                <td>145 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>81.9 </td>
                <td>80 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7020ACETA</td>
                <td>100 </td>
                <td>150 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>80 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.25 </td>
              </tr>
              <tr >
                <td>7020CETA</td>
                <td>100 </td>
                <td>150 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>82.3 </td>
                <td>85 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>1.25 </td>
              </tr>
              <tr >
                <td>7021ACETA</td>
                <td>105 </td>
                <td>160 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>90.4 </td>
                <td>93 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.6 </td>
              </tr>
              <tr >
                <td>7021CETA</td>
                <td>105 </td>
                <td>160 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>95.6 </td>
                <td>96.5 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.6 </td>
              </tr>
              <tr >
                <td>7022ACETA</td>
                <td>110 </td>
                <td>170 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>104 </td>
                <td>104 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>1.95 </td>
              </tr>
              <tr >
                <td>7022CETA</td>
                <td>110 </td>
                <td>170 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>111 </td>
                <td>108 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.95 </td>
              </tr>
              <tr >
                <td>7024ACETA</td>
                <td>120 </td>
                <td>180 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>111 </td>
                <td>116 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>2.1 </td>
              </tr>
              <tr >
                <td>7024CETA</td>
                <td>120 </td>
                <td>180 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>114 </td>
                <td>122 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>2.1 </td>
              </tr>
              <tr >
                <td>7026ACETA</td>
                <td>130 </td>
                <td>200 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>140 </td>
                <td>150 </td>
                <td>6000 </td>
                <td>9000 </td>
                <td>3.2 </td>
              </tr>
              <tr >
                <td>7026CETA</td>
                <td>130 </td>
                <td>200 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>148 </td>
                <td>156 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>&nbsp;</td>
              </tr>
              <tr >
                <td>7028ACETA</td>
                <td>140 </td>
                <td>210 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>146 </td>
                <td>156 </td>
                <td>5600 </td>
                <td>8500 </td>
                <td>3.4 </td>
              </tr>
              <tr >
                <td>7028CETA</td>
                <td>140 </td>
                <td>210 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>153 </td>
                <td>166 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>3.4 </td>
              </tr>
              <tr >
                <td>7200ACETA</td>
                <td>10 </td>
                <td>30 </td>
                <td>9 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.2 </td>
                <td>2.12 </td>
                <td>53000 </td>
                <td>80000 </td>
                <td>0.029 </td>
              </tr>
              <tr >
                <td>7200CETA</td>
                <td>10 </td>
                <td>30 </td>
                <td>9 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.4 </td>
                <td>2.2 </td>
                <td>60000 </td>
                <td>90000 </td>
                <td>0.029 </td>
              </tr>
              <tr >
                <td>7201ACETA</td>
                <td>12 </td>
                <td>32 </td>
                <td>10 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.72 </td>
                <td>2.45 </td>
                <td>48000 </td>
                <td>70000 </td>
                <td>0.036 </td>
              </tr>
              <tr >
                <td>7201CETA</td>
                <td>12 </td>
                <td>32 </td>
                <td>10 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.85 </td>
                <td>2.55 </td>
                <td>53000 </td>
                <td>80000 </td>
                <td>0.036 </td>
              </tr>
              <tr >
                <td>7202ACETA</td>
                <td>15 </td>
                <td>35 </td>
                <td>11 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>7.15 </td>
                <td>3.2 </td>
                <td>43000 </td>
                <td>63000 </td>
                <td>0.043 </td>
              </tr>
              <tr >
                <td>7202CETA</td>
                <td>15 </td>
                <td>35 </td>
                <td>11 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>7.41 </td>
                <td>3.35 </td>
                <td>48000 </td>
                <td>70000 </td>
                <td>0.043 </td>
              </tr>
              <tr >
                <td>7203ACETA</td>
                <td>14 </td>
                <td>40 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>8.84 </td>
                <td>4 </td>
                <td>38000 </td>
                <td>56000 </td>
                <td>0.062 </td>
              </tr>
              <tr >
                <td>7203CETA</td>
                <td>17 </td>
                <td>40 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>9.23 </td>
                <td>4.15 </td>
                <td>43000 </td>
                <td>63000 </td>
                <td>0.062 </td>
              </tr>
              <tr >
                <td>7204ACETA</td>
                <td>20 </td>
                <td>47 </td>
                <td>14 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>11.4 </td>
                <td>5.6 </td>
                <td>32000 </td>
                <td>48000 </td>
                <td>0.1 </td>
              </tr>
              <tr >
                <td>7204CETA</td>
                <td>20 </td>
                <td>47 </td>
                <td>14 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>11.9 </td>
                <td>5.85 </td>
                <td>36000 </td>
                <td>53000 </td>
                <td>0.1 </td>
              </tr>
              <tr >
                <td>7205ACETA</td>
                <td>25 </td>
                <td>52 </td>
                <td>15 </td>
                <td>0.3 </td>
                <td>0.3 </td>
                <td>13 </td>
                <td>6.95 </td>
                <td>26000 </td>
                <td>40000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>7205CETA</td>
                <td>25 </td>
                <td>52 </td>
                <td>15 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>13.5 </td>
                <td>7.2 </td>
                <td>30000 </td>
                <td>45000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>7206ACETA</td>
                <td>30 </td>
                <td>62 </td>
                <td>16 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>23.4 </td>
                <td>15.3 </td>
                <td>20000 </td>
                <td>34000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7206CETA</td>
                <td>30 </td>
                <td>62 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>24.2 </td>
                <td>16 </td>
                <td>24000 </td>
                <td>38000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7207ACETA</td>
                <td>35 </td>
                <td>72 </td>
                <td>17 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>30.7 </td>
                <td>20.8 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.28 </td>
              </tr>
              <tr >
                <td>7207CETA</td>
                <td>35 </td>
                <td>72 </td>
                <td>17 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>31.9 </td>
                <td>21.6 </td>
                <td>20000 </td>
                <td>34000 </td>
                <td>0.28 </td>
              </tr>
              <tr >
                <td>7208ACETA</td>
                <td>40 </td>
                <td>80 </td>
                <td>18 </td>
                <td>0.6 </td>
                <td>0.6 </td>
                <td>39 </td>
                <td>27 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.36 </td>
              </tr>
              <tr >
                <td>7208CETA</td>
                <td>40 </td>
                <td>80 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>41 </td>
                <td>28 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.36 </td>
              </tr>
              <tr >
                <td>7209ACETA</td>
                <td>45 </td>
                <td>85 </td>
                <td>19 </td>
                <td>0.6 </td>
                <td>0.6 </td>
                <td>41 </td>
                <td>30 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.41 </td>
              </tr>
              <tr >
                <td>7209CETA</td>
                <td>45 </td>
                <td>85 </td>
                <td>19 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>42.3 </td>
                <td>31 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.41 </td>
              </tr>
              <tr >
                <td>7210ACETA</td>
                <td>50 </td>
                <td>90 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>42.3 </td>
                <td>32.5 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.46 </td>
              </tr>
              <tr >
                <td>7210CETA</td>
                <td>50 </td>
                <td>90 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>44.9 </td>
                <td>34 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.46 </td>
              </tr>
              <tr >
                <td>7211ACETA</td>
                <td>55 </td>
                <td>100 </td>
                <td>21 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>52.7 </td>
                <td>40.5 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.61 </td>
              </tr>
              <tr >
                <td>7211CETA</td>
                <td>55 </td>
                <td>100 </td>
                <td>21 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>55.3 </td>
                <td>43 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.61 </td>
              </tr>
              <tr >
                <td>7212ACETA</td>
                <td>60 </td>
                <td>110 </td>
                <td>22 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>63.7 </td>
                <td>50 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>0.8 </td>
              </tr>
              <tr >
                <td>7212CETA</td>
                <td>60 </td>
                <td>110 </td>
                <td>22 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>67.6 </td>
                <td>53 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.8 </td>
              </tr>
              <tr >
                <td>7213ACETA</td>
                <td>65 </td>
                <td>120 </td>
                <td>23 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>72.8 </td>
                <td>57 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>1 </td>
              </tr>
              <tr >
                <td>7213CETA</td>
                <td>65 </td>
                <td>120 </td>
                <td>23 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>76.1 </td>
                <td>60 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>1 </td>
              </tr>
              <tr >
                <td>7214ACETA</td>
                <td>70 </td>
                <td>125 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>76.1 </td>
                <td>62 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>1.1 </td>
              </tr>
              <tr >
                <td>7214CETA</td>
                <td>70 </td>
                <td>125 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>64 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>1.1 </td>
              </tr>
              <tr >
                <td>7215ACETA</td>
                <td>75 </td>
                <td>130 </td>
                <td>25 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>67 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7215CETA</td>
                <td>75 </td>
                <td>130 </td>
                <td>25 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>83.2 </td>
                <td>69.5 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7216ACETA</td>
                <td>80 </td>
                <td>140 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>92.3 </td>
                <td>78 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>1.45 </td>
              </tr>
              <tr >
                <td>7216CETA</td>
                <td>80 </td>
                <td>140 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>97.5 </td>
                <td>81.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>1.45 </td>
              </tr>
              <tr >
                <td>7217ACETA</td>
                <td>85 </td>
                <td>150 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>95.5 </td>
                <td>85 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>1.8 </td>
              </tr>
              <tr >
                <td>7217CETA</td>
                <td>85 </td>
                <td>150 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>99.5 </td>
                <td>88 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>1.8 </td>
              </tr>
              <tr >
                <td>7218ACETA</td>
                <td>90 </td>
                <td>160 </td>
                <td>30 </td>
                <td>2 </td>
                <td>1 </td>
                <td>121 </td>
                <td>106 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>2.25 </td>
              </tr>
              <tr >
                <td>7218CETA</td>
                <td>90 </td>
                <td>160 </td>
                <td>30 </td>
                <td>2 </td>
                <td>1 </td>
                <td>127 </td>
                <td>112 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>2.25 </td>
              </tr>
              <tr >
                <td>7219ACETA</td>
                <td>95 </td>
                <td>170 </td>
                <td>32 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>133 </td>
                <td>114 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>2.7 </td>
              </tr>
              <tr >
                <td>7219CETA</td>
                <td>95 </td>
                <td>170 </td>
                <td>32 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>138 </td>
                <td>120 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>2.7 </td>
              </tr>
              <tr >
                <td>7220ACETA</td>
                <td>100 </td>
                <td>180 </td>
                <td>34 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>148 </td>
                <td>129 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>3.25 </td>
              </tr>
              <tr >
                <td>7220CETA</td>
                <td>100 </td>
                <td>180 </td>
                <td>34 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>156 </td>
                <td>137 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>3.25 </td>
              </tr>
              <tr >
                <td>7221ACETA</td>
                <td>105 </td>
                <td>190 </td>
                <td>36 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>163 </td>
                <td>146 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>3.85 </td>
              </tr>
              <tr >
                <td>7221CETA</td>
                <td>105 </td>
                <td>190 </td>
                <td>36 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>172 </td>
                <td>153 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>3.85 </td>
              </tr>
              <tr >
                <td>7222ACETA</td>
                <td>110 </td>
                <td>200 </td>
                <td>38 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>168 </td>
                <td>160 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>4.55 </td>
              </tr>
              <tr >
                <td>7222CETA</td>
                <td>110 </td>
                <td>200 </td>
                <td>38 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>178 </td>
                <td>166 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>4.55 </td>
              </tr>
              <tr >
                <td>7224ACETA</td>
                <td>120 </td>
                <td>215 </td>
                <td>40 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>190 </td>
                <td>183 </td>
                <td>6700 </td>
                <td>9000 </td>
                <td>5.4 </td>
              </tr>
              <tr >
                <td>7224CETA</td>
                <td>120 </td>
                <td>215 </td>
                <td>40 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>199 </td>
                <td>193 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>5.4 </td>
              </tr>
              <tr >
                <td>7226ACETA</td>
                <td>130 </td>
                <td>230 </td>
                <td>40 </td>
                <td>3 </td>
                <td>1.1 </td>
                <td>203 </td>
                <td>212 </td>
                <td>5600 </td>
                <td>8500 </td>
                <td>6.3 </td>
              </tr>
              <tr >
                <td>7226CETA</td>
                <td>130 </td>
                <td>230 </td>
                <td>40 </td>
                <td>3 </td>
                <td>1.1 </td>
                <td>216 </td>
                <td>224 </td>
                <td>6300 </td>
                <td>9500 </td>
                <td>6.3 </td>
              </tr>
              <tr >
                <td>71900ACETA</td>
                <td>10 </td>
                <td>22 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.42 </td>
                <td>1.06 </td>
                <td>63000 </td>
                <td>95000 </td>
                <td>0.009 </td>
              </tr>
              <tr >
                <td>71900CETA</td>
                <td>10 </td>
                <td>22 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.51 </td>
                <td>1.1 </td>
                <td>70000 </td>
                <td>110000 </td>
                <td>0.009 </td>
              </tr>
              <tr >
                <td>71901ACETA</td>
                <td>12 </td>
                <td>24 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.55 </td>
                <td>1.18 </td>
                <td>56000 </td>
                <td>85000 </td>
                <td>0.01 </td>
              </tr>
              <tr >
                <td>71901CETA</td>
                <td>12 </td>
                <td>24 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.65 </td>
                <td>1.25 </td>
                <td>63000 </td>
                <td>95000 </td>
                <td>0.01 </td>
              </tr>
              <tr >
                <td>71902ACETA</td>
                <td>15 </td>
                <td>28 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.77 </td>
                <td>1.8 </td>
                <td>50000 </td>
                <td>75000 </td>
                <td>0.015 </td>
              </tr>
              <tr >
                <td>71902CETA</td>
                <td>15 </td>
                <td>28 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.97 </td>
                <td>1.9 </td>
                <td>56000 </td>
                <td>85000 </td>
                <td>0.015 </td>
              </tr>
              <tr >
                <td>71903ACETA</td>
                <td>17 </td>
                <td>30 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.97 </td>
                <td>2 </td>
                <td>45000 </td>
                <td>67000 </td>
                <td>0.017 </td>
              </tr>
              <tr >
                <td>71903CETA</td>
                <td>17 </td>
                <td>30 </td>
                <td>3 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.16 </td>
                <td>2.08 </td>
                <td>50000 </td>
                <td>75000 </td>
                <td>0.017 </td>
              </tr>
              <tr >
                <td>71904ACETA</td>
                <td>20 </td>
                <td>37 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>5.72 </td>
                <td>3.05 </td>
                <td>38000 </td>
                <td>56000 </td>
                <td>0.035 </td>
              </tr>
              <tr >
                <td>71904CETA</td>
                <td>20 </td>
                <td>37 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>6.05 </td>
                <td>3.2 </td>
                <td>43000 </td>
                <td>63000 </td>
                <td>0.035 </td>
              </tr>
              <tr >
                <td>71905ACETA</td>
                <td>25 </td>
                <td>42 </td>
                <td>9 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>6.37 </td>
                <td>3.8 </td>
                <td>32000 </td>
                <td>48000 </td>
                <td>0.042 </td>
              </tr>
              <tr >
                <td>71905CETA</td>
                <td>25 </td>
                <td>42 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>6.75 </td>
                <td>4 </td>
                <td>36000 </td>
                <td>53000 </td>
                <td>0.042 </td>
              </tr>
              <tr >
                <td>71906ACETA</td>
                <td>30 </td>
                <td>47 </td>
                <td>9 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>6.76 </td>
                <td>4.3 </td>
                <td>26000 </td>
                <td>40000 </td>
                <td>0.048 </td>
              </tr>
              <tr >
                <td>71906CETA</td>
                <td>30 </td>
                <td>47 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>7.15 </td>
                <td>4.55 </td>
                <td>30000 </td>
                <td>45000 </td>
                <td>0.048 </td>
              </tr>
              <tr >
                <td>71907ACETA</td>
                <td>30 </td>
                <td>55 </td>
                <td>10 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>9.23 </td>
                <td>6.2 </td>
                <td>22000 </td>
                <td>36000 </td>
                <td>0.074 </td>
              </tr>
              <tr >
                <td>71907CETA</td>
                <td>35 </td>
                <td>55 </td>
                <td>10 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>9.75 </td>
                <td>6.55 </td>
                <td>26000 </td>
                <td>40000 </td>
                <td>0.074 </td>
              </tr>
              <tr >
                <td>71908ACETA</td>
                <td>40 </td>
                <td>62 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>12.4 </td>
                <td>8.5 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>71908CETA</td>
                <td>40 </td>
                <td>62 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>12.4 </td>
                <td>8.5 </td>
                <td>20000 </td>
                <td>34000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>71909ACETA</td>
                <td>45 </td>
                <td>68 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>12.4 </td>
                <td>9 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71909CETA</td>
                <td>45 </td>
                <td>68 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>13 </td>
                <td>9.5 </td>
                <td>19000 </td>
                <td>32000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71910ACETA</td>
                <td>50 </td>
                <td>72 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>12.7 </td>
                <td>9.8 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71910CETA</td>
                <td>50 </td>
                <td>72 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>13.5 </td>
                <td>10.4 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71911ACETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>18.2 </td>
                <td>13.7 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.18 </td>
              </tr>
              <tr >
                <td>71911CETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.5 </td>
                <td>14.6 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.18 </td>
              </tr>
              <tr >
                <td>71912ACETA</td>
                <td>55 </td>
                <td>85 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>18.6 </td>
                <td>14.6 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>71912CETA</td>
                <td>55 </td>
                <td>85 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.9 </td>
                <td>15.3 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>71913ACETA</td>
                <td>60 </td>
                <td>90 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.5 </td>
                <td>16 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.21 </td>
              </tr>
              <tr >
                <td>71913CETA</td>
                <td>60 </td>
                <td>90 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.5 </td>
                <td>16 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.21 </td>
              </tr>
              <tr >
                <td>71914ACETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>32.5 </td>
                <td>32.5 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>0.33 </td>
              </tr>
              <tr >
                <td>71914CETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>34.5 </td>
                <td>34 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.33 </td>
              </tr>
              <tr >
                <td>71915ACETA</td>
                <td>70 </td>
                <td>105 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>33.8 </td>
                <td>35.5 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.35 </td>
              </tr>
              <tr >
                <td>71915CETA</td>
                <td>70 </td>
                <td>105 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>35.8 </td>
                <td>37.5 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>0.35 </td>
              </tr>
              <tr >
                <td>71916ACETA</td>
                <td>75 </td>
                <td>110 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>34.5 </td>
                <td>36.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>71916CETA</td>
                <td>75 </td>
                <td>110 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>36.4 </td>
                <td>39 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>71917ACETA</td>
                <td>80 </td>
                <td>120 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>43.6 </td>
                <td>45.5 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>0.53 </td>
              </tr>
              <tr >
                <td>71917CETA</td>
                <td>80 </td>
                <td>1201 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>46.2 </td>
                <td>48 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.53 </td>
              </tr>
              <tr >
                <td>71918ACETA</td>
                <td>85 </td>
                <td>125 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>44.2 </td>
                <td>48 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>0.55 </td>
              </tr>
              <tr >
                <td>71918CETA</td>
                <td>85 </td>
                <td>110 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>47.5 </td>
                <td>51 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.55 </td>
              </tr>
              <tr >
                <td>71919ACETA</td>
                <td>90 </td>
                <td>140 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>46.2 </td>
                <td>52 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>0.58 </td>
              </tr>
              <tr >
                <td>71919CETA</td>
                <td>90 </td>
                <td>130 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>49.4 </td>
                <td>54 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>0.58 </td>
              </tr>
            </table>
          </div>
          `,
          productName_9: '轴承套圈',
          productDescription_9: `
            <h2>軸承套圈</h2>
            <div class="products_r_l"><img src="product/p9.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p style="text-indet:2em">
            TOSIN在1995年以套圈生產起家，已有超過20年的軸承套圈生產歷史，生產各種高級精密軸承套圈，薄壁軸承套圈，非標軸承套圈等，所有鋼材均采購自中國最大最頂尖的軸承鋼制造商——中信泰富集團旗下江陰興澄特種鋼鐵有限公司。<br />
            TOSIN的套圈部門采用全自動連續生產線，通過了ISO9001質量體系認證，為更好地服務汽車零部件客戶，我們正在申報ISO/TS16949認證。<br />
            我們的客戶包括全球第壹大軸承制造商——瑞典SKF集團，美國通用軸承有限公司，寧波更大集團等。<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p9.jpg" onmouseover="showbig('product/p9.jpg')" alt="軸承套圈"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSIN在1995年以套圈生產起家，已有超過20年的軸承套圈生產歷史，生產各種高級精密軸承套圈，薄壁軸承套圈，非標軸承套圈等，所有鋼材均采購自中國最優秀的軸承鋼制造商——中信泰富集團旗下江陰興澄特種鋼鐵有限公司。<br />
            TOSIN的套圈部門采用全自動連續生產線，通過了ISO9001質量體系認證，為更好地服務汽車零部件客戶，我們正在申報ISO/TS16949認證。<br />
            我們的客戶包括全球第壹大軸承制造商——瑞典SKF集團，美國通用軸承有限公司，寧波更大集團等。<br />
            </p>
            <div class="clear"></div>
            <p style="text-align:center;"><img src="images/sc1.jpg" style="width: 550px;"></p>
            <div class="clear"></div>
            <strong>我們的客戶</strong><br />
            <img src="images/skf.png" style="width: 200px;padding-left:30px;">
            <img src="images/general.jpeg" style="width: 180px;padding-left:30px;">
            <img src="images/gd.png" style="width: 400px;padding-left:30px;">
          `
        }
      },
      ja: {
        translation: {
          aboutUs: '会社概要',
          products: '製品',
          contactUs: 'お問い合わせ',
          heroTitle: '慈渓市拓新軸受有限公司',
          heroSubtitle: '非標準・ステンレスベアリングの設計・生産を専門とす',
          aboutTitle: '会社概要',
          aboutContent: '慈渓市拓新軸受有限公司は、非標準/ステンレス鋼軸受の設計と製造を専門とする製造企業です。同社は長江デルタの杭州湾のほとりにある慈渓市にあります。同社は1995年に設立され、主要工場の面積は15,000平方メートルです。完成した軸受工場と2つの関連する完全所有の軸受リング工場で構成されています。同社は非標準軸受の製造を専門としています。',
          productsTitle: '私たちの製品',
          contactTitle: 'お問い合わせ',
          contactAddress: '住所：浙江省慈渓市周巷鎮環城西路111号',
          contactPhone: '電話番号：(+86) 138 5832 9978',
          contactFax: 'ファックス：(+86) 574 6330 5855',
          contactEmail: 'Eメール：sales@tosinbearing.com',
          footerText: '© {{year}} 慈渓市拓新軸受有限公司 全著作権所有。',
          productName_1: 'ステンレス鋼軸受',
          productDescription_1: `
            <h2>ステンレス鋼軸受</h2>
            <div class="products_r_l"><img src="product/p1.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内輪と外輪:</strong> AISI440C, AISI304，AISI316L, SI3N4, ZRO2<br />
            <strong>ボール:</strong> AISI440C, SI3N4, ZRO2 (AISI304，AISI316 BALLS only for 304,316 RINGS) <br />
            <strong>ケージ:</strong> AISI304，PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>シールド/シール:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>精度等級:</strong> ABEC-1，ABEC-3，ABEC-5<br />
            <strong>騒音レベル:</strong> Z1，Z2，Z3<br />
            <strong>振動レベル:</strong> V1，V2<br />
            <strong>クリアランス:</strong> C0, C2, C3, C4, C5  <br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p1.jpg" onmouseover="showbig('product/p1.jpg')" alt="ステンレス鋼軸受"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSINの主力製品として、ステンレス鋼軸受は、その優れた耐食性と軸受鋼に匹敵する性能により、医療機器、食品加工機械、海洋工学機器、外航船、特殊な高温および低温機器で広く使用されています。TOSINは、AISI440C、AISI304、AISI316Lなど、さまざまな材質のステンレス鋼軸受を提供しています。TOSINが新たに開発した特殊な表面処理技術は、さまざまな過酷な作業条件に適応するために、軸受の耐塩水噴霧性と耐食性を大幅に向上させることができます。
            </p>
            <div class="clear"></div>
            <div class="clear"></div> <br />
            <strong>技術的パラメータ</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
            <img src="product/products5.jpg" width="1100px">
            <img src="product/products6.jpg" width="1100px">
            <img src="product/products7.jpg" width="1100px">
          `,
          productName_2: 'セラミックボールベアリング',
          productDescription_2: `
            <h2>セラミックボールベアリング</h2>
            <div class="products_r_l"><img src="product/p2.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内輪と外輪:</strong> AISI440C, SI3N4，ZRO2<br />
            <strong>ボール:</strong> SI3N4, ZRO2  <br />
            <strong>ケージ:</strong> AISI304，PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>シールド/シール:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>騒音レベル:</strong> Z1，Z2，Z3<br />
            <strong>振動レベル:</strong> V1，V2<br />
            <strong>クリアランス:</strong> C0, C2, C3, C4, C5  <br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p2.jpg" onmouseover="showbig('product/p2.jpg')" alt="セラミックボールベアリング"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSINは、お客様の高速・高精度の要求に応えるため、セラミックボールベアリングを幅広く提供しています。独自の材料特性により、セラミックボールベアリングは、より高速、軽量、スムーズな動作、長寿命を実現します。TOSINセラミックボールベアリングは、内輪と外輪（AISI440C、GCr15、SI3N4、ZRO2）とボール（SI3N4、ZRO2）の材料を任意に選択できます。
            </p>
            <div class="clear"></div>
            <strong>技術的パラメータ</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
            <img src="product/products5.jpg" width="1100px">
            <img src="product/products6.jpg" width="1100px">
            <img src="product/products7.jpg" width="1100px">
          `,
          productName_3: '精密薄肉軸受',
          productDescription_3: `
            <h2>精密薄肉軸受</h2>
            <div class="products_r_l"><img src="product/p3.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内輪と外輪:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>ボール:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>ケージ:</strong> AISI304, PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>シールド/シール:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>精度等級:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7<br />
            <strong>騒音レベル:</strong> Z1，Z2，Z3, Z4<br />
            <strong>振動レベル:</strong> V1，V2, V3<br />
            <strong>クリアランス:</strong> C0, C2, C3, C4, C5  <br />
            <strong>シール形式:</strong> OPEN, Z, ZZ, RS, 2RS, 2RZ<br />
            <strong>硬度:</strong> 58-63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p3.jpg" onmouseover="showbig('product/p3.jpg')" alt="精密薄肉軸受"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>薄肉軸受は、摩擦トルクが小さく、剛性が高く、回転精度が良いという特徴があります。TOSINは、6700、6800、6900、B5XXなどのシリーズの薄肉軸受で20年以上の製造経験があり、多くのお客様からご愛顧いただいています。当社の6800、6900などの製品は、Z3V3の品質レベルに達することができます。
            </p>
            <div class="clear"></div>
            <strong>技術的パラメータ</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
          `,
          productName_4: '精密EMQモーターグレードベアリング',
          productDescription_4: `
            <h2>精密EMQモーターグレードベアリング</h2>
            <div class="products_r_l"><img src="product/p4.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>シール形式:</strong> OPEN, Z, ZZ, RS, 2RS, 2RZ<br />
            <strong>精度等級:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7 <br />
            <strong>振動レベル:</strong> V1, V2, V3, V4 <br />
            <strong>騒音レベル:</strong> Z1，Z2，Z3，Z4 <br />
            <strong>クリアランス:</strong> C0, C2, C3, C4, C5 <br />
            <strong>軸受材料:</strong> GCr15 <br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p4.jpg" onmouseover="showbig('product/p4.jpg')" alt="精密EMQモーターグレードベアリング"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSINは、多くの欧米企業向けにEMQ精密モーターベアリングをOEM生産しています。鋼材は江陰興澄特殊鋼から購入しており、品質はZ4V4レベルに達することができます。製品は、さまざまな家電製品、電動工具、自動車部品などで広く使用されています。
            </p>
            <div class="clear"></div>
            <strong>技術的パラメータ</strong><br />
            <img src="product/products1.jpg" width="1100px">
            <img src="product/products2.jpg" width="1100px">
            <img src="product/products3.jpg" width="1100px">
            <img src="product/products4.jpg" width="1100px">
            <img src="product/products5.jpg" width="1100px">
            <img src="product/products6.jpg" width="1100px">
            <img src="product/products7.jpg" width="1100px">
          `,
          productName_5: '非標準/総玉軸受',
          productDescription_5: `
            <h2>非標準/総玉軸受</h2>
            <div class="products_r_l"><img src="product/p7.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内輪と外輪:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>ボール:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>ケージ:</strong> AISI304, PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>シールド/シール:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>精度等級:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7<br />
            <strong>クリアランス:</strong> C0, C2, C3, C4, C5  <br />
            <strong>シール形式:</strong> OPEN, Z, ZZ, RS, 2RS, 2RZ<br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p7.jpg" onmouseover="showbig('product/p7.jpg')" alt="非標準/総玉軸受"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSINは、非標準軸受の研究開発と製造において豊富な経験を持っています。製品には、総玉軸受、片面/両面突出軸受、プラスチックコーティング軸受、特殊サイズ軸受、特殊構造軸受などがあり、広く使用されています。非標準軸受を製造する特別な利点として、ブランクリングから完成品まですべてTOSINの自社工場で製造されています。
            </p>
          `,
          productName_6: 'フランジ軸受',
          productDescription_6: `
            <h2>フランジ軸受</h2>
            <div class="products_r_l"><img src="product/p5.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内輪と外輪:</strong> GCr15, AISI440C<br />
            <strong>ボール:</strong> GCr15, AISI440C<br />
            <strong>ケージ:</strong> AISI304<br />
            <strong>シールド/シール:</strong> AISI304, NBR, PTFE（TEFLON）, PI<br />
            <strong>精度等級:</strong> ABEC-1，ABEC-3，ABEC-5<br />
            <strong>騒音レベル:</strong> Z1，Z2，Z3<br />
            <strong>振動レベル:</strong> V1，V2<br />
            <strong>クリアランス:</strong> C0, C2, C3, C4, C5  <br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p5.jpg" onmouseover="showbig('product/p5.jpg')" alt="フランジ軸受"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSINフランジ軸受は、モーター、OAシステム、歯科用ドリルなどの分野で広く使用されています。軸受鋼とステンレス鋼の2つの材料を選択できます。
            </p>
            <div class="clear"></div>
            <strong>技術的パラメータ</strong><br />
            <img src="product/products5.jpg" style="width: 1100px;">
            <img src="product/products7.jpg" style="width: 1100px;">
          `,
          productName_7: '自転車用ヘッドセット軸受',
          productDescription_7: `
            <h2>自転車用ヘッドセット軸受</h2>
            <div class="products_r_l"><img src="product/p6.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内輪と外輪:</strong> GCr15, AISI440C<br />
            <strong>ボール:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>ケージ:</strong> AISI304, PA66<br />
            <strong>シールド/シール:</strong> AISI304, NBR<br />
            <strong>精度等級:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7  <br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p6.jpg" onmouseover="showbig('product/p6.jpg')" alt="自転車用ヘッドセット軸受"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSINは、ハイエンドの自転車顧客向けにさまざまな種類の自転車用ヘッドセット軸受を開発しました。TOSIN独自のリング工場は、顧客の特別なニーズにより便利に対応できるという利点があります。
            </p>
          `,
          productName_8: 'アンギュラ玉軸受',
          productDescription_8: `
            <h2>アンギュラ玉軸受</h2>
            <div class="products_r_l"><img src="product/p8.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p>
            <strong>内輪と外輪:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>ボール:</strong> GCr15, AISI440C, SI3N4, ZRO2<br />
            <strong>ケージ:</strong> PA66，PEEK, PTFE（TEFLON），PI<br />
            <strong>精度等級:</strong> ABEC-1, ABEC-3, ABEC-5, ABEC-7<br />
            <strong>硬度:</strong> 58 - 63HRC<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p8.jpg" onmouseover="showbig('product/p8.jpg')" alt="アンギュラ玉軸受"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>特殊な構造により、アンギュラ玉軸受は大きなアキシアル荷重とラジアル荷重に耐えることができます。TOSINは、お客様の特別な要件に応じてカスタマイズすることもできます。
            </p>
            <div class="clear"></div>
            <div id="maintable">
            <div class="clear"></div>
            <strong>技術的パラメータ</strong><br />
            <table class="tablestyle1" cellpadding="1" cellspacing="1" >
              <tr class="top" >
                <td>名前 </td>
                <td>d/mm</td>
                <td>D/mm </td>
                <td>B/mm </td>
                <td>rs/min </td>
                <td>ris/min </td>
                <td>動的荷重 </td>
                <td>静的荷重 </td>
                <td>グリース潤滑</td>
                <td>オイル潤滑 </td>
                <td>重量/Kg </td>
              </tr>
              <tr >
                <td>708ACETA</td>
                <td>8 </td>
                <td>22 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.91 </td>
                <td>1.12 </td>
                <td>67000 </td>
                <td>100000 </td>
                <td>0.011 </td>
              </tr>
              <tr >
                <td>708CETA</td>
                <td>8 </td>
                <td>22 </td>
                <td>3 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.96 </td>
                <td>1.16 </td>
                <td>70000 </td>
                <td>110000 </td>
                <td>0.011 </td>
              </tr>
              <tr >
                <td>709ACETA</td>
                <td>9 </td>
                <td>24 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.12 </td>
                <td>1.29 </td>
                <td>63000 </td>
                <td>95000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>709CETA</td>
                <td>9 </td>
                <td>24 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.25 </td>
                <td>1.34 </td>
                <td>70000 </td>
                <td>110000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>7000ACETA</td>
                <td>10 </td>
                <td>26 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.97 </td>
                <td>1.6 </td>
                <td>56000 </td>
                <td>85000 </td>
                <td>0.018 </td>
              </tr>
              <tr >
                <td>7000CETA</td>
                <td>10 </td>
                <td>26 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.1 </td>
                <td>1.66 </td>
                <td>67000 </td>
                <td>100000 </td>
                <td>0.18 </td>
              </tr>
              <tr >
                <td>7001ACETA</td>
                <td>12 </td>
                <td>28 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.36 </td>
                <td>1.83 </td>
                <td>53000 </td>
                <td>80000 </td>
                <td>0.02 </td>
              </tr>
              <tr >
                <td>7001CETA</td>
                <td>12 </td>
                <td>28 </td>
                <td>8 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.49 </td>
                <td>1.9 </td>
                <td>60000 </td>
                <td>90000 </td>
                <td>0.02 </td>
              </tr>
              <tr >
                <td>7002ACETA</td>
                <td>15 </td>
                <td>32 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.94 </td>
                <td>2.32 </td>
                <td>45000 </td>
                <td>67000 </td>
                <td>0.028 </td>
              </tr>
              <tr >
                <td>7002CETA</td>
                <td>15 </td>
                <td>32 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>5.2 </td>
                <td>2.45 </td>
                <td>50000 </td>
                <td>70000 </td>
                <td>0.028 </td>
              </tr>
              <tr >
                <td>7003ACETA</td>
                <td>17 </td>
                <td>35 </td>
                <td>10 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>6.5 </td>
                <td>3.1 </td>
                <td>40000 </td>
                <td>60000 </td>
                <td>0.037 </td>
              </tr>
              <tr >
                <td>7003CETA</td>
                <td>17 </td>
                <td>35 </td>
                <td>10 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>6.76 </td>
                <td>3.25 </td>
                <td>48000 </td>
                <td>70000 </td>
                <td>0.037 </td>
              </tr>
              <tr >
                <td>7004ACETA</td>
                <td>20 </td>
                <td>42 </td>
                <td>12 </td>
                <td>0.3 </td>
                <td>0.3 </td>
                <td>8.32 </td>
                <td>4.15 </td>
                <td>34000 </td>
                <td>50000 </td>
                <td>0.065 </td>
              </tr>
              <tr >
                <td>7004CETA</td>
                <td>20 </td>
                <td>42 </td>
                <td>12 </td>
                <td>0.3 </td>
                <td>0.3 </td>
                <td>8.17 </td>
                <td>4.3 </td>
                <td>38000 </td>
                <td>56000 </td>
                <td>0.065 </td>
              </tr>
              <tr >
                <td>7005ACETA</td>
                <td>24 </td>
                <td>47 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>9.23 </td>
                <td>5 </td>
                <td>28000 </td>
                <td>43000 </td>
                <td>0.075 </td>
              </tr>
              <tr >
                <td>7005CETA</td>
                <td>25 </td>
                <td>47 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>9.56 </td>
                <td>5.2 </td>
                <td>34000 </td>
                <td>50000 </td>
                <td>0.075 </td>
              </tr>
              <tr >
                <td>7006ACETA</td>
                <td>30 </td>
                <td>55 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>13.8 </td>
                <td>7.65 </td>
                <td>24000 </td>
                <td>38000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>7006CETA</td>
                <td>30 </td>
                <td>55 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>14.3 </td>
                <td>8 </td>
                <td>28000 </td>
                <td>43000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>7007ACETA</td>
                <td>35 </td>
                <td>62 </td>
                <td>14 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>14.8 </td>
                <td>9 </td>
                <td>19000 </td>
                <td>32000 </td>
                <td>0.15 </td>
              </tr>
              <tr >
                <td>7007CETA</td>
                <td>35 </td>
                <td>62 </td>
                <td>14 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>15.6 </td>
                <td>9.5 </td>
                <td>22000 </td>
                <td>36000 </td>
                <td>0.15 </td>
              </tr>
              <tr >
                <td>7008ACETA</td>
                <td>40 </td>
                <td>68 </td>
                <td>15 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>15.9 </td>
                <td>10.4 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7008CETA</td>
                <td>40 </td>
                <td>68 </td>
                <td>15 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>16.8 </td>
                <td>11 </td>
                <td>19000 </td>
                <td>32000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7009ACETA</td>
                <td>45 </td>
                <td>75 </td>
                <td>16 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>28.6 </td>
                <td>22.4 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.23 </td>
              </tr>
              <tr >
                <td>7009CETA</td>
                <td>45 </td>
                <td>75 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>28.6 </td>
                <td>22.4 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.23 </td>
              </tr>
              <tr >
                <td>7010ACETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>16 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>28.1 </td>
                <td>23.2 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.25 </td>
              </tr>
              <tr >
                <td>7010CETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>29.6 </td>
                <td>24 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.25 </td>
              </tr>
              <tr >
                <td>7011ACETA</td>
                <td>50 </td>
                <td>90 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>37.1 </td>
                <td>31 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>7011CETA</td>
                <td>55 </td>
                <td>90 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>39.7 </td>
                <td>32.5 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>7012ACETA</td>
                <td>60 </td>
                <td>95 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>39 </td>
                <td>33.5 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.4 </td>
              </tr>
              <tr >
                <td>7012CETA</td>
                <td>60 </td>
                <td>95 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>40.3 </td>
                <td>34.5 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.4 </td>
              </tr>
              <tr >
                <td>7013ACETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>39 </td>
                <td>35.5 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>0.42 </td>
              </tr>
              <tr >
                <td>7013CETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>41.6 </td>
                <td>37.5 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.42 </td>
              </tr>
              <tr >
                <td>7014ACETA</td>
                <td>70 </td>
                <td>110 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>48.8 </td>
                <td>44 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.59 </td>
              </tr>
              <tr >
                <td>7014CETA</td>
                <td>70 </td>
                <td>110 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>52 </td>
                <td>45.5 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>0.59 </td>
              </tr>
              <tr >
                <td>7015ACETA</td>
                <td>75 </td>
                <td>115 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>49.4 </td>
                <td>46.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.62 </td>
              </tr>
              <tr >
                <td>7015CETA</td>
                <td>75 </td>
                <td>115 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>52.2 </td>
                <td>49 </td>
                <td>12000 </td>
                <td>18000 </td>
                <td>0.62 </td>
              </tr>
              <tr >
                <td>7016ACETA</td>
                <td>80 </td>
                <td>125 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>62.4 </td>
                <td>58.5 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>0.85 </td>
              </tr>
              <tr >
                <td>7016CETA</td>
                <td>80 </td>
                <td>125 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>65 </td>
                <td>61 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.85 </td>
              </tr>
              <tr >
                <td>7017ACETA</td>
                <td>85 </td>
                <td>130 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>63.7 </td>
                <td>62 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>0.89 </td>
              </tr>
              <tr >
                <td>7017CETA</td>
                <td>85 </td>
                <td>130 </td>
                <td>22 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>67.6 </td>
                <td>65.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.89 </td>
              </tr>
              <tr >
                <td>7018ACETA</td>
                <td>90 </td>
                <td>140 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>74.1 </td>
                <td>72 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>1.15 </td>
              </tr>
              <tr >
                <td>7018CETA</td>
                <td>90 </td>
                <td>140 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>76.5 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>1.15 </td>
              </tr>
              <tr >
                <td>7019ACETA</td>
                <td>95 </td>
                <td>145 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>76.1 </td>
                <td>76.5 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7019CETA</td>
                <td>95 </td>
                <td>145 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>81.9 </td>
                <td>80 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7020ACETA</td>
                <td>100 </td>
                <td>150 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>80 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.25 </td>
              </tr>
              <tr >
                <td>7020CETA</td>
                <td>100 </td>
                <td>150 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>82.3 </td>
                <td>85 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>1.25 </td>
              </tr>
              <tr >
                <td>7021ACETA</td>
                <td>105 </td>
                <td>160 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>90.4 </td>
                <td>93 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.6 </td>
              </tr>
              <tr >
                <td>7021CETA</td>
                <td>105 </td>
                <td>160 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>95.6 </td>
                <td>96.5 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.6 </td>
              </tr>
              <tr >
                <td>7022ACETA</td>
                <td>110 </td>
                <td>170 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>104 </td>
                <td>104 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>1.95 </td>
              </tr>
              <tr >
                <td>7022CETA</td>
                <td>110 </td>
                <td>170 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>111 </td>
                <td>108 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>1.95 </td>
              </tr>
              <tr >
                <td>7024ACETA</td>
                <td>120 </td>
                <td>180 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>111 </td>
                <td>116 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>2.1 </td>
              </tr>
              <tr >
                <td>7024CETA</td>
                <td>120 </td>
                <td>180 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>114 </td>
                <td>122 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>2.1 </td>
              </tr>
              <tr >
                <td>7026ACETA</td>
                <td>130 </td>
                <td>200 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>140 </td>
                <td>150 </td>
                <td>6000 </td>
                <td>9000 </td>
                <td>3.2 </td>
              </tr>
              <tr >
                <td>7026CETA</td>
                <td>130 </td>
                <td>200 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>148 </td>
                <td>156 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>&nbsp;</td>
              </tr>
              <tr >
                <td>7028ACETA</td>
                <td>140 </td>
                <td>210 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>146 </td>
                <td>156 </td>
                <td>5600 </td>
                <td>8500 </td>
                <td>3.4 </td>
              </tr>
              <tr >
                <td>7028CETA</td>
                <td>140 </td>
                <td>210 </td>
                <td>33 </td>
                <td>2 </td>
                <td>1 </td>
                <td>153 </td>
                <td>166 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>3.4 </td>
              </tr>
              <tr >
                <td>7200ACETA</td>
                <td>10 </td>
                <td>30 </td>
                <td>9 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.2 </td>
                <td>2.12 </td>
                <td>53000 </td>
                <td>80000 </td>
                <td>0.029 </td>
              </tr>
              <tr >
                <td>7200CETA</td>
                <td>10 </td>
                <td>30 </td>
                <td>9 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.4 </td>
                <td>2.2 </td>
                <td>60000 </td>
                <td>90000 </td>
                <td>0.029 </td>
              </tr>
              <tr >
                <td>7201ACETA</td>
                <td>12 </td>
                <td>32 </td>
                <td>10 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.72 </td>
                <td>2.45 </td>
                <td>48000 </td>
                <td>70000 </td>
                <td>0.036 </td>
              </tr>
              <tr >
                <td>7201CETA</td>
                <td>12 </td>
                <td>32 </td>
                <td>10 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>5.85 </td>
                <td>2.55 </td>
                <td>53000 </td>
                <td>80000 </td>
                <td>0.036 </td>
              </tr>
              <tr >
                <td>7202ACETA</td>
                <td>15 </td>
                <td>35 </td>
                <td>11 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>7.15 </td>
                <td>3.2 </td>
                <td>43000 </td>
                <td>63000 </td>
                <td>0.043 </td>
              </tr>
              <tr >
                <td>7202CETA</td>
                <td>15 </td>
                <td>35 </td>
                <td>11 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>7.41 </td>
                <td>3.35 </td>
                <td>48000 </td>
                <td>70000 </td>
                <td>0.043 </td>
              </tr>
              <tr >
                <td>7203ACETA</td>
                <td>14 </td>
                <td>40 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>8.84 </td>
                <td>4 </td>
                <td>38000 </td>
                <td>56000 </td>
                <td>0.062 </td>
              </tr>
              <tr >
                <td>7203CETA</td>
                <td>17 </td>
                <td>40 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>9.23 </td>
                <td>4.15 </td>
                <td>43000 </td>
                <td>63000 </td>
                <td>0.062 </td>
              </tr>
              <tr >
                <td>7204ACETA</td>
                <td>20 </td>
                <td>47 </td>
                <td>14 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>11.4 </td>
                <td>5.6 </td>
                <td>32000 </td>
                <td>48000 </td>
                <td>0.1 </td>
              </tr>
              <tr >
                <td>7204CETA</td>
                <td>20 </td>
                <td>47 </td>
                <td>14 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>11.9 </td>
                <td>5.85 </td>
                <td>36000 </td>
                <td>53000 </td>
                <td>0.1 </td>
              </tr>
              <tr >
                <td>7205ACETA</td>
                <td>25 </td>
                <td>52 </td>
                <td>15 </td>
                <td>0.3 </td>
                <td>0.3 </td>
                <td>13 </td>
                <td>6.95 </td>
                <td>26000 </td>
                <td>40000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>7205CETA</td>
                <td>25 </td>
                <td>52 </td>
                <td>15 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>13.5 </td>
                <td>7.2 </td>
                <td>30000 </td>
                <td>45000 </td>
                <td>0.14 </td>
              </tr>
              <tr >
                <td>7206ACETA</td>
                <td>30 </td>
                <td>62 </td>
                <td>16 </td>
                <td>0.6 </td>
                <td>0.3 </td>
                <td>23.4 </td>
                <td>15.3 </td>
                <td>20000 </td>
                <td>34000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7206CETA</td>
                <td>30 </td>
                <td>62 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>24.2 </td>
                <td>16 </td>
                <td>24000 </td>
                <td>38000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>7207ACETA</td>
                <td>35 </td>
                <td>72 </td>
                <td>17 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>30.7 </td>
                <td>20.8 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.28 </td>
              </tr>
              <tr >
                <td>7207CETA</td>
                <td>35 </td>
                <td>72 </td>
                <td>17 </td>
                <td>1.1 </td>
                <td>0.3 </td>
                <td>31.9 </td>
                <td>21.6 </td>
                <td>20000 </td>
                <td>34000 </td>
                <td>0.28 </td>
              </tr>
              <tr >
                <td>7208ACETA</td>
                <td>40 </td>
                <td>80 </td>
                <td>18 </td>
                <td>0.6 </td>
                <td>0.6 </td>
                <td>39 </td>
                <td>27 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.36 </td>
              </tr>
              <tr >
                <td>7208CETA</td>
                <td>40 </td>
                <td>80 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>41 </td>
                <td>28 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.36 </td>
              </tr>
              <tr >
                <td>7209ACETA</td>
                <td>45 </td>
                <td>85 </td>
                <td>19 </td>
                <td>0.6 </td>
                <td>0.6 </td>
                <td>41 </td>
                <td>30 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.41 </td>
              </tr>
              <tr >
                <td>7209CETA</td>
                <td>45 </td>
                <td>85 </td>
                <td>19 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>42.3 </td>
                <td>31 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.41 </td>
              </tr>
              <tr >
                <td>7210ACETA</td>
                <td>50 </td>
                <td>90 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>42.3 </td>
                <td>32.5 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.46 </td>
              </tr>
              <tr >
                <td>7210CETA</td>
                <td>50 </td>
                <td>90 </td>
                <td>20 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>44.9 </td>
                <td>34 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.46 </td>
              </tr>
              <tr >
                <td>7211ACETA</td>
                <td>55 </td>
                <td>100 </td>
                <td>21 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>52.7 </td>
                <td>40.5 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.61 </td>
              </tr>
              <tr >
                <td>7211CETA</td>
                <td>55 </td>
                <td>100 </td>
                <td>21 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>55.3 </td>
                <td>43 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.61 </td>
              </tr>
              <tr >
                <td>7212ACETA</td>
                <td>60 </td>
                <td>110 </td>
                <td>22 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>63.7 </td>
                <td>50 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>0.8 </td>
              </tr>
              <tr >
                <td>7212CETA</td>
                <td>60 </td>
                <td>110 </td>
                <td>22 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>67.6 </td>
                <td>53 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.8 </td>
              </tr>
              <tr >
                <td>7213ACETA</td>
                <td>65 </td>
                <td>120 </td>
                <td>23 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>72.8 </td>
                <td>57 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>1 </td>
              </tr>
              <tr >
                <td>7213CETA</td>
                <td>65 </td>
                <td>120 </td>
                <td>23 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>76.1 </td>
                <td>60 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>1 </td>
              </tr>
              <tr >
                <td>7214ACETA</td>
                <td>70 </td>
                <td>125 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>76.1 </td>
                <td>62 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>1.1 </td>
              </tr>
              <tr >
                <td>7214CETA</td>
                <td>70 </td>
                <td>125 </td>
                <td>24 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>64 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>1.1 </td>
              </tr>
              <tr >
                <td>7215ACETA</td>
                <td>75 </td>
                <td>130 </td>
                <td>25 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>79.3 </td>
                <td>67 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7215CETA</td>
                <td>75 </td>
                <td>130 </td>
                <td>25 </td>
                <td>1.5 </td>
                <td>0.6 </td>
                <td>83.2 </td>
                <td>69.5 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>1.2 </td>
              </tr>
              <tr >
                <td>7216ACETA</td>
                <td>80 </td>
                <td>140 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>92.3 </td>
                <td>78 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>1.45 </td>
              </tr>
              <tr >
                <td>7216CETA</td>
                <td>80 </td>
                <td>140 </td>
                <td>26 </td>
                <td>2 </td>
                <td>1 </td>
                <td>97.5 </td>
                <td>81.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>1.45 </td>
              </tr>
              <tr >
                <td>7217ACETA</td>
                <td>85 </td>
                <td>150 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>95.5 </td>
                <td>85 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>1.8 </td>
              </tr>
              <tr >
                <td>7217CETA</td>
                <td>85 </td>
                <td>150 </td>
                <td>28 </td>
                <td>2 </td>
                <td>1 </td>
                <td>99.5 </td>
                <td>88 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>1.8 </td>
              </tr>
              <tr >
                <td>7218ACETA</td>
                <td>90 </td>
                <td>160 </td>
                <td>30 </td>
                <td>2 </td>
                <td>1 </td>
                <td>121 </td>
                <td>106 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>2.25 </td>
              </tr>
              <tr >
                <td>7218CETA</td>
                <td>90 </td>
                <td>160 </td>
                <td>30 </td>
                <td>2 </td>
                <td>1 </td>
                <td>127 </td>
                <td>112 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>2.25 </td>
              </tr>
              <tr >
                <td>7219ACETA</td>
                <td>95 </td>
                <td>170 </td>
                <td>32 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>133 </td>
                <td>114 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>2.7 </td>
              </tr>
              <tr >
                <td>7219CETA</td>
                <td>95 </td>
                <td>170 </td>
                <td>32 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>138 </td>
                <td>120 </td>
                <td>8000 </td>
                <td>13000 </td>
                <td>2.7 </td>
              </tr>
              <tr >
                <td>7220ACETA</td>
                <td>100 </td>
                <td>180 </td>
                <td>34 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>148 </td>
                <td>129 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>3.25 </td>
              </tr>
              <tr >
                <td>7220CETA</td>
                <td>100 </td>
                <td>180 </td>
                <td>34 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>156 </td>
                <td>137 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>3.25 </td>
              </tr>
              <tr >
                <td>7221ACETA</td>
                <td>105 </td>
                <td>190 </td>
                <td>36 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>163 </td>
                <td>146 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>3.85 </td>
              </tr>
              <tr >
                <td>7221CETA</td>
                <td>105 </td>
                <td>190 </td>
                <td>36 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>172 </td>
                <td>153 </td>
                <td>7500 </td>
                <td>12000 </td>
                <td>3.85 </td>
              </tr>
              <tr >
                <td>7222ACETA</td>
                <td>110 </td>
                <td>200 </td>
                <td>38 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>168 </td>
                <td>160 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>4.55 </td>
              </tr>
              <tr >
                <td>7222CETA</td>
                <td>110 </td>
                <td>200 </td>
                <td>38 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>178 </td>
                <td>166 </td>
                <td>7000 </td>
                <td>11000 </td>
                <td>4.55 </td>
              </tr>
              <tr >
                <td>7224ACETA</td>
                <td>120 </td>
                <td>215 </td>
                <td>40 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>190 </td>
                <td>183 </td>
                <td>6700 </td>
                <td>9000 </td>
                <td>5.4 </td>
              </tr>
              <tr >
                <td>7224CETA</td>
                <td>120 </td>
                <td>215 </td>
                <td>40 </td>
                <td>2.1 </td>
                <td>1.1 </td>
                <td>199 </td>
                <td>193 </td>
                <td>6700 </td>
                <td>10000 </td>
                <td>5.4 </td>
              </tr>
              <tr >
                <td>7226ACETA</td>
                <td>130 </td>
                <td>230 </td>
                <td>40 </td>
                <td>3 </td>
                <td>1.1 </td>
                <td>203 </td>
                <td>212 </td>
                <td>5600 </td>
                <td>8500 </td>
                <td>6.3 </td>
              </tr>
              <tr >
                <td>7226CETA</td>
                <td>130 </td>
                <td>230 </td>
                <td>40 </td>
                <td>3 </td>
                <td>1.1 </td>
                <td>216 </td>
                <td>224 </td>
                <td>6300 </td>
                <td>9500 </td>
                <td>6.3 </td>
              </tr>
              <tr >
                <td>71900ACETA</td>
                <td>10 </td>
                <td>22 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.42 </td>
                <td>1.06 </td>
                <td>63000 </td>
                <td>95000 </td>
                <td>0.009 </td>
              </tr>
              <tr >
                <td>71900CETA</td>
                <td>10 </td>
                <td>22 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.51 </td>
                <td>1.1 </td>
                <td>70000 </td>
                <td>110000 </td>
                <td>0.009 </td>
              </tr>
              <tr >
                <td>71901ACETA</td>
                <td>12 </td>
                <td>24 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.55 </td>
                <td>1.18 </td>
                <td>56000 </td>
                <td>85000 </td>
                <td>0.01 </td>
              </tr>
              <tr >
                <td>71901CETA</td>
                <td>12 </td>
                <td>24 </td>
                <td>6 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>2.65 </td>
                <td>1.25 </td>
                <td>63000 </td>
                <td>95000 </td>
                <td>0.01 </td>
              </tr>
              <tr >
                <td>71902ACETA</td>
                <td>15 </td>
                <td>28 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.77 </td>
                <td>1.8 </td>
                <td>50000 </td>
                <td>75000 </td>
                <td>0.015 </td>
              </tr>
              <tr >
                <td>71902CETA</td>
                <td>15 </td>
                <td>28 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.97 </td>
                <td>1.9 </td>
                <td>56000 </td>
                <td>85000 </td>
                <td>0.015 </td>
              </tr>
              <tr >
                <td>71903ACETA</td>
                <td>17 </td>
                <td>30 </td>
                <td>7 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>3.97 </td>
                <td>2 </td>
                <td>45000 </td>
                <td>67000 </td>
                <td>0.017 </td>
              </tr>
              <tr >
                <td>71903CETA</td>
                <td>17 </td>
                <td>30 </td>
                <td>3 </td>
                <td>0.3 </td>
                <td>0.1 </td>
                <td>4.16 </td>
                <td>2.08 </td>
                <td>50000 </td>
                <td>75000 </td>
                <td>0.017 </td>
              </tr>
              <tr >
                <td>71904ACETA</td>
                <td>20 </td>
                <td>37 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>5.72 </td>
                <td>3.05 </td>
                <td>38000 </td>
                <td>56000 </td>
                <td>0.035 </td>
              </tr>
              <tr >
                <td>71904CETA</td>
                <td>20 </td>
                <td>37 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>6.05 </td>
                <td>3.2 </td>
                <td>43000 </td>
                <td>63000 </td>
                <td>0.035 </td>
              </tr>
              <tr >
                <td>71905ACETA</td>
                <td>25 </td>
                <td>42 </td>
                <td>9 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>6.37 </td>
                <td>3.8 </td>
                <td>32000 </td>
                <td>48000 </td>
                <td>0.042 </td>
              </tr>
              <tr >
                <td>71905CETA</td>
                <td>25 </td>
                <td>42 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>6.75 </td>
                <td>4 </td>
                <td>36000 </td>
                <td>53000 </td>
                <td>0.042 </td>
              </tr>
              <tr >
                <td>71906ACETA</td>
                <td>30 </td>
                <td>47 </td>
                <td>9 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>6.76 </td>
                <td>4.3 </td>
                <td>26000 </td>
                <td>40000 </td>
                <td>0.048 </td>
              </tr>
              <tr >
                <td>71906CETA</td>
                <td>30 </td>
                <td>47 </td>
                <td>9 </td>
                <td>0.3 </td>
                <td>0.15 </td>
                <td>7.15 </td>
                <td>4.55 </td>
                <td>30000 </td>
                <td>45000 </td>
                <td>0.048 </td>
              </tr>
              <tr >
                <td>71907ACETA</td>
                <td>30 </td>
                <td>55 </td>
                <td>10 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>9.23 </td>
                <td>6.2 </td>
                <td>22000 </td>
                <td>36000 </td>
                <td>0.074 </td>
              </tr>
              <tr >
                <td>71907CETA</td>
                <td>35 </td>
                <td>55 </td>
                <td>10 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>9.75 </td>
                <td>6.55 </td>
                <td>26000 </td>
                <td>40000 </td>
                <td>0.074 </td>
              </tr>
              <tr >
                <td>71908ACETA</td>
                <td>40 </td>
                <td>62 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>12.4 </td>
                <td>8.5 </td>
                <td>18000 </td>
                <td>30000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>71908CETA</td>
                <td>40 </td>
                <td>62 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>12.4 </td>
                <td>8.5 </td>
                <td>20000 </td>
                <td>34000 </td>
                <td>0.11 </td>
              </tr>
              <tr >
                <td>71909ACETA</td>
                <td>45 </td>
                <td>68 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>12.4 </td>
                <td>9 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71909CETA</td>
                <td>45 </td>
                <td>68 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>13 </td>
                <td>9.5 </td>
                <td>19000 </td>
                <td>32000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71910ACETA</td>
                <td>50 </td>
                <td>72 </td>
                <td>12 </td>
                <td>1 </td>
                <td>0.15 </td>
                <td>12.7 </td>
                <td>9.8 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71910CETA</td>
                <td>50 </td>
                <td>72 </td>
                <td>12 </td>
                <td>0.6 </td>
                <td>0.15 </td>
                <td>13.5 </td>
                <td>10.4 </td>
                <td>17000 </td>
                <td>28000 </td>
                <td>0.13 </td>
              </tr>
              <tr >
                <td>71911ACETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>18.2 </td>
                <td>13.7 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.18 </td>
              </tr>
              <tr >
                <td>71911CETA</td>
                <td>50 </td>
                <td>80 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.5 </td>
                <td>14.6 </td>
                <td>16000 </td>
                <td>26000 </td>
                <td>0.18 </td>
              </tr>
              <tr >
                <td>71912ACETA</td>
                <td>55 </td>
                <td>85 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>18.6 </td>
                <td>14.6 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>71912CETA</td>
                <td>55 </td>
                <td>85 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.9 </td>
                <td>15.3 </td>
                <td>15000 </td>
                <td>24000 </td>
                <td>0.19 </td>
              </tr>
              <tr >
                <td>71913ACETA</td>
                <td>60 </td>
                <td>90 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.5 </td>
                <td>16 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.21 </td>
              </tr>
              <tr >
                <td>71913CETA</td>
                <td>60 </td>
                <td>90 </td>
                <td>13 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>19.5 </td>
                <td>16 </td>
                <td>14000 </td>
                <td>22000 </td>
                <td>0.21 </td>
              </tr>
              <tr >
                <td>71914ACETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>32.5 </td>
                <td>32.5 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>0.33 </td>
              </tr>
              <tr >
                <td>71914CETA</td>
                <td>65 </td>
                <td>100 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>34.5 </td>
                <td>34 </td>
                <td>13000 </td>
                <td>20000 </td>
                <td>0.33 </td>
              </tr>
              <tr >
                <td>71915ACETA</td>
                <td>70 </td>
                <td>105 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>33.8 </td>
                <td>35.5 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.35 </td>
              </tr>
              <tr >
                <td>71915CETA</td>
                <td>70 </td>
                <td>105 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>35.8 </td>
                <td>37.5 </td>
                <td>12000 </td>
                <td>19000 </td>
                <td>0.35 </td>
              </tr>
              <tr >
                <td>71916ACETA</td>
                <td>75 </td>
                <td>110 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>34.5 </td>
                <td>36.5 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>71916CETA</td>
                <td>75 </td>
                <td>110 </td>
                <td>16 </td>
                <td>1 </td>
                <td>0.3 </td>
                <td>36.4 </td>
                <td>39 </td>
                <td>11000 </td>
                <td>18000 </td>
                <td>0.37 </td>
              </tr>
              <tr >
                <td>71917ACETA</td>
                <td>80 </td>
                <td>120 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>43.6 </td>
                <td>45.5 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>0.53 </td>
              </tr>
              <tr >
                <td>71917CETA</td>
                <td>80 </td>
                <td>1201 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>46.2 </td>
                <td>48 </td>
                <td>10000 </td>
                <td>17000 </td>
                <td>0.53 </td>
              </tr>
              <tr >
                <td>71918ACETA</td>
                <td>85 </td>
                <td>125 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>44.2 </td>
                <td>48 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>0.55 </td>
              </tr>
              <tr >
                <td>71918CETA</td>
                <td>85 </td>
                <td>110 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>47.5 </td>
                <td>51 </td>
                <td>9500 </td>
                <td>16000 </td>
                <td>0.55 </td>
              </tr>
              <tr >
                <td>71919ACETA</td>
                <td>90 </td>
                <td>140 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>46.2 </td>
                <td>52 </td>
                <td>8500 </td>
                <td>14000 </td>
                <td>0.58 </td>
              </tr>
              <tr >
                <td>71919CETA</td>
                <td>90 </td>
                <td>130 </td>
                <td>18 </td>
                <td>1.1 </td>
                <td>0.6 </td>
                <td>49.4 </td>
                <td>54 </td>
                <td>9000 </td>
                <td>15000 </td>
                <td>0.58 </td>
              </tr>
            </table>
          </div>
          `,
          productName_9: '軸受リング',
          productDescription_9: `
            <h2>軸受リング</h2>
            <div class="products_r_l"><img src="product/p9.jpg" id="imgbig" alt="" width="480px"></div>
            <div class="products_r_r">
            <p style="text-indet:2em">
            TOSINは1995年にリング生産から始まり、20年以上の軸受リング生産の歴史があります。さまざまな高級精密軸受リング、薄肉軸受リング、非標準軸受リングなどを生産しています。すべての鋼材は、中国最大かつトップの軸受鋼メーカーであるCITIC Pacific Group傘下の江陰興澄特殊鋼有限公司から購入しています。<br />
            TOSINのリング部門は、全自動連続生産ラインを採用し、ISO9001品質システム認証に合格しています。自動車部品のお客様により良いサービスを提供するために、ISO/TS16949認証を申請しています。<br />
            当社の顧客には、世界最大の軸受メーカーであるスウェーデンのSKFグループ、米国のゼネラルベアリング株式会社、寧波更大グループなどが含まれます。<br />
            </p>
            <div class="bottom">
            <ul>
            <li><img src="product/p9.jpg" onmouseover="showbig('product/p9.jpg')" alt="軸受リング"></li>
            </ul>
            </div>
            </div>
            <div class="clear"></div>
            <p>TOSINは1995年にリング生産から始まり、20年以上の軸受リング生産の歴史があります。さまざまな高級精密軸受リング、薄肉軸受リング、非標準軸受リングなどを生産しています。すべての鋼材は、中国最高の軸受鋼メーカーであるCITIC Pacific Group傘下の江陰興澄特殊鋼有限公司から購入しています。<br />
            TOSINのリング部門は、全自動連続生産ラインを採用し、ISO9001品質システム認証に合格しています。自動車部品のお客様により良いサービスを提供するために、ISO/TS16949認証を申請しています。<br />
            当社の顧客には、世界最大の軸受メーカーであるスウェーデンのSKFグループ、米国のゼネラルベアリング株式会社、寧波更大グループなどが含まれます。<br />
            </p>
            <div class="clear"></div>
            <p style="text-align:center;"><img src="images/sc1.jpg" style="width: 550px;"></p>
            <div class="clear"></div>
            <strong>当社の顧客</strong><br />
            <img src="images/skf.png" style="width: 200px;padding-left:30px;">
            <img src="images/general.jpeg" style="width: 180px;padding-left:30px;">
            <img src="images/gd.png" style="width: 400px;padding-left:30px;">
          `
        }
      }
    }
  });

export default i18n;