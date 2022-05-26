$.ajax({
    type:"GET",
    url: './testcategorylist.json',
    dataType: "JSON",
    // data: "data",
    // success: successCall,
    // error : errorCall,
    // complete : completeCall
}).done(function(data){
    let depth1ListHtml = '';
    let depth2ListHtml = '';
    //depth2 ~ depth5
    $.each(data.category.depth1, function(index, values){
        depth1ListHtml += '<li data-tabcate="#cpp_cate'+ (index+1) +'"><span class="cate_name">' + values.name + '</span></li>';
        depth2ListHtml += '<div id="cpp_cate'+ (index+1) +'" class="'+ (index === 0 ? ' active' : '') +'">';
        
        //depth2
        $.each(values.depth2, function(index, values){
            depth2ListHtml += '		<div class="cpp_cate_name_depth1' + (index === 0 ? ' active' : '') +'"> '+ values.name +' </div>';
            depth2ListHtml += '		<div class="cpp_allcate_depth2" style="display:'+ (index === 0 ? 'block' : 'none') +'">';
            depth2ListHtml += '			<ul>';
            //dpeth3
            $.each(values.depth3, function(index, values){
                depth2ListHtml += '		<li>';
                depth2ListHtml += '			<div class="cpp_cate_name_depth2' + (index === 0 ? ' active' : '') +'"><span class="cate_name">'+ values.name +'</span></div>';
                depth2ListHtml += '			<div class="cpp_allcate_depth3">';
                depth2ListHtml += '				<ul>';
                //depth4
                $.each(values.depth4, function(index, values){
                    depth2ListHtml += '		<li>';
                    depth2ListHtml += '			<'+ values.tagType +' class="cpp_cate_name_depth3' + (index === 0 ? ' active' : '') +'"><span class="cate_name">'+ values.name +'</span></'+ values.tagType +'>';
                    if(values.tagType === 'div') {
                        depth2ListHtml += '			<div class="cpp_allcate_depth4">';
                        depth2ListHtml += '				<ul>';
                        //depth5
                        $.each(values.depth5, function(index, values){
                            depth2ListHtml += '		<li>';
                            depth2ListHtml += '			<'+values.tagType+' class="cpp_cate_name_depth5"><span class="cate_name">'+ values.name +'</span></'+values.tagType+'>';
                            depth2ListHtml += '		</li>';
                        });
                        depth2ListHtml += '				</ul>';
                        depth2ListHtml += '		</div>';
                    }
                });
                depth2ListHtml += '				</ul>';
                depth2ListHtml += '			</div>';
                depth2ListHtml += '		</li>';
            });
            depth2ListHtml += '			</ul>';
            depth2ListHtml += '		</div>';
        });
        depth2ListHtml += '</div>';
    })
    
    $(".cate_name_list").append(depth1ListHtml);
    $(".tab_contents_cpp_allcate").append(depth2ListHtml);
});
// function successCall(){
// 	alert("전송성공");
// }
// function errorCall(){
// 	alert("전송실패");
// }
// function completeCall(){
// 	alert("일단완료");
// }