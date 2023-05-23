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
                        background: "linear-gradient(323.85deg, #012935.14%, #046380 99.41%, #012935 99.41%)",
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
                    <Googlemap
                        apiKey="AIzaSyBZq5ejEeybo_1qhiWHIJlC66CZ3mrUrUI"
                        zoom={12}
                        center={{ lat: 6.906079, lng: 79.969628 }}
                        center2={{ lat: 6.926079, lng: 79.957626 }}
                    />
                    {/* Maps foe that */}
                </Grid>

            </Grid>

        </Grid>

    );
};

export default Business