import { useAppData } from '../../Context/AppDataContext';
import { Container, makeStyles, createStyles, Theme } from '@material-ui/core';
import React, { useEffect } from 'react';
import moment from 'moment';
import jsPDF from 'jspdf';
import { useHistory } from 'react-router-dom';
//Import Components
//import { Link } from "react-router-dom";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        gridRoot: {
            padding: "0px",
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
          Button: {
            backgroundColor: theme.palette.primary.light,
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "50%",
            borderRadius: 36,
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FAFAFA",
            textTransform: "none"
        },
        link:{
            textDecoration: "none"
        }
    }),
);

export const OrderCompleted: React.FC = function OrderCompleted() {
    const classes = useStyles();
    var { value }  = useAppData();
    var { receiptDetails, userInfo, sendOrderCompletedEmail } = value;
    const now = new Date(parseInt(receiptDetails.OrderDate, 10));
    const estTime = moment.tz(now, "America/Jamaica").format("DD-MM-YYYY H:mma");
    var history = useHistory();

    const generatePDF = async () => {
        var doc = new jsPDF("p", "pt", "a2");
        var getReciept: HTMLElement|null = document.querySelector("#receipt");
        if(getReciept !== null){
            doc.setDisplayMode("fullpage");
            doc.html(getReciept,{
                callback: async function(pdf){
                    ////console.log(pdf)
                    //pdf.save("mypdf.pdf")
                    //var filename = `${userInfo.fullName} order#${receiptDetails._id}`;
                    var file = pdf.output("datauri");
                    ////console.log(file);
                    await sendOrderCompletedEmail("application/pdf", file, userInfo, receiptDetails._id, receiptDetails).then((res) => {
                        setTimeout(()=> {
                            history.push("/OrderHistory");
                        }, 5000)
                    })
                }
            })
        }
        
    }
     
    useEffect(() => {
        try{
            generatePDF();
        }catch(err){
            //console.log(err);
        }
    }, [])
    return (
        <>
            <Container id="receipt" maxWidth="xl" style={{paddingLeft: "0px", paddingRight: "0px"}} className={classes.main}>
            <style
            type="text/css"
            dangerouslySetInnerHTML={{
            __html:
                "\n      table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_text_89 .v-text-align { text-align: left !important; } #u_content_heading_2 .v-container-padding-padding { padding: 25px 10px 10px !important; } #u_content_text_4 .v-container-padding-padding { padding: 0px 10px !important; } #u_content_text_4 .v-text-align { text-align: center !important; } #u_content_text_7 .v-container-padding-padding { padding: 0px 10px 1px !important; } #u_content_text_7 .v-text-align { text-align: center !important; } #u_content_text_5 .v-container-padding-padding { padding: 10px 30px 25px 10px !important; } #u_content_text_14 .v-container-padding-padding { padding: 25px 10px 10px 15px !important; } #u_content_text_14 .v-text-align { text-align: center !important; } #u_content_text_13 .v-text-align { text-align: center !important; } #u_content_text_18 .v-text-align { text-align: center !important; } #u_content_text_19 .v-text-align { text-align: center !important; } #u_content_text_15 .v-text-align { text-align: center !important; } #u_content_text_16 .v-text-align { text-align: center !important; } #u_content_text_12 .v-text-align { text-align: center !important; } #u_content_text_17 .v-container-padding-padding { padding: 0px 15px 10px !important; } #u_content_text_17 .v-text-align { text-align: center !important; } #u_content_text_21 .v-text-align { text-align: center !important; } #u_content_text_20 .v-text-align { text-align: center !important; } #u_content_text_23 .v-text-align { text-align: center !important; } #u_content_text_72 .v-text-align { text-align: center !important; } #u_content_text_73 .v-text-align { text-align: center !important; } #u_content_text_76 .v-text-align { text-align: center !important; } #u_content_text_75 .v-text-align { text-align: center !important; } #u_content_text_77 .v-text-align { text-align: center !important; } #u_content_text_78 .v-text-align { text-align: center !important; } #u_content_text_81 .v-text-align { text-align: center !important; } #u_content_text_80 .v-text-align { text-align: center !important; } #u_content_text_82 .v-text-align { text-align: center !important; } #u_content_text_83 .v-text-align { text-align: center !important; } #u_content_text_86 .v-text-align { text-align: center !important; } #u_content_text_85 .v-text-align { text-align: center !important; } #u_content_text_53 .v-text-align { text-align: center !important; } #u_content_text_54 .v-text-align { text-align: center !important; } #u_content_text_57 .v-text-align { text-align: center !important; } #u_content_text_56 .v-text-align { text-align: center !important; } #u_content_divider_13 .v-container-padding-padding { padding: 5px 10px 10px !important; } #u_content_text_48 .v-text-align { text-align: center !important; } #u_content_text_52 .v-text-align { text-align: center !important; } #u_content_text_70 .v-text-align { text-align: center !important; } #u_content_text_71 .v-text-align { text-align: center !important; } #u_content_text_92 .v-text-align { text-align: center !important; } #u_content_text_93 .v-text-align { text-align: center !important; } #u_content_text_68 .v-text-align { text-align: center !important; } #u_content_text_69 .v-text-align { text-align: center !important; } }\n@media only screen and (min-width: 620px) {\n  .u-row {\n    width: 600px !important;\n  }\n  .u-row .u-col {\n    vertical-align: top;\n  }\n\n  .u-row .u-col-19p33 {\n    width: 115.97999999999998px !important;\n  }\n\n  .u-row .u-col-20p08 {\n    width: 120.47999999999998px !important;\n  }\n\n  .u-row .u-col-20p14 {\n    width: 120.84px !important;\n  }\n\n  .u-row .u-col-21p31 {\n    width: 127.86px !important;\n  }\n\n  .u-row .u-col-23p66 {\n    width: 141.96px !important;\n  }\n\n  .u-row .u-col-27p17 {\n    width: 163.02px !important;\n  }\n\n  .u-row .u-col-29p52 {\n    width: 177.12px !important;\n  }\n\n  .u-row .u-col-29p84 {\n    width: 179.04px !important;\n  }\n\n  .u-row .u-col-30p48 {\n    width: 182.88px !important;\n  }\n\n  .u-row .u-col-30p69 {\n    width: 184.14px !important;\n  }\n\n  .u-row .u-col-33p33 {\n    width: 199.98px !important;\n  }\n\n  .u-row .u-col-49p44 {\n    width: 296.64px !important;\n  }\n\n  .u-row .u-col-100 {\n    width: 600px !important;\n  }\n\n}\n\n@media (max-width: 620px) {\n  .u-row-container {\n    max-width: 100% !important;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .u-row .u-col {\n    min-width: 320px !important;\n    max-width: 100% !important;\n    display: block !important;\n  }\n  .u-row {\n    width: calc(100% - 40px) !important;\n  }\n  .u-col {\n    width: 100% !important;\n  }\n  .u-col > div {\n    margin: 0 auto;\n  }\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n\ntable,\ntr,\ntd {\n  vertical-align: top;\n  border-collapse: collapse;\n}\n\np {\n  margin: 0;\n}\n\n.ie-container table,\n.mso-container table {\n  table-layout: fixed;\n}\n\n* {\n  line-height: inherit;\n}\n\na[x-apple-data-detectors='true'] {\n  color: inherit !important;\n  text-decoration: none !important;\n}\n\n@media (max-width: 480px) {\n  .hide-mobile {\n    max-height: 0px;\n    overflow: hidden;\n    display: none !important;\n  }\n\n}\n .table1{msoTableLspace: 0pt;\n msoTableRspace: 0pt;} \n .td1{borderCollapse: collapse !important;} \n .table2{msoTableLspace: 0pt;msoTableRspace: 0pt;msTextSizeAdjust: 100%;} \n .td2{borderCollapse:collapse !important; msoLineHeightRule: exactly;msTextSizeAdjust: 100%;}\n .table3{msoTableLspace: 0pt;msTextSizeAdjust: 100%;msoTableRspace: 0pt;borderCollapse: collapse;} \n .td3{msoLineHeightRule: exactly; borderCollapse: collapse !important; msTextSizeAdjust: 100%;} \n .img1{msInterpolationMode: bicubic} \n .table4{msoTableLspace: 0pt;msTextSizeAdjust: 100%;msoTableRspace: 0pt;} \n .td4{msoLineHeightRule: exactly;borderCollapse: collapse !important;msTextSizeAdjust: 100%;} \n .table5{msTextSizeAdjust: 100%;msoTableLspace: 0pt;msoTableRspace: 0pt;} \n .td5{msoLineHeightRule: exactly;borderCollapse: collapse !important;msTextSizeAdjust: 100%;} \n .td6{msTextSizeAdjust: 100%;msoTableLspace: 0pt;msoTableRspace: 0pt;} \n .table7{msoTableLspace: 0pt;msoTableRspace: 0pt;msTextSizeAdjust: 100%} \n .td7{msoLineHeightRule: exactly;borderCollapse: collapse !important;msTextSizeAdjust: 100%;} \n .td8{msoLineHeightRule: exactly;borderCollapse: collapse !important;msTextSizeAdjust: 100%;} \n .table8{msoTableLspace: 0pt;msoTableRspace: 0pt;msTextSizeAdjust: 100%;} \n .td9{msTextSizeAdjust: 100%;borderCollapse: collapse !important;msoLineHeightRule: exactly;} \n .table10{msoTableRspace: 0pt;msoTableLspace: 0pt;msTextSizeAdjust: 100%;} \n .td10{msoLineHeightRule: exactly;borderCollapse: collapse !important; msTextSizeAdjust: 100%} \n table11{msoTableRspace: 0pt;msoTableLspace: 0pt;msTextSizeAdjust: 100%;} \n .td11{msoLineHeightRule: exactly;borderCollapse: collapse !important; msTextSizeAdjust: 100%;} \n .table12{msoTableLspace: 0pt;borderCollapse: collapse;msoTableRspace: 0pt} \n .table14{msTextSizeAdjust: 100%;borderCollapse: collapse;msoTableLspace: 0pt;msoTableRspace: 0pt;} \n .td12{msoLineHeightRule: exactly;borderCollapse: collapse !important;msTextSizeAdjust: 100%;} \n .table15{msoTableRspace: 0pt;msoTableLspace: 0pt;msTextSizeAdjust: 100%;} \n .td13{msoLineHeightRule: exactly;borderCollapse: collapse !important;msTextSizeAdjust: 100%;} \n .table16{borderCollapse: collapse;msTextSizeAdjust: 100%;msoTableLspace: 0pt;msoTableRspace: 0pt;} \n .td14{msoLineHeightRule: exactly;borderCollapse: collapse !important;msTextSizeAdjust: 100%;} \n .table17{borderCollapse: collapse;msoTableLspace: 0pt;msoTableRspace: 0pt;msTextSizeAdjust: 100%} \n .td15{msoLineHeightRule: exactly;borderCollapse: collapse !important;msTextSizeAdjust: 100%;} \n .td16{borderCollapse:collapse !important;} \n .img2{msInterpolationMode: bicubic} \n .table18{borderCollapse: collapse;msoTableLspace: 0pt;msoTableRspace: 0pt;} \n .td17{borderCollapse:collapse !important;} \n .img3{msInterpolationMode: bicubic} \n .table19{borderCollapse: collapse;borderSpacing: 0;msoTableLspace: 0pt;msoTableRspace: 0pt;} \n .img4{msInterpolationMode: bicubic} \n "
            }}
            />
            <table
                    style={{
                    borderCollapse: "collapse",
                    tableLayout: "fixed",
                    borderSpacing: 0,
                    verticalAlign: "top",
                    minWidth: 320,
                    margin: "0 auto",
                    backgroundColor: "#e7e7e7",
                    width: "100%"
                    }}
                    cellPadding={0}
                    cellSpacing={0}
                    className="table1"
                >
                    <tbody>
                    <tr style={{ verticalAlign: "top" }}>
                        <td
                        style={{
                            wordBreak: "break-word",
                            verticalAlign: "top"
                        }}
                        className="td1"
                        >
                        {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]*/}
                        <div
                            className="u-row-container"
                            style={{ padding: 0, backgroundColor: "transparent" }}
                        >
                            <div
                            className="u-row"
                            style={{
                                margin: "0 auto",
                                minWidth: 320,
                                maxWidth: 600,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                backgroundColor: "#2cb4f3"
                            }}
                            >
                            <div
                                style={{
                                borderCollapse: "collapse",
                                display: "table",
                                width: "100%",
                                backgroundColor: "transparent"
                                }}
                            >
                                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #2cb4f3;"><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-100"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 600,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "20px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <table
                                                width="100%"
                                                cellPadding={0}
                                                cellSpacing={0}
                                                style={{border:0}}
                                            >
                                                <tbody>
                                                <tr>
                                                    <td
                                                    className="v-text-align"
                                                    style={{
                                                        paddingRight: 0,
                                                        paddingLeft: 0
                                                    }}
                                                    align="center"
                                                    >
                                                    <img
                                                        src="Images/UrgedFooterLogo.png"
                                                        alt="Logo"
                                                        title="Logo"
                                                        style={{
                                                        outline: "none",
                                                        textDecoration: "none",
                                                        textAlign:"center",
                                                        border:0,
                                                        clear: "both",
                                                        display: "inline-block !important",
                                                        height: "auto",
                                                        float: "none",
                                                        width: "100%",
                                                        maxWidth: 147
                                                        }}
                                                        width={147}
                                                        className="img1"
                                                    />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                            </div>
                            </div>
                        </div>
                        <div
                            className="u-row-container"
                            style={{ padding: 0, textAlign: "center", borderLeft: "1px solid #2cb4f3", borderRight: "1px solid #2cb4f3"}}
                        >
                            <div className="u-row u-col-100" style={{backgroundColor: "#d9eef8", marginLeft: "auto",marginRight: "auto"}}>
                                Please see order details below.
                            </div>
                        </div>
                        <div
                            className="u-row-container"
                            style={{ padding: 0, backgroundColor: "transparent" }}
                        >
                            <div
                            className="u-row"
                            style={{
                                margin: "0 auto",
                                minWidth: 320,
                                maxWidth: 600,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                backgroundColor: "#0d83dd"
                            }}
                            >
                            <div
                                style={{
                                borderCollapse: "collapse",
                                display: "table",
                                width: "100%",
                                backgroundColor: "transparent"
                                }}
                            >
                                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #0d83dd;"><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="120" style="width: 120px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-20p08"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 120,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_heading_2"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "30px 10px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <h1
                                                className="v-text-align"
                                                style={{
                                                margin: 0,
                                                color: "#ffffff",
                                                lineHeight: "140%",
                                                textAlign: "center",
                                                wordWrap: "break-word",
                                                fontWeight: "normal",
                                                fontFamily: '"Montserrat",sans-serif',
                                                fontSize: 22
                                                }}
                                            >
                                                <strong>RECIEPT</strong>
                                            </h1>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="297" style="width: 297px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-49p44"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 297,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_4"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "15px 30px 0px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#ffffff",
                                                lineHeight: "140%",
                                                textAlign: "right",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                876 960 1004
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        id="u_content_text_7"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "0px 30px 1px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#ffffff",
                                                lineHeight: "140%",
                                                textAlign: "right",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px",
                                                    fontFamily: "Montserrat, sans-serif"
                                                    }}
                                                >
                                                    urgedinternational@gmail.com
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="183" style="width: 183px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-30p48"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 183,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_5"
                                        style={{ fontFamily: '"Montserrat",sans-serif' , border:0}}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "20px 30px 1px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#ffffff",
                                                lineHeight: "140%",
                                                textAlign: "right",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                77 Manchester Ave, May Pen
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                            </div>
                            </div>
                        </div>
                        <div
                            className="u-row-container"
                            style={{ padding: 0, backgroundColor: "transparent" }}
                        >
                            <div
                            className="u-row"
                            style={{
                                margin: "0 auto",
                                minWidth: 320,
                                maxWidth: 600,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                backgroundColor: "#ffffff"
                            }}
                            >
                            <div
                                style={{
                                borderCollapse: "collapse",
                                display: "table",
                                width: "100%",
                                backgroundColor: "transparent"
                                }}
                            >
                                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-33p33"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 200,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_14"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "20px 10px 10px 15px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#b2b0b0",
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <strong>
                                                    <span
                                                    style={{
                                                        fontSize: 16,
                                                        lineHeight: "22.4px"
                                                    }}
                                                    >
                                                    Deliver To{" "}
                                                    </span>
                                                </strong>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        id="u_content_text_13"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "0px 10px 10px 15px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px"
                                                    }}
                                                >
                                                    {`${receiptDetails.DeliveryAddress}`}
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-33p33"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 200,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_18"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "20px 10px 5px 15px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#b2b0b0",
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <strong>
                                                    <span
                                                    style={{
                                                        fontSize: 16,
                                                        lineHeight: "22.4px"
                                                    }}
                                                    >
                                                    Order Number
                                                    </span>
                                                </strong>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        id="u_content_text_19"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "0px 10px 5px 15px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px"
                                                    }}
                                                >
                                                    {`${receiptDetails._id}`}
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        id="u_content_text_15"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "0px 10px 5px 15px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#b2b0b0",
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <strong>
                                                    <span
                                                    style={{
                                                        fontSize: 16,
                                                        lineHeight: "22.4px"
                                                    }}
                                                    >
                                                    Order Date
                                                    </span>
                                                </strong>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        id="u_content_text_16"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "0px 10px 5px 15px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px"
                                                    }}
                                                >
                                                    {
                                                        `${estTime}`
                                                    }
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-33p33"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 200,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_12"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "20px 15px 5px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#b2b0b0",
                                                lineHeight: "140%",
                                                textAlign: "right",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <strong>
                                                    <span
                                                    style={{
                                                        fontSize: 16,
                                                        lineHeight: "22.4px"
                                                    }}
                                                    >
                                                    Order Total
                                                    </span>
                                                </strong>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        id="u_content_text_17"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "0px 15px 5px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                lineHeight: "140%",
                                                textAlign: "right",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "1%" }}>
                                                <span
                                                    style={{
                                                    color: "#0d83dd",
                                                    fontSize: 14,
                                                    lineHeight: "19.6px"
                                                    }}
                                                >
                                                    <strong>
                                                    <span
                                                        style={{ fontSize: 20, lineHeight: 1 }}
                                                    >
                                                        ${`${receiptDetails.OrderTotal}`}
                                                    </span>
                                                    </strong>
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                            </div>
                            </div>
                        </div>
                        <div
                            className="u-row-container"
                            style={{ padding: 0, backgroundColor: "transparent" }}
                        >
                            <div
                            className="u-row"
                            style={{
                                margin: "0 auto",
                                minWidth: 320,
                                maxWidth: 600,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                backgroundColor: "#ffffff"
                            }}
                            >
                            <div
                                style={{
                                borderCollapse: "collapse",
                                display: "table",
                                width: "100%",
                                backgroundColor: "transparent"
                                }}
                            >
                                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-100"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 600,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "15px 0px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <table
                                                cellPadding={0}
                                                cellSpacing={0}
                                                width="100%"
                                                style={{
                                                borderCollapse: "collapse",
                                                tableLayout: "fixed",
                                                borderSpacing: 0,
                                                verticalAlign: "top",
                                                borderTop: "3px dashed #0d83dd",
                                                WebkitTextSizeAdjust: "100%",
                                                height:"0px",
                                                textAlign:"center",
                                                border:0
                                                }}
                                                className="table2"
                                            >
                                                <tbody>
                                                <tr style={{ verticalAlign: "top" }}>
                                                    <td
                                                    style={{
                                                        wordBreak: "break-word",
                                                        verticalAlign: "top",
                                                        fontSize: 0,
                                                        lineHeight: 0,
                                                        WebkitTextSizeAdjust: "100%"
                                                    }}
                                                    className="td2"
                                                    >
                                                    <span>&nbsp;</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                            </div>
                            </div>
                        </div>
                        <div
                            className="u-row-container"
                            style={{ padding: 0, backgroundColor: "transparent" }}
                        >
                            <div
                            className="u-row"
                            style={{
                                margin: "0 auto",
                                minWidth: 320,
                                maxWidth: 600,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                backgroundColor: "#ffffff"
                            }}
                            >
                            <div
                                style={{
                                borderCollapse: "collapse",
                                display: "table",
                                width: "100%",
                                backgroundColor: "transparent"
                                }}
                            >
                                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-33p33"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 200,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_21"
                                        style={{ fontFamily: '"Montserrat",sans-serif', }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "10px 10px 10px 15px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#0d83dd",
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px"
                                                    }}
                                                >
                                                    <strong>Description </strong>
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-33p33"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 200,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_20"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "10px 15px 10px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#0d83dd",
                                                lineHeight: "140%",
                                                textAlign: "right",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px"
                                                    }}
                                                >
                                                    <strong>Amount</strong>
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-33p33"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 200,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_23"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: 10,
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#0d83dd",
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px"
                                                    }}
                                                >
                                                    <strong>Qty </strong>
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                            </div>
                            </div>
                        </div>
                        {receiptDetails.OrderItems.map((item,index) => (
                        <>
                            <div
                                className="u-row-container"
                                style={{ padding: 0, backgroundColor: "transparent" }}
                                key={index}
                            >
                                <div
                                className="u-row"
                                style={{
                                    margin: "0 auto",
                                    minWidth: 320,
                                    maxWidth: 600,
                                    overflowWrap: "break-word",
                                    wordWrap: "break-word",
                                    wordBreak: "break-word",
                                    backgroundColor: "#ffffff"
                                }}
                                >
                                <div
                                    style={{
                                    borderCollapse: "collapse",
                                    display: "table",
                                    width: "100%",
                                    backgroundColor: "transparent"
                                    }}
                                >
                                    {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]*/}
                                    {/*[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                    <div
                                    className="u-col u-col-33p33"
                                    style={{
                                        maxWidth: 320,
                                        minWidth: 200,
                                        display: "table-cell",
                                        verticalAlign: "top"
                                    }}
                                    >
                                    <div style={{ width: "100% !important" }}>
                                        {/*[if (!mso)&(!IE)]><!*/}
                                        <div
                                        style={{
                                            padding: 0,
                                            borderTop: "0px solid transparent",
                                            borderLeft: "0px solid transparent",
                                            borderRight: "0px solid transparent",
                                            borderBottom: "0px solid transparent"
                                        }}
                                        >
                                        {/*<![endif]*/}
                                        <table
                                            id="u_content_text_72"
                                            style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                            role="presentation"
                                            cellPadding={0}
                                            cellSpacing={0}
                                            width="100%"
                                        >
                                            <tbody>
                                            <tr>
                                                <td
                                                className="v-container-padding-padding"
                                                style={{
                                                    overflowWrap: "break-word",
                                                    wordBreak: "break-word",
                                                    padding: "10px 10px 5px 15px",
                                                    fontFamily: '"Montserrat",sans-serif'
                                                }}
                                                align="left"
                                                >
                                                <div
                                                    className="v-text-align"
                                                    style={{
                                                    color: "#34495e",
                                                    lineHeight: "140%",
                                                    textAlign: "left",
                                                    wordWrap: "break-word"
                                                    }}
                                                >
                                                    <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                    <strong>
                                                        {`${item.itemName}`}
                                                    </strong>
                                                    </p>
                                                </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <table
                                            id="u_content_text_73"
                                            style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                            role="presentation"
                                            cellPadding={0}
                                            cellSpacing={0}
                                            width="100%"
                                        >
                                            <tbody>
                                            <tr>
                                                <td
                                                className="v-container-padding-padding"
                                                style={{
                                                    overflowWrap: "break-word",
                                                    wordBreak: "break-word",
                                                    padding: "0px 10px 10px 15px",
                                                    fontFamily: '"Montserrat",sans-serif'
                                                }}
                                                align="left"
                                                >
                                                <div
                                                    className="v-text-align"
                                                    style={{
                                                    color: "#34495e",
                                                    lineHeight: "140%",
                                                    textAlign: "left",
                                                    wordWrap: "break-word"
                                                    }}
                                                >
                                                    <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                    { item.chickenFlavour1 !== "" && item.chickenFlavour1 !== "Select Flavour" && item.chickenFlavour1 !== null && item.chickenFlavour1 !== undefined?
                                                    `${item.itemName + ": "}\n${item.chickenFlavour1 + " | "}\n${item.chickenFlavour2 + " | "}
                                                    \n${item.drink !== "Select Drink"? item.drink + " | ": "" + " | "}\n${item.otherIntructions + " | "}\n${'Not Available? ' + item.ifnotAvailable}` :
                                                    `${item.itemName + ": "}\n${item.drink !== "Select Drink"? item.drink + " | ": "" + " | "}\n${item.otherIntructions + " | "}\n${'Side:' + item.side + " | "}\n${'Not Available? ' + item.ifnotAvailable}`
                                                    }
                                                    </p>
                                                </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        {/*[if (!mso)&(!IE)]><!*/}
                                        </div>
                                        {/*<![endif]*/}
                                    </div>
                                    </div>
                                    {/*[if (mso)|(IE)]></td><![endif]*/}
                                    {/*[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                    <div
                                    className="u-col u-col-33p33"
                                    style={{
                                        maxWidth: 320,
                                        minWidth: 200,
                                        display: "table-cell",
                                        verticalAlign: "top"
                                    }}
                                    >
                                    <div style={{ width: "100% !important" }}>
                                        {/*[if (!mso)&(!IE)]><!*/}
                                        <div
                                        style={{
                                            padding: 0,
                                            borderTop: "0px solid transparent",
                                            borderLeft: "0px solid transparent",
                                            borderRight: "0px solid transparent",
                                            borderBottom: "0px solid transparent"
                                        }}
                                        >
                                        {/*<![endif]*/}
                                        <table
                                            id="u_content_text_76"
                                            style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                            role="presentation"
                                            cellPadding={0}
                                            cellSpacing={0}
                                            width="100%"
                                        >
                                            <tbody>
                                            <tr>
                                                <td
                                                className="v-container-padding-padding"
                                                style={{
                                                    overflowWrap: "break-word",
                                                    wordBreak: "break-word",
                                                    padding: "10px 15px 10px 10px",
                                                    fontFamily: '"Montserrat",sans-serif'
                                                }}
                                                align="left"
                                                >
                                                <div
                                                    className="v-text-align"
                                                    style={{
                                                    color: "#34495e",
                                                    lineHeight: "140%",
                                                    textAlign: "right",
                                                    wordWrap: "break-word"
                                                    }}
                                                >
                                                    <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                    <strong>
                                                        $ {`${item.itemCost}`}
                                                    </strong>
                                                    </p>
                                                </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        {/*[if (!mso)&(!IE)]><!*/}
                                        </div>
                                        {/*<![endif]*/}
                                    </div>
                                    </div>
                                    {/*[if (mso)|(IE)]></td><![endif]*/}
                                    {/*[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                    <div
                                    className="u-col u-col-33p33"
                                    style={{
                                        maxWidth: 320,
                                        minWidth: 200,
                                        display: "table-cell",
                                        verticalAlign: "top"
                                    }}
                                    >
                                    <div style={{ width: "100% !important" }}>
                                        {/*[if (!mso)&(!IE)]><!*/}
                                        <div
                                        style={{
                                            padding: 0,
                                            borderTop: "0px solid transparent",
                                            borderLeft: "0px solid transparent",
                                            borderRight: "0px solid transparent",
                                            borderBottom: "0px solid transparent"
                                        }}
                                        >
                                        {/*<![endif]*/}
                                        <table
                                            id="u_content_text_75"
                                            style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                            role="presentation"
                                            cellPadding={0}
                                            cellSpacing={0}
                                            width="100%"
                                        >
                                            <tbody>
                                            <tr>
                                                <td
                                                className="v-container-padding-padding"
                                                style={{
                                                    overflowWrap: "break-word",
                                                    wordBreak: "break-word",
                                                    padding: 10,
                                                    fontFamily: '"Montserrat",sans-serif'
                                                }}
                                                align="left"
                                                >
                                                <div
                                                    className="v-text-align"
                                                    style={{
                                                    color: "#34495e",
                                                    lineHeight: "140%",
                                                    textAlign: "left",
                                                    wordWrap: "break-word"
                                                    }}
                                                >
                                                    <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                    <strong>{item.quantity}</strong>
                                                    </p>
                                                </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        {/*[if (!mso)&(!IE)]><!*/}
                                        </div>
                                        {/*<![endif]*/}
                                    </div>
                                    </div>
                                    {/*[if (mso)|(IE)]></td><![endif]*/}
                                    {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                                </div>
                                </div>
                            </div>
                            <div
                                className="u-row-container"
                                style={{ padding: 0, backgroundColor: "transparent" }}
                            >
                                <div
                                className="u-row"
                                style={{
                                    margin: "0 auto",
                                    minWidth: 320,
                                    maxWidth: 600,
                                    overflowWrap: "break-word",
                                    wordWrap: "break-word",
                                    wordBreak: "break-word",
                                    backgroundColor: "#ffffff"
                                }}
                                >
                                <div
                                    style={{
                                    borderCollapse: "collapse",
                                    display: "table",
                                    width: "100%",
                                    backgroundColor: "transparent"
                                    }}
                                >
                                    {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]*/}
                                    {/*[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                    <div
                                    className="u-col u-col-100"
                                    style={{
                                        maxWidth: 320,
                                        minWidth: 600,
                                        display: "table-cell",
                                        verticalAlign: "top"
                                    }}
                                    >
                                    <div style={{ width: "100% !important" }}>
                                        {/*[if (!mso)&(!IE)]><!*/}
                                        <div
                                        style={{
                                            padding: 0,
                                            borderTop: "0px solid transparent",
                                            borderLeft: "0px solid transparent",
                                            borderRight: "0px solid transparent",
                                            borderBottom: "0px solid transparent"
                                        }}
                                        >
                                        {/*<![endif]*/}
                                        <table
                                            style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                            role="presentation"
                                            cellPadding={0}
                                            cellSpacing={0}
                                            width="100%"
                                        >
                                            <tbody>
                                            <tr>
                                                <td
                                                className="v-container-padding-padding"
                                                style={{
                                                    overflowWrap: "break-word",
                                                    wordBreak: "break-word",
                                                    padding: "5px 10px",
                                                    fontFamily: '"Montserrat",sans-serif'
                                                }}
                                                align="left"
                                                >
                                                <table
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    width="100%"
                                                    style={{
                                                    height:"0px",
                                                    textAlign:"center",
                                                    border:0,
                                                    tableLayout: "fixed",
                                                    borderSpacing: 0,
                                                    verticalAlign: "top",
                                                    borderTop: "1px solid #BBBBBB",
                                                    WebkitTextSizeAdjust: "100%"
                                                    }}
                                                    className="table3"
                                                >
                                                    <tbody>
                                                    <tr style={{ verticalAlign: "top" }}>
                                                        <td
                                                        style={{
                                                            wordBreak: "break-word",
                                                            verticalAlign: "top",
                                                            fontSize: 0,
                                                            lineHeight: 0,
                                                            WebkitTextSizeAdjust: "100%"
                                                        }}
                                                        className="td3"
                                                        >
                                                        <span>&nbsp;</span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        {/*[if (!mso)&(!IE)]><!*/}
                                        </div>
                                        {/*<![endif]*/}
                                    </div>
                                    </div>
                                    {/*[if (mso)|(IE)]></td><![endif]*/}
                                    {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                                </div>
                                </div>
                            </div>
                        </>
                        ))}
                        
                        <div className="u-row-container" style={{ padding: 0, backgroundColor: "transparent" }}>
                            <div className="u-row"
                                style={{
                                    margin: "0 auto",
                                    minWidth: 320,
                                    maxWidth: 600,
                                    overflowWrap: "break-word",
                                    wordWrap: "break-word",
                                    wordBreak: "break-word",
                                    backgroundColor: "#ffffff"
                                }}
                            >
                                <div
                                    style={{
                                    borderCollapse: "collapse",
                                    display: "table",
                                    width: "100%",
                                    backgroundColor: "transparent"
                                    }}
                                >
                                    {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]*/}
                                    {/*[if (mso)|(IE)]><td align="center" width="179" style="width: 179px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                    <div
                                    className="u-col u-col-29p84"
                                    style={{
                                        maxWidth: 320,
                                        minWidth: 179,
                                        display: "table-cell",
                                        verticalAlign: "top"
                                    }}
                                    >
                                    <div style={{ width: "100% !important" }}>
                                        {/*[if (!mso)&(!IE)]><!*/}
                                        <div
                                        style={{
                                            padding: 0,
                                            borderTop: "0px solid transparent",
                                            borderLeft: "0px solid transparent",
                                            borderRight: "0px solid transparent",
                                            borderBottom: "0px solid transparent"
                                        }}
                                        >
                                        {/*<![endif]*/}
                                        <table
                                            className="hide-mobile"
                                            style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                            role="presentation"
                                            cellPadding={0}
                                            cellSpacing={0}
                                            width="100%"
                                        >
                                            <tbody>
                                            <tr>
                                                <td
                                                className="v-container-padding-padding"
                                                style={{
                                                    overflowWrap: "break-word",
                                                    wordBreak: "break-word",
                                                    padding: 10,
                                                    fontFamily: '"Montserrat",sans-serif'
                                                }}
                                                align="left"
                                                >
                                                <table
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    style={{
                                                    width:"100%",
                                                    height:"0px",
                                                    textAlign:"center",
                                                    border:0,
                                                    borderCollapse: "collapse",
                                                    tableLayout: "fixed",
                                                    borderSpacing: 0,
                                                    verticalAlign: "top",
                                                    borderTop: "0px solid #BBBBBB",
                                                    WebkitTextSizeAdjust: "100%"
                                                    }}
                                                    className="table10"
                                                >
                                                    <tbody>
                                                    <tr style={{ verticalAlign: "top" }}>
                                                        <td
                                                        style={{
                                                            wordBreak: "break-word",
                                                            verticalAlign: "top",
                                                            fontSize: 0,
                                                            lineHeight: 0,
                                                            WebkitTextSizeAdjust: "100%"
                                                        }}
                                                        className="td10"
                                                        >
                                                        <span>&nbsp;</span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        {/*[if (!mso)&(!IE)]><!*/}
                                        </div>
                                        {/*<![endif]*/}
                                    </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="116" style="width: 116px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-19p33"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 116,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        className="hide-mobile"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: 10,
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <table
                                                cellPadding={0}
                                                cellSpacing={0}
                                                style={{
                                                width:"100%",
                                                height:"0px",
                                                textAlign:"center",
                                                border:0,
                                                borderCollapse: "collapse",
                                                tableLayout: "fixed",
                                                borderSpacing: 0,
                                                verticalAlign: "top",
                                                borderTop: "0px solid #BBBBBB",
                                                WebkitTextSizeAdjust: "100%"
                                                }}
                                                className="table11"
                                            >
                                                <tbody>
                                                <tr style={{ verticalAlign: "top" }}>
                                                    <td
                                                    style={{
                                                        wordBreak: "break-word",
                                                        verticalAlign: "top",
                                                        fontSize: 0,
                                                        lineHeight: 0,
                                                        WebkitTextSizeAdjust: "100%"
                                                    }}
                                                    className="td11"
                                                    >
                                                    <span>&nbsp;</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="128" style="width: 128px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-21p31"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 128,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_70"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "10px 10px 5px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#0d83dd",
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px"
                                                    }}
                                                >
                                                    <strong>Processing Fee</strong>
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="177" style="width: 177px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-29p52"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 177,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_71"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "10px 15px 10px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#34495e",
                                                lineHeight: "140%",
                                                textAlign: "right",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 18,
                                                    lineHeight: "25.2px"
                                                    }}
                                                >
                                                    <strong>
                                                    $ {`${receiptDetails.ServiceCharge}`}
                                                    </strong>
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                            </div>
                            </div>
                        </div>
                        <div
                            className="u-row-container"
                            style={{ padding: 0, backgroundColor: "transparent" }}
                        >
                            <div
                            className="u-row"
                            style={{
                                margin: "0 auto",
                                minWidth: 320,
                                maxWidth: 600,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                backgroundColor: "#ffffff"
                            }}
                            >
                            <div
                                style={{
                                borderCollapse: "collapse",
                                display: "table",
                                width: "100%",
                                backgroundColor: "transparent"
                                }}
                            >
                                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="179" style="width: 179px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-29p84"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 179,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        className="hide-mobile"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: 10,
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <table
                                                cellPadding={0}
                                                cellSpacing={0}
                                                style={{
                                                height:"0px",
                                                textAlign:"center",
                                                border:0,
                                                tableLayout: "fixed",
                                                borderSpacing: 0,
                                                width:"100%",
                                                verticalAlign: "top",
                                                borderTop: "0px solid #BBBBBB",
                                                WebkitTextSizeAdjust: "100%"
                                                }}
                                                className="table14"
                                            >
                                                <tbody>
                                                <tr style={{ verticalAlign: "top" }}>
                                                    <td
                                                    style={{
                                                        wordBreak: "break-word",
                                                        verticalAlign: "top",
                                                        fontSize: 0,
                                                        lineHeight: 0,
                                                        WebkitTextSizeAdjust: "100%"
                                                    }}
                                                    className="td12"
                                                    >
                                                    <span>&nbsp;</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="116" style="width: 116px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-19p33"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 116,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        className="hide-mobile"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: 10,
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <table
                                                cellPadding={0}
                                                cellSpacing={0}
                                                style={{
                                                borderCollapse: "collapse",
                                                tableLayout: "fixed",
                                                borderSpacing: 0,
                                                height:"0px",
                                                width:"100%",
                                                textAlign:"center",
                                                border:0,
                                                verticalAlign: "top",
                                                borderTop: "0px solid #BBBBBB",
                                                WebkitTextSizeAdjust: "100%"
                                                }}
                                                className="table15"
                                            >
                                                <tbody>
                                                <tr style={{ verticalAlign: "top" }}>
                                                    <td
                                                    style={{
                                                        wordBreak: "break-word",
                                                        verticalAlign: "top",
                                                        fontSize: 0,
                                                        lineHeight: 0,
                                                        WebkitTextSizeAdjust: "100%"
                                                    }}
                                                    className="td13"
                                                    >
                                                    <span>&nbsp;</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="142" style="width: 142px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-23p66"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 142,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_92"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "10px 10px 5px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#0d83dd",
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px"
                                                    }}
                                                >
                                                    <strong>GCT</strong>
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="163" style="width: 163px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-27p17"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 163,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_93"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "10px 15px 10px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#34495e",
                                                lineHeight: "140%",
                                                textAlign: "right",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 18,
                                                    lineHeight: "25.2px"
                                                    }}
                                                >
                                                    <strong>
                                                    $ {`${receiptDetails.GCT}`}
                                                    </strong>
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                            </div>
                            </div>
                        </div>
                        <div
                            className="u-row-container"
                            style={{ padding: 0, backgroundColor: "transparent" }}
                        >
                            <div
                            className="u-row"
                            style={{
                                margin: "0 auto",
                                minWidth: 320,
                                maxWidth: 600,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                backgroundColor: "#0d83dd"
                            }}
                            >
                            <div
                                style={{
                                borderCollapse: "collapse",
                                display: "table",
                                width: "100%",
                                backgroundColor: "transparent"
                                }}
                            >
                                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #0d83dd;"><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="179" style="width: 179px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-29p84"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 179,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        className="hide-mobile"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: 10,
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <table
                                                cellPadding={0}
                                                cellSpacing={0}
                                                style={{
                                                height:"0px",
                                                textAlign:"center",
                                                border:0,
                                                tableLayout: "fixed",
                                                borderSpacing: 0,
                                                width:"100%",
                                                verticalAlign: "top",
                                                borderTop: "0px solid #BBBBBB",
                                                WebkitTextSizeAdjust: "100%"
                                                }}
                                                className="table16"
                                            >
                                                <tbody>
                                                <tr style={{ verticalAlign: "top" }}>
                                                    <td
                                                    style={{
                                                        wordBreak: "break-word",
                                                        verticalAlign: "top",
                                                        fontSize: 0,
                                                        lineHeight: 0,
                                                        WebkitTextSizeAdjust: "100%"
                                                    }}
                                                    className="td14"
                                                    >
                                                    <span>&nbsp;</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="116" style="width: 116px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-19p33"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 116,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        className="hide-mobile"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: 10,
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <table
                                                cellPadding={0}
                                                cellSpacing={0}
                                                width="100%"
                                                style={{
                                                height:"0px",
                                                textAlign:"center",
                                                border:0,
                                                tableLayout: "fixed",
                                                borderSpacing: 0,
                                                verticalAlign: "top",
                                                borderTop: "0px solid #BBBBBB",
                                                WebkitTextSizeAdjust: "100%"
                                                }}
                                                className="table17"
                                            >
                                                <tbody>
                                                <tr style={{ verticalAlign: "top" }}>
                                                    <td
                                                    style={{
                                                        wordBreak: "break-word",
                                                        verticalAlign: "top",
                                                        fontSize: 0,
                                                        lineHeight: 0,
                                                        WebkitTextSizeAdjust: "100%"
                                                    }}
                                                    className="td15"
                                                    >
                                                    <span>&nbsp;</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="142" style="width: 142px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-23p66"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 142,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_68"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "10px 10px 5px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#ffffff",
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px"
                                                    }}
                                                >
                                                    <strong>Total</strong>
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="163" style="width: 163px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-27p17"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 163,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        id="u_content_text_69"
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "10px 15px 10px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#ffffff",
                                                lineHeight: "140%",
                                                textAlign: "right",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 18,
                                                    lineHeight: "25.2px"
                                                    }}
                                                >
                                                    <strong>
                                                    $ {`${receiptDetails.OrderTotal}`}
                                                    </strong>
                                                </span>
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                            </div>
                            </div>
                        </div>
                        <div
                            className="u-row-container"
                            style={{ padding: 0, backgroundColor: "transparent" }}
                        >
                            <div
                            className="u-row"
                            style={{
                                margin: "0 auto",
                                minWidth: 320,
                                maxWidth: 600,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                backgroundColor: "#d9eef8"
                            }}
                            >
                            <div
                                style={{
                                borderCollapse: "collapse",
                                display: "table",
                                width: "100%",
                                backgroundColor: "transparent"
                                }}
                            >
                                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #d9eef8;"><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="598" style="width: 598px;padding: 0px;border-top: 0px solid transparent;border-left: 1px solid #2cb4f3;border-right: 1px solid #2cb4f3;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-100"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 600,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "1px solid #2cb4f3",
                                        borderRight: "1px solid #2cb4f3",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "10px 10px 30px 15px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                lineHeight: "140%",
                                                textAlign: "left",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: "140%" }}>
                                                <span
                                                    style={{
                                                    fontSize: 16,
                                                    lineHeight: "22.4px"
                                                    }}
                                                >
                                                    Thank you for choosing us,
                                                </span>
                                                <br />
                                                {userInfo.fullName}
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                            </div>
                            </div>
                        </div>
                        <div
                            className="u-row-container"
                            style={{ padding: 0, backgroundColor: "transparent" }}
                        >
                            <div
                            className="u-row"
                            style={{
                                margin: "0 auto",
                                minWidth: 320,
                                maxWidth: 600,
                                overflowWrap: "break-word",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                backgroundColor: "#34495e"
                            }}
                            >
                            <div
                                style={{
                                borderCollapse: "collapse",
                                display: "table",
                                width: "100%",
                                backgroundColor: "transparent"
                                }}
                            >
                                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #34495e;"><![endif]*/}
                                {/*[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                                <div
                                className="u-col u-col-100"
                                style={{
                                    maxWidth: 320,
                                    minWidth: 600,
                                    display: "table-cell",
                                    verticalAlign: "top"
                                }}
                                >
                                <div style={{ width: "100% !important" }}>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    <div
                                    style={{
                                        padding: 0,
                                        borderTop: "0px solid transparent",
                                        borderLeft: "0px solid transparent",
                                        borderRight: "0px solid transparent",
                                        borderBottom: "0px solid transparent"
                                    }}
                                    >
                                    {/*<![endif]*/}
                                    <table
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: "30px 10px 10px",
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div style={{textAlign:"center"}}>
                                                <div
                                                style={{ display: "flex", maxWidth: 125, marginLeft: "auto", marginRight: "auto" }}
                                                >
                                                {/*[if (mso)|(IE)]><table width="125" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:125px;"><tr><![endif]*/}
                                                {/*[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]*/}
                                                <table
                                                    cellSpacing={0}
                                                    cellPadding={0}
                                                    style={{
                                                    textAlign:"left",
                                                    border:0,
                                                    width:32,
                                                    height:32,
                                                    tableLayout: "fixed",
                                                    borderSpacing: 0,
                                                    verticalAlign: "top",
                                                    marginRight: 10
                                                    }}
                                                    className="table12"
                                                >
                                                    <tbody>
                                                    <tr style={{ verticalAlign: "top" }}>
                                                        <td
                                                        align="left"
                                                        valign="middle"
                                                        style={{
                                                            wordBreak: "break-word",
                                                            verticalAlign: "top"
                                                        }}
                                                        className="td16"
                                                        >
                                                        <a
                                                            href="https://twitter.com/urgedint"
                                                            title="Twitter"
                                                            target="_blank"
                                                        >
                                                            <img
                                                            src="images/image-3.png"
                                                            alt="Twitter"
                                                            title="Twitter"
                                                            width={32}
                                                            style={{
                                                                outline: "none",
                                                                textDecoration: "none",
                                                                clear: "both",
                                                                display: "block !important",
                                                                border: "none",
                                                                height: "auto",
                                                                float: "none",
                                                                maxWidth: "32px !important"
                                                            }}
                                                            className="img2"
                                                            />
                                                        </a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                                {/*[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]*/}
                                                <table
                                                    cellSpacing={0}
                                                    cellPadding={0}
                                                    style={{
                                                    width:32,
                                                    height:32,
                                                    textAlign:"left",
                                                    border:0,
                                                    tableLayout: "fixed",
                                                    borderSpacing: 0,
                                                    verticalAlign: "top",
                                                    marginRight: 10
                                                    }}
                                                    className="table18"
                                                >
                                                    <tbody>
                                                    <tr style={{ verticalAlign: "top" }}>
                                                        <td
                                                        align="left"
                                                        valign="middle"
                                                        style={{
                                                            wordBreak: "break-word",
                                                            verticalAlign: "top"
                                                        }}
                                                        className="td17"
                                                        >
                                                        <a
                                                            href="https://www.facebook.com/URGED-International-Limited-416151199168851/"
                                                            title="Facebook"
                                                            target="_blank"
                                                        >
                                                            <img
                                                            src="images/image-2.png"
                                                            alt="Facebook"
                                                            title="Facebook"
                                                            width={32}
                                                            style={{
                                                                outline: "none",
                                                                textDecoration: "none",
                                                                clear: "both",
                                                                display: "block !important",
                                                                border: "none",
                                                                height: "auto",
                                                                float: "none",
                                                                maxWidth: "32px !important"
                                                            }}
                                                            className="img3"
                                                            />
                                                        </a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                                {/*[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]*/}
                                                <table
                                                    cellSpacing={0}
                                                    cellPadding={0}
                                                    style={{
                                                    textAlign:"left",
                                                    border:0,
                                                    width:32,
                                                    height:32,
                                                    tableLayout: "fixed",
                                                    verticalAlign: "top",
                                                    marginRight: 0
                                                    }}
                                                    className="table19"
                                                >
                                                    <tbody>
                                                    <tr style={{ verticalAlign: "top" }}>
                                                        <td
                                                        align="left"
                                                        valign="middle"
                                                        style={{
                                                            wordBreak: "break-word",
                                                            verticalAlign: "top"
                                                        }}
                                                        className="td18"
                                                        >
                                                        <a
                                                            href="https://www.instagram.com/urgedint/?hl=en"
                                                            title="Instagram"
                                                            target="_blank"
                                                        >
                                                            <img
                                                            src="images/image-1.png"
                                                            alt="Instagram"
                                                            title="Instagram"
                                                            width={32}
                                                            style={{
                                                                outline: "none",
                                                                textDecoration: "none",
                                                                clear: "both",
                                                                display: "block !important",
                                                                border: "none",
                                                                height: "auto",
                                                                float: "none",
                                                                maxWidth: "32px !important"
                                                            }}
                                                            className="img4"
                                                            />
                                                        </a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        style={{ fontFamily: '"Montserrat",sans-serif', border:0 }}
                                        role="presentation"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        width="100%"
                                    >
                                        <tbody>
                                        <tr>
                                            <td
                                            className="v-container-padding-padding"
                                            style={{
                                                overflowWrap: "break-word",
                                                wordBreak: "break-word",
                                                padding: 10,
                                                fontFamily: '"Montserrat",sans-serif'
                                            }}
                                            align="left"
                                            >
                                            <div
                                                className="v-text-align"
                                                style={{
                                                color: "#ffffff",
                                                lineHeight: 1,
                                                textAlign: "center",
                                                wordWrap: "break-word"
                                                }}
                                            >
                                                <p style={{ fontSize: 14, lineHeight: 1, height: "170px" }}>
                                                If you have any questions, feel free message
                                                us at{" "}
                                                <a
                                                    rel="noopener"
                                                    href="mailto:urgedinternationalsite@gmail.com?subject=&body="
                                                    target="_blank"
                                                >
                                                    urgedinternationalsite@gmail.com
                                                </a>
                                                <span
                                                    style={{
                                                    color: "#ffffff",
                                                    fontSize: 14,
                                                    lineHeight: 21
                                                    }}
                                                >
                                                    .
                                                </span>
                                                </p>
                                                <p style={{ fontSize: 14, lineHeight: 2 }}>
                                                All right reserved. <br />
                                                876 960 1004
                                                </p>
                                                <p style={{ fontSize: 14, lineHeight: 2 }}>
                                                <br />
                                                77 Manchester Ave, May Pen
                                                </p>
                                                <p style={{ fontSize: 14, lineHeight: 2 }}>
                                                &nbsp;
                                                </p>
                                            </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*[if (!mso)&(!IE)]><!*/}
                                    </div>
                                    {/*<![endif]*/}
                                </div>
                                </div>
                                {/*[if (mso)|(IE)]></td><![endif]*/}
                                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
                            </div>
                            </div>
                        </div>
                        {/*[if (mso)|(IE)]></td></tr></table><![endif]*/}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Container>
        </>
    )
}
