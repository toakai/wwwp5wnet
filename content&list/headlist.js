﻿function headline() {
    document.writeln('<li><TRS_Region name="证券头条"><TRS_Cell><TRS_Document Field="DocTitle" target="_blank">证券头条</TRS_Document></TRS_Cell></TRS_Region></li>');
    document.writeln('<li><TRS_Region name="中小板头条"><TRS_Cell><TRS_Document Field="DocTitle" target="_blank">中小板头条</TRS_Document></TRS_Cell></TRS_Region></li>');
    document.writeln('<li><TRS_Region name="港股头条"><TRS_Cell><TRS_Document Field="DocTitle" target="_blank">港股头条</TRS_Document></TRS_Cell></TRS_Region></li>');
    document.writeln('<li><TRS_Region name="股评研报头条"><TRS_Cell><TRS_Document Field="DocTitle" target="_blank">股评研报头条</TRS_Document></TRS_Cell></TRS_Region></li>');
    document.writeln('<li><TRS_Region name="创业板头条"><TRS_Cell><TRS_Document Field="DocTitle" target="_blank">创业板头条</TRS_Document></TRS_Cell></TRS_Region></li>');
}

function focuspics() {<TRS_DOCUMENTS id="首页_焦点图14" num="2" startpos="0">
    document.writeln('<a href="<TRS_Document field='_RECURL' UrlIsAbs='true'/>" target="_blank"><img src="<TRS_Appendix field='_RECURL' UrlIsAbs='true' MODE='PIC' INDEX='0' autolink='false' memo='FALSE'>图片</TRS_Appendix>" width="190" height="135" /></a>');
    document.writeln('<p></p>');</TRS_DOCUMENTS>
}

function focuspics14() {<TRS_DOCUMENTS id="首页_焦点图14" num="2" startpos="0">
    document.writeln('<a href="<TRS_Document field='_RECURL' UrlIsAbs='true'/>" target="_blank"><img src="<TRS_Appendix field='_RECURL' UrlIsAbs='true' MODE='PIC' INDEX='0' autolink='false' memo='FALSE'>图片</TRS_Appendix>" width="190" height="135" /></a>');
    document.writeln('<p></p>');</TRS_DOCUMENTS>
}
