import React, {useContext} from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {AppbarContext} from "../../context/appbarContext";
import {ApartmentOutlined, PersonOutlined} from "@mui/icons-material";
import {Icon} from "@mui/material";

function MeInfo() {

    const {me} = useContext(AppbarContext);

    return (
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

    );
}

export default MeInfo;