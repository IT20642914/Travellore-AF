import React, { useState } from 'react'
import FNHBusinessSearchPropertyCard from "../../Components/FNHBusinessSearchPropertyCard/index"
import { Grid } from "@mui/material";
import { LocalBusinesses } from "../../constants/index";
import styles from "./style.module.scss";
import FNHText from "../../Components/FNHText/index";
import { Box } from "@mui/system";
import { Googlemap } from "../../Components/map/index";
//import LocationIcon from "../../assets/icon/LocationIcon";
import AllFilltersIcon from "../../assets/icon/AllFilltersIcon";
//import DateIcon from "../../assets/icon/DateIcon";

const Business = () => {
    const [nameFilter, setNameFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");



    return (
        <Grid className={styles.SerchlistGrid} >
            {/* SearchBar and Filter Grid Start*/}

            <Box className={styles.HeaderText}>
                <FNHText
                    text="Find Your Local Products"
                    color="#046380"
                    fontSize='3rem'
                    textAlign="left"
                    variant="h6"
                />
            </Box>

            <Grid sx={{ justifyContent: "center", justifyItems: "center", alignItems: "center" }} className={styles.barGird} >

                <Grid className={styles.inputGrid}>
                    {/* <FNHLiconInput /> */}
                </Grid>

                <Grid container className={styles.FilterGrid}>
                    <Grid item>

                        <Box sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center" }}>

                            <AllFilltersIcon fill="#046380" width="25" height="25" />
                            <input
                                type="text"
                                placeholder="Filter by name"
                                value={nameFilter}
                                onChange={(e) => setNameFilter(e.target.value)}
                                style={{
                                    padding: '8px',
                                    border: '1px solid #046380',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    width: '100%',
                                    margin: '16px'
                                }}
                            />
                        </Box>

                    </Grid>
                    {/* <Grid item>
                        <Box sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center" }}>
                            <DateIcon fill="#046380" width="25" height="25" />
                            <input
                                type="text"
                                placeholder="Filter by date"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                                style={{
                                    padding: '8px',
                                    border: '1px solid #046380',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    width: '100%',
                                    margin: '16px'
                                }}
                            />
                        </Box>
                    </Grid> */}
                    <Grid item>
                        <Box sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center" }}>
                            <AllFilltersIcon fill="#046380" width="25" height="25" />
                            <input
                                type="text"
                                placeholder="Filter by category"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                style={{
                                    padding: '8px',
                                    border: '1px solid #046380',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    width: '100%',
                                    margin: '16px'
                                }}
                            />
                        </Box>
                    </Grid>
                    {/* <Grid item>
                        <Box sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignItems: "center" }}>
                            <LocationIcon fill="#046380" width="25" height="25" />
                            <input
                                type="text"
                                placeholder="Filter by location"
                                value={locationfilter}
                                onChange={(e) => setlocationFilter(e.target.value)}
                                style={{
                                    padding: '8px',
                                    border: '1px solid #046380',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    width: '100%',
                                    margin: '16px'
                                }}
                            />
                        </Box>
                    </Grid> */}
                </Grid>


            </Grid>
            {/* SearchBar and Filter Grid End*/}

            <Grid className={styles.DataGrid} >
                <Grid
                    sx={{

                        minHeight: "80rem",
                        minWidth: "65%",
                        display: "flex",
                        flexDirection: "column",
                        // background: "linear-gradient(323.85deg, #012935.14%, #046380 99.41%, #012935 99.41%)",
                        backgroundColor: "#EDF2F3",
                        borderRadius: "1rem",
                        margin: "1rem 0",
                    }}
                    xs={7}
                    sm={7}
                    md={7}
                    lg={7}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            minHeight: "3rem",
                            margin: "1rem 0",
                            padding: "0 1rem",
                        }}
                    >
                        <FNHText
                            text="Products"
                            color="#046380"
                            textAlign="left"
                            variant="h6"
                        />
                    </Box>

                    <Grid container spacing={7} sx={{ justifyContent: "center" }}>
                        {LocalBusinesses.filter((product) => {
                            return (
                                product.name.toLocaleLowerCase().includes(nameFilter.toLowerCase()) &&
                                product.category.toLowerCase().includes(categoryFilter.toLocaleLowerCase())
                            );
                        }).map((product, index) => (

                            <Grid item key={index}>
                                {/* card ekk hdala eka import krl danna nm hdl danna-------------------------------------------------------------------------------------- */}
                                <FNHBusinessSearchPropertyCard
                                    propertyId={product.id}
                                    name={product.name}
                                    category={product.category}
                                    description={product.description}
                                    backgroundImage={product.image}
                                    location1={product.location1}
                                    location2={product.location2}
                                    location3={product.location3}

                                />
                            </Grid>

                        ))
                        }
                    </Grid>

                </Grid>






                <Grid className={styles.mapGrid}>
                    {/* <Googlemap
                        apiKey="AIzaSyBZq5ejEeybo_1qhiWHIJlC66CZ3mrUrUI"
                        zoom={12}
                        center={{ lat: 6.906079, lng: 79.969628 }}
                        center2={{ lat: 6.926079, lng: 79.957626 }}
                    />
                  */}

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            minHeight: "100%",
                            margin: "1rem 0",
                            padding: "0 1rem",
                            backgroundColor: "#EDF2F3",
                        }}
                    >

                        <FNHText
                            marginTop="10"
                            text="Do you know?"
                            color="black"
                            textAlign="center"
                            variant="h4"
                        />
                        <Box
                            component="img"
                            sx={{
                                marginTop: 5,
                                marginLeft: 8,
                                height: 500,
                                width: 500,

                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                borderRadius: 5
                            }}
                            alt="The house from the offer."
                            // src="https://thumbs.dreamstime.com/z/fire-mask-wooden-mask-sri-lanka-lankan-traditional-devil-devil-gini-raksha-supposed-to-subdue-76110299.jpg"
                            src="https://b1415357.smushcdn.com/1415357/wp-content/uploads/2022/05/thought-provoking-questions.jpg?size=768x597&lossy=0&strip=1&webp=1"
                        />

                        <FNHText
                            marginTop="10"
                            text="Sri Lanka is a treasure trove of exquisite handcrafts, renowned tea, rubber, and unique products. The country's rich cultural heritage and skilled artisans produce a wide array of traditional handcrafts that are both beautiful and representative of the local culture. These handcrafts include intricate wood carvings, vibrant batik textiles, delicate brassware, and captivating pottery."
                            color="black"
                            textAlign="center"
                            variant="h8"
                        />


                        <Box
                            component="img"
                            sx={{
                                marginTop: 1,
                                marginLeft: 8,
                                height: 500,
                                width: 500,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                borderRadius: 5
                            }}
                            alt="The house from the offer."
                            src="https://media.istockphoto.com/id/809081330/photo/splendid-ancient-woodcarvings-at-embekka-temple-in-kandy.jpg?s=612x612&w=0&k=20&c=PZRQu8p7Ff_wPZeOOs_wGZWFlC1OlqijoLJIXEeKeI8="
                        />
                        <FNHText
                            marginTop="10"
                            text="In addition to handcrafts, Sri Lanka is famous for its tea, which is considered among the finest in the world. The island's lush tea plantations produce a variety of teas, including black, green, and white teas. The unique climate and terrain of Sri Lanka contribute to the distinct flavors and aromas that make Ceylon tea highly sought after globally."
                            color="black"
                            textAlign="center"
                            variant="h8"
                        />
                        <Box
                            component="img"
                            sx={{
                                marginTop: 1,
                                marginLeft: 8,
                                height: 500,
                                width: 500,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                borderRadius: 5
                            }}
                            alt="The house from the offer."
                            src="https://news.microsoft.com/wp-content/uploads/prod/sites/43/2020/05/sri-lanka-tea-main-scaled.jpg"
                        />
                        <FNHText
                            marginTop="10"
                            text="Rubber is another significant industry in Sri Lanka, with the country being one of the world's leading producers. The rubber plantations, spanning vast areas, yield high-quality natural rubber. Sri Lankan rubber is valued for its purity and durability, making it an essential material for various industries, including automotive, healthcare, and construction."
                            color="black"
                            textAlign="center"
                            variant="h8"
                        />
                        <Box
                            component="img"
                            sx={{
                                marginTop: 1,
                                marginLeft: 8,
                                height: 500,
                                width: 500,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                borderRadius: 5
                            }}
                            alt="The house from the offer."
                            src="https://www.lankabusinessonline.com/wp-content/uploads/2015/07/Rubber-Trees-lbo.jpg"
                        />

                        <FNHText
                            marginTop="10"
                            text="Apart from tea and rubber, Sri Lanka is home to an array of unique products. These include gems and jewelry, spices, Ayurvedic products, and handicrafts made from materials like coconut shells, clay, and natural fibers. Sri Lanka's gems, such as sapphires, rubies, and garnets, are renowned for their exceptional quality and brilliance, making them highly sought after in the global market.

                            Whether it's the intricate handcrafts, the fragrant tea, the versatile rubber, or the unique products, Sri Lanka offers a fascinating blend of tradition, craftsmanship, and natural resources. These treasures showcase the country's cultural heritage, economic significance, and contribute to its appeal as a destination that captivates visitors with its diversity and charm."
                            color="black"
                            textAlign="center"
                            variant="h8"
                        />

                    </Box>


                </Grid>




            </Grid>

        </Grid>

    );
};

export default Business