import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import {ApartmentOutlined, ErrorOutlineOutlined, PersonOutlined} from "@mui/icons-material";
import {Icon} from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";

function MeInfo() {

    interface IMeInfo {
        "firstName": string;
        "lastName": string;
        "organisationId": string;
        "mail": string;
    }

    const [me, setMe] = useState<IMeInfo | null>(null);
    const [noRights, setNoRights] = useState<boolean>(false);


    useEffect(() => {

        axios.get("api/users/me")
            .then(response => {
                    setMe(response.data)
                }
            )
            .catch((err) => {
                if (err.response.status === 403) {
                    setNoRights(true)
                } else {
                    console.error(err);
                }
            })
    }, []);


    return (
        <>
            {noRights ?
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon sx={{color: "white"}}><ErrorOutlineOutlined/></Icon>
                    <Typography sx={{m: 2}}>
                        Det ser ut som du mangler rettigheter i løsningen
                    </Typography>
                </Box>
                :
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box>
                        <Typography sx={{m: 2}}>
                            <Icon fontSize={"small"} sx={{color: "white", mr: 1}}><ApartmentOutlined/></Icon>
                            {me?.organisationId}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{m: 2}}>
                            <Icon fontSize={"small"} sx={{color: "white", mr: 1}}><PersonOutlined/></Icon>
                            {me?.firstName} {me?.lastName}
                        </Typography>
                    </Box>
                </Box>
            }
        </>
    );
}

export default MeInfo;