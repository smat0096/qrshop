<?php  if(!defined('DEDEINC')) exit('dedecms');
/**
 * 扩展小助手
 *
 * @version        $Id: extend.helper.php 1 13:58 2010年7月5日Z tianya $
 * @package        DedeCMS.Helpers
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */

/**
 *  返回指定的字符
 *
 * @param     string  $n  字符ID
 * @return    string
 */
if ( ! function_exists('ParCv'))
{
    function ParCv($n)
    {
        return chr($n);
    }
}


/**
 *  显示一个错误
 *
 * @return    void
 */
if ( ! function_exists('ParamError'))
{
    function ParamError()
    {
        ShowMsg('对不起，你输入的参数有误！','javascript:;');
        exit();
    }
}

/**
 *  默认属性
 *
 * @param     string  $oldvar  旧的值
 * @param     string  $nv      新值
 * @return    string
 */
if ( ! function_exists('AttDef'))
{
    function AttDef($oldvar, $nv)
    {
        return empty($oldvar) ? $nv : $oldvar;
    }
}


/**
 *  返回Ajax头信息
 *
 * @return     void
 */
if ( ! function_exists('AjaxHead'))
{
    function AjaxHead()
    {
        @header("Pragma:no-cache\r\n");
        @header("Cache-Control:no-cache\r\n");
        @header("Expires:0\r\n");
    }
}

/**
 *  去除html和php标记
 *
 * @return     string
 */
if ( ! function_exists('dede_strip_tags'))
{
	function dede_strip_tags($str) { 
	    $strs=explode('<',$str); 
	    $res=$strs[0]; 
	    for($i=1;$i<count($strs);$i++) 
	    { 
	        if(!strpos($strs[$i],'>')) 
	            $res = $res.'&lt;'.$strs[$i]; 
	        else 
	            $res = $res.'<'.$strs[$i]; 
	    } 
	    return strip_tags($res);    
	} 
}
 
/* 
* 递归获取符合条件的子栏目 
* @param $tid 栏目ID 
* @return string 
* */ 
if ( ! function_exists('GetTotalArc'))
{
    function GetTotalArc($tid){ 
        global $dsql; 
        $sql = GetSonIds($tid); 
        $row = $dsql->GetOne("Select count(id) as dd From dede_archives where typeid in({$sql})"); 
        return $row['dd']; 
    } 
} 
/**
 * channelartlist内三层嵌套循环返回文章列表
 */
if ( ! function_exists('GetChannelArclist'))
{
    function GetChannelArclist($tid,$template, $query='',$limit=''){ 
        global $dsql;
        $html = '';
        $paramList = array(
            'arcurl' => '[field:arcurl/]', 
            'title' => '[field:title/]'
        );
        $sql = "Select id From dede_archives where ".($query ? ($query.' AND '):'')."typeid in(".GetSonIds($tid).") limit ".$limit;
        $dsql->Execute('me2',$sql);
        while($arr = $dsql->GetArray('me2'))
        {
            $arr = GetOneArchive($arr['id']);
            $list = $template;
            foreach( $paramList as $key => $value){
                $find = $value;
                $replace = $arr[$key];
                $list = str_replace($find,$replace,$list);
            }
            $html .= $list;
        }
        return $html;
    } 
} 

if ( ! function_exists('GetCurrentClass'))
{
    function GetCurrentClass($tid,$active){ 
        $typeid2 = $GLOBALS["_sys_globals"]["typeid"];
        return $typeid2 == $tid ? $active : '';
    } 
} 

