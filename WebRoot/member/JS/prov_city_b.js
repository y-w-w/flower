;
cityareaname=new Array(36);
cityareacode=new Array(36);
 function first(preB,preS,formname,selectB,selectS)
  { a=0;
if (selectB=='01')
  { a=1;tempoption=new Option('����','01',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[1]=tempoption;');
cityareacode[0]=new Array('������','������','������','������','������','������','��̨��','ʯ��ɽ','����');
cityareaname[0]=new Array('������','������','������','������','������','������','��̨��','ʯ��ɽ','����');

if (selectB=='02')
  { a=2;tempoption=new Option('�Ϻ�','02',false,true); }
else
  { tempoption=new Option('�Ϻ�','�Ϻ�'); }
eval('document.'+formname+'.'+preB+'.options[2]=tempoption;');
cityareacode[1]=new Array('��ɽ','��ɽ','����','����','����','����','����','¬��','�ɽ�','����','�ֶ�','����','���','����','բ��','����','����','���','�ζ�','�ϻ�','����');
cityareaname[1]=new Array('��ɽ','��ɽ','����','����','����','����','����','¬��','�ɽ�','����','�ֶ�','����','���','����','բ��','����','����','���','�ζ�','�ϻ�','����');
if (selectB=='03')
  { a=3;tempoption=new Option('����','03',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[3]=tempoption;');
cityareacode[2]=new Array('����','����','ɳƺ��','�ϰ�','������','��ɿ�','����','��ʢ','˫��','�山','����','����','����','����','ǭ��','����','�ϴ�','�ϴ�','����','ͭ��','����','����');
cityareaname[2]=new Array('����','����','ɳƺ��','�ϰ�','������','��ɿ�','����','��ʢ','˫��','�山','����','����','����','����','ǭ��','����','�ϴ�','�ϴ�','����','ͭ��','����','����');
if (selectB=='04')
  { a=4;tempoption=new Option('���','04',false,true); }
else
  { tempoption=new Option('���','���'); }
eval('document.'+formname+'.'+preB+'.options[4]=tempoption;');
cityareacode[3]=new Array('��ƽ','�ӱ�','����','�Ӷ�','�Ͽ�','����','����','����','���','����','����','����','����','����','����','����');
cityareaname[3]=new Array('��ƽ','�ӱ�','����','�Ӷ�','�Ͽ�','����','����','����','���','����','����','����','����','����','����','����');
if (selectB=='05')
  { a=5;tempoption=new Option('�㶫','05',false,true); }
else
  { tempoption=new Option('�㶫','�㶫'); }
eval('document.'+formname+'.'+preB+'.options[5]=tempoption;');
cityareacode[4]=new Array('����','����','�麣','��ɽ','��ɽ','��ݸ','��Զ','����','����','����','տ��','�ع�','����','��Դ','��β','��ͷ','÷��','ï��','����');
cityareaname[4]=new Array('����','����','�麣','��ɽ','��ɽ','��ݸ','��Զ','����','����','����','տ��','�ع�','����','��Դ','��β','��ͷ','÷��','ï��','����');
if (selectB=='06')
  { a=6;tempoption=new Option('�ӱ�','06',false,true); }
else
  { tempoption=new Option('�ӱ�','�ӱ�'); }
eval('document.'+formname+'.'+preB+'.options[6]=tempoption;');
cityareacode[5]=new Array('ʯ��ׯ','��ɽ','�ػʵ�','����','��̨','�żҿ�','�е�','�ȷ�','����','����','��ˮ','����');
cityareaname[5]=new Array('ʯ��ׯ','��ɽ','�ػʵ�','����','��̨','�żҿ�','�е�','�ȷ�','����','����','��ˮ','����');
if (selectB=='07')
  { a=7;tempoption=new Option('ɽ��','07',false,true); }
else
  { tempoption=new Option('ɽ��','ɽ��'); }
eval('document.'+formname+'.'+preB+'.options[7]=tempoption;');
cityareacode[6]=new Array('̫ԭ','��ͬ','��Ȫ','˷��','����','�ٷ�','����','����');
cityareaname[6]=new Array('̫ԭ','��ͬ','��Ȫ','˷��','����','�ٷ�','����','����');
if (selectB=='08')
  { a=8;tempoption=new Option('���ɹ�','08',false,true); }
else
  { tempoption=new Option('���ɹ�','���ɹ�'); }
eval('document.'+formname+'.'+preB+'.options[8]=tempoption;');
cityareacode[7]=new Array('���ͺ���','��ͷ','�ں�','�ٺ�','��ʤ','����','���ֺ���','ͨ��','���','������','��������','����');
cityareaname[7]=new Array('���ͺ���','��ͷ','�ں�','�ٺ�','��ʤ','����','���ֺ���','ͨ��','���','������','��������','����');
if (selectB=='9')
  { a=9;tempoption=new Option('����','9',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[9]=tempoption;');
cityareacode[8]=new Array('����','����','��ɽ','����','����','�̽�','����','��˳','Ӫ��','����','����','��Ϫ','����','��«��','����');
cityareaname[8]=new Array('����','����','��ɽ','����','����','�̽�','����','��˳','Ӫ��','����','����','��Ϫ','����','��«��','����');
if (selectB=='10')
  { a=10;tempoption=new Option('����','10',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[10]=tempoption;');
cityareacode[9]=new Array('����','����','��ƽ','��Դ','ͨ��','��ɽ','��ԭ','�׳�','�ӱ�','����');
cityareaname[9]=new Array('����','����','��ƽ','��Դ','ͨ��','��ɽ','��ԭ','�׳�','�ӱ�','����');
if (selectB=='11')
  { a=11;tempoption=new Option('������','11',false,true); }
else
  { tempoption=new Option('������','������'); }
eval('document.'+formname+'.'+preB+'.options[11]=tempoption;');
cityareacode[10]=new Array('������','�������','ĵ����','��ľ˹','����','����','�ں�','����','�׸�','˫Ѽɽ','��̨��','�绯','���˰���','����');
cityareaname[10]=new Array('������','�������','ĵ����','��ľ˹','����','����','�ں�','����','�׸�','˫Ѽɽ','��̨��','�绯','���˰���','����');
if (selectB=='12')
  { a=12;tempoption=new Option('����','12',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[12]=tempoption;');
cityareacode[11]=new Array('�Ͼ�','����','����','����','��','���Ƹ� ','����','���� ','��ͨ','�γ�','����','̩��','��Ǩ','����');
cityareaname[11]=new Array('�Ͼ�','����','����','����','��','���Ƹ� ','����','���� ','��ͨ','�γ�','����','̩��','��Ǩ','����');
if (selectB=='13')
  { a=13;tempoption=new Option('�㽭','13',false,true); }
else
  { tempoption=new Option('�㽭','�㽭'); }
eval('document.'+formname+'.'+preB+'.options[13]=tempoption;');
cityareacode[12]=new Array('����','����','��ˮ','����','����','��ɽ','����','��','̨��','����','����','����');
cityareaname[12]=new Array('����','����','��ˮ','����','����','��ɽ','����','��','̨��','����','����','����');
if (selectB=='14')
  { a=14;tempoption=new Option('����','14',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[14]=tempoption;');
cityareacode[13]=new Array('�Ϸ�  ','�ߺ� ','���� ','���� ','���� ','���� ','��ɽ ','���� ','���� ','���� ','��ɽ ','ͭ��','���� ','���� ','���� ','���� ','����','����');
cityareaname[13]=new Array('�Ϸ�  ','�ߺ� ','���� ','���� ','���� ','���� ','��ɽ ','���� ','���� ','���� ','��ɽ ','ͭ��','���� ','���� ','���� ','���� ','����','����');
if (selectB=='15')
  { a=15;tempoption=new Option('����','15',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[15]=tempoption;');
cityareacode[14]=new Array('���� ','���� ','Ȫ�� ','���� ','���� ','��ƽ ','���� ','���� ','����','����');
cityareaname[14]=new Array('���� ','���� ','Ȫ�� ','���� ','���� ','��ƽ ','���� ','���� ','����','����');
if (selectB=='16')
  { a=16;tempoption=new Option('����','16',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[16]=tempoption;');
cityareacode[15]=new Array('�ϲ�','������','�Ž�','Ƽ��','����','ӥ̶','����','�˴�','����','����','����','����');
cityareaname[15]=new Array('�ϲ�','������','�Ž�','Ƽ��','����','ӥ̶','����','�˴�','����','����','����','����');
if (selectB=='17')
  { a=17;tempoption=new Option('ɽ��','17',false,true); }
else
  { tempoption=new Option('ɽ��','ɽ��'); }
eval('document.'+formname+'.'+preB+'.options[17]=tempoption;');
cityareacode[16]=new Array('����','�ൺ','�Ͳ�','����','��̨','Ϋ��','����','̩��','����','����','����','��ׯ','����','����','�ĳ�','����','��Ӫ','����');
cityareaname[16]=new Array('����','�ൺ','�Ͳ�','����','��̨','Ϋ��','����','̩��','����','����','����','��ׯ','����','����','�ĳ�','����','��Ӫ','����');
if (selectB=='18')
  { a=18;tempoption=new Option('����','18',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[18]=tempoption;');
cityareacode[17]=new Array('֣��','����','����','ƽ��ɽ','����','�ױ�','����','����','���','���','���','����Ͽ','����','����','�ܿ�','פ���','����','��Դ','����');
cityareaname[17]=new Array('֣��','����','����','ƽ��ɽ','����','�ױ�','����','����','���','���','���','����Ͽ','����','����','�ܿ�','פ���','����','��Դ','����');
if (selectB=='19')
  { a=19;tempoption=new Option('����','19',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[19]=tempoption;');
cityareacode[18]=new Array('�人','��ʯ','ʮ��','����','�˲�','����','����','����','Т��','�Ƹ�','����','��ʩ','����','����','����','Ǳ��','��ũ��','����');
cityareaname[18]=new Array('�人','��ʯ','ʮ��','����','�˲�','����','����','����','Т��','�Ƹ�','����','��ʩ','����','����','����','Ǳ��','��ũ��','����');
if (selectB=='20')
  { a=20;tempoption=new Option('����','20',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[20]=tempoption;');
cityareacode[19]=new Array('��ɳ','����','��̶','����','����','����','����','����','����','����','����','¦��','����','����');
cityareaname[19]=new Array('��ɳ','����','��̶','����','����','����','����','����','����','����','����','¦��','����','����');
if (selectB=='21')
  { a=21;tempoption=new Option('����','21',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[21]=tempoption;');
cityareacode[20]=new Array('����','����','����','����','����','���Ǹ�','����','���','����','����','��ɫ','�ӳ�','����');
cityareaname[20]=new Array('����','����','����','����','����','���Ǹ�','����','���','����','����','��ɫ','�ӳ�','����');
if (selectB=='22')
  { a=22;tempoption=new Option('����','22',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[22]=tempoption;');
cityareacode[21]=new Array('���� ','����','ͨʲ','��','��ɽ','�Ĳ�','����','����','����','����');
cityareaname[21]=new Array('���� ','����','ͨʲ','��','��ɽ','�Ĳ�','����','����','����','����');
if (selectB=='23')
  { a=23;tempoption=new Option('�Ĵ�','23',false,true); }
else
  { tempoption=new Option('�Ĵ�','�Ĵ�'); }
eval('document.'+formname+'.'+preB+'.options[23]=tempoption;');
cityareacode[22]=new Array('�ɶ�','�Թ�','��֦��','����','����','����','��Ԫ','����','�ڽ�','��ɽ','�ϳ�  ','�˱�','�㰲','����','����','�Ű�','üɽ  ','���� ','���� ','��ɽ','����');
cityareaname[22]=new Array('�ɶ�','�Թ�','��֦��','����','����','����','��Ԫ','����','�ڽ�','��ɽ','�ϳ�  ','�˱�','�㰲','����','����','�Ű�','üɽ  ','���� ','���� ','��ɽ','����');
if (selectB=='24')
  { a=24;tempoption=new Option('����','24',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[24]=tempoption;');
cityareacode[23]=new Array('���� ','����ˮ','����','ͭ��','�Ͻ�','��˳','ǭ���� ','ǭ����','ǭ��','����');
cityareaname[23]=new Array('���� ','����ˮ','����','ͭ��','�Ͻ�','��˳','ǭ���� ','ǭ����','ǭ��','����');
if (selectB=='25')
  { a=25;tempoption=new Option('����','25',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[25]=tempoption;');
cityareacode[24]=new Array('����','����','����','��Ϫ','��ͨ','˼é','�ٲ�','��ɽ','����','��ɽ ','��� ','��˫���� ','���� ','���� ','�º� ','ŭ��','����','����');
cityareaname[24]=new Array('����','����','����','��Ϫ','��ͨ','˼é','�ٲ�','��ɽ','����','��ɽ ','��� ','��˫���� ','���� ','���� ','�º� ','ŭ��','����','����');
if (selectB=='26')
  { a=26;tempoption=new Option('����','26',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[26]=tempoption;');
cityareacode[25]=new Array('����','����','����','ɽ��','�տ���','����','��֥','����');
cityareaname[25]=new Array('����','����','����','ɽ��','�տ���','����','��֥','����');
if (selectB=='27')
  { a=27;tempoption=new Option('����','27',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[27]=tempoption;');
cityareacode[26]=new Array('����','ͭ��','����','����','μ��','�Ӱ�','����','����','����','����','����');
cityareaname[26]=new Array('����','ͭ��','����','����','μ��','�Ӱ�','����','����','����','����','����');
if (selectB=='28')
  { a=28;tempoption=new Option('����','28',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[28]=tempoption;');
cityareacode[27]=new Array('����','���','����','��ˮ','������','����','ƽ��','����','¤��','����','��Ҵ','��Ȫ','���� ','����','����');
cityareaname[27]=new Array('����','���','����','��ˮ','������','����','ƽ��','����','¤��','����','��Ҵ','��Ȫ','���� ','����','����');
if (selectB=='29')
  { a=29;tempoption=new Option('�ຣ','29',false,true); }
else
  { tempoption=new Option('�ຣ','�ຣ'); }
eval('document.'+formname+'.'+preB+'.options[29]=tempoption;');
cityareacode[28]=new Array('����','����',' ���� ','����','����','����','����','����','����');
cityareaname[28]=new Array('����','����',' ���� ','����','����','����','����','����','����');
if (selectB=='30')
  { a=30;tempoption=new Option('����','30',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[30]=tempoption;');
cityareacode[29]=new Array('����','ʯ��ɽ','����','��ԭ','����');
cityareaname[29]=new Array('����','ʯ��ɽ','����','��ԭ','����');
if (selectB=='31')
  { a=31;tempoption=new Option('�½�','31',false,true); }
else
  { tempoption=new Option('�½�','�½�'); }
eval('document.'+formname+'.'+preB+'.options[31]=tempoption;');
cityareacode[30]=new Array('��³ľ��','��������','ʯ����','��³��','����','����','������','��ʲ','��������','��������','����','��������','����','����');
cityareaname[30]=new Array('��³ľ��','��������','ʯ����','��³��','����','����','������','��ʲ','��������','��������','����','��������','����','����');
if (selectB=='32')
  { a=32;tempoption=new Option('���','32',false,true); }
else
  { tempoption=new Option('���','���'); }
eval('document.'+formname+'.'+preB+'.options[32]=tempoption;');
cityareacode[31]=new Array('���');
cityareaname[31]=new Array('���');
if (selectB=='33')
  { a=33;tempoption=new Option('����','33',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[33]=tempoption;');
cityareacode[32]=new Array('����');
cityareaname[32]=new Array('����');
if (selectB=='34')
  { a=34;tempoption=new Option('̨��','34',false,true); }
else
  { tempoption=new Option('̨��','̨��'); }
eval('document.'+formname+'.'+preB+'.options[34]=tempoption;');
cityareacode[33]=new Array('̨��');
cityareaname[33]=new Array('̨��');
if (selectB=='35')
  { a=35;tempoption=new Option('����','35',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[35]=tempoption;');
cityareacode[34]=new Array('����');
cityareaname[34]=new Array('����');

if (selectB=='36')
  { a=36;tempoption=new Option('����','36',false,true); }
else
  { tempoption=new Option('����','����'); }
eval('document.'+formname+'.'+preB+'.options[36]=tempoption;');
cityareacode[35]=new Array('����');
cityareaname[35]=new Array('����');

eval('document.'+formname+'.'+preB+'.options[a].selected=true;');

cityid=selectB;
    if (cityid!='0')
      {
        b=0;for (i=0;i<cityareaname[cityid-1].length;i++)
           {
             if (selectS==cityareacode[cityid-1][i])
               {b=i+1;tempoption=new Option(cityareaname[cityid-1][i],cityareacode[cityid-1][i],false,true);}
             else
               tempoption=new Option(cityareaname[cityid-1][i],cityareacode[cityid-1][i]);
            eval('document.'+formname+'.'+preS+'.options[i+1]=tempoption;');
           }
        eval('document.'+formname+'.'+preS+'.options[b].selected=true;');
      }
    }
 function selectcityarea(preB,preS,formname)
   {
     cityid=eval('document.'+formname+'.'+preB+'.selectedIndex;');
     j=eval('document.'+formname+'.'+preS+'.length;');
     for (i=1;i<j;i++)
        {eval('document.'+formname+'.'+preS+'.options[j-i]=null;')}
     if (cityid!="0")
       {
         for (i=0;i<cityareaname[cityid-1].length;i++)
            {
             tempoption=new Option(cityareaname[cityid-1][i],cityareacode[cityid-1][i]);
             eval('document.'+formname+'.'+preS+'.options[i+1]=tempoption;');
            }
       }
    }
