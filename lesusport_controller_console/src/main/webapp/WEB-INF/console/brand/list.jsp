<%@ page language="java" pageEncoding="UTF-8" %>
<%@ include file="../head.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>babasport-list</title>
    <script type="text/javascript">
        //全选数据
        function checkBox(ids, checked) {
            $("input[name=ids]").attr("checked", checked);
        }

        //删除数据
        function optDelete(name, isDisplay, pageNo) {
            var size = $("input[name=ids]:checked").size();
            if (size == 0) {
                alert("请至少选择一条数据");
                return;
            }
            if (!confirm("确认删除吗？")) {
                return;
            }
            $("#jvForm").attr("method", "post");
            $("#jvForm").attr("action", "/brand/removeBrands?name=" + name + "&isDisplay=" + isDisplay + "&pageNo=" + pageNo);
            $("#jvForm").submit();
        }
    </script>
</head>
<body>
<div class="box-positon">
    <div class="rpos">当前位置: 品牌管理 - 列表</div>
    <form class="ropt">
        <input class="add" type="button" value="添加" onclick="window.location.href='/brand/toadd'"/>
    </form>
    <div class="clear"></div>
</div>
<div class="body-box">
    <form action="/brand/list" method="post" style="padding-top:5px;">
        品牌名称: <input type="text" name="name" value="${name}"/>
        <select name="isDisplay">
            <option value="1">是</option>
            <option value="0">否</option>
        </select>
        <input type="submit" class="query" value="查询"/>
    </form>
    <form id="jvForm">
        <table cellspacing="1" cellpadding="0" border="0" width="100%" class="pn-ltable">
            <thead class="pn-lthead">
            <tr>
                <th width="20"><input type="checkbox" onclick="checkBox('ids',this.checked)"/></th>
                <th>品牌ID</th>
                <th>品牌名称</th>
                <th>品牌图片</th>
                <th>品牌描述</th>
                <th>排序</th>
                <th>是否可用</th>
                <th>操作选项</th>
            </tr>
            </thead>
            <tbody class="pn-ltbody">
            <c:forEach items="${pagination.list}" var="brand">
                <tr bgcolor="#ffffff" onmouseout="this.bgColor='#ffffff'" onmouseover="this.bgColor='#eeeeee'">
                    <td><input type="checkbox" value="${brand.id}" name="ids"/></td>
                    <td align="center">${brand.id}</td>
                    <td align="center">${brand.name}</td>
                    <td align="center"><img width="40" height="40" src="${brand.imgUrl}"/></td>
                    <td align="center">${brand.description}</td>
                    <td align="center">${brand.sort}</td>
                    <td align="center">
                        <c:if test="${brand.isDisplay == 1}">是</c:if>
                        <c:if test="${brand.isDisplay == 0}">否</c:if>
                    </td>
                    <td align="center">
                        <a class="pn-opt" href="/brand/toEditor/${brand.id}">修改</a> | <a class="pn-opt"
                                                                                         onclick="if(!confirm('您确定删除吗？')) {return false;}"
                                                                                         href="/brand/removeBrand/${brand.id}?name=${name}&isDisplay=${isDisplay}&pageNo=${pagination.pageNo}">删除</a>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </form>
    <div class="page pb15">
	<span class="r inb_a page_b">
    <c:forEach items="${pagination.pageView}" var="page">
        ${page}
    </c:forEach>
	</span>
    </div>
    <div style="margin-top:15px;"><input class="del-button" type="button" value="删除"
                                         onclick="optDelete('${name}','${isDisplay}','${pagination.pageNo}');"/></div>
</div>
</body>
</html>