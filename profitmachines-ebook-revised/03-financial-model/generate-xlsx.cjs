const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'financial-model.csv');
const xlsxPath = path.join(__dirname, 'financial-model.xlsx');

const csvContent = fs.readFileSync(csvPath, 'utf8');
const lines = csvContent.trim().split('\n').map(l => l.split(','));

const headers = lines[0];
const dataRows = lines.slice(1);

let xml = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Color="#000000"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="Header">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#1E293B"/>
   </Borders>
   <Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="10" ss:Color="#FFFFFF" ss:Bold="1"/>
   <Interior ss:Color="#0F172A" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Row">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/>
   </Borders>
   <Font ss:FontName="Calibri" ss:Size="9.5" ss:Color="#1E293B"/>
  </Style>
  <Style ss:ID="Highlight">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/>
   </Borders>
   <Font ss:FontName="Calibri" ss:Size="10" ss:Color="#0F172A" ss:Bold="1"/>
   <Interior ss:Color="#F1F5F9" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Financial Model">
  <Table ss:DefaultRowHeight="20">
   <Column ss:Width="220"/>
   <Column ss:Width="110"/>
   <Column ss:Width="80"/>
   <Column ss:Width="95"/>
   <Column ss:Width="85"/>
   <Column ss:Width="85"/>
   <Column ss:Width="85"/>
   <Column ss:Width="95"/>
   <Column ss:Width="250"/>
   <Row ss:Height="26">
`;

headers.forEach(h => {
  xml += `    <Cell ss:StyleID="Header"><Data ss:Type="String">${h}</Data></Cell>\n`;
});
xml += `   </Row>\n`;

dataRows.forEach(r => {
  const isHighlight = r[0].includes('Total') || r[0].includes('Net') || r[0].includes('NPV') || r[0].includes('IRR') || r[0].includes('ROI');
  const styleId = isHighlight ? 'Highlight' : 'Row';
  xml += `   <Row ss:Height="20">\n`;
  r.forEach(c => {
    xml += `    <Cell ss:StyleID="${styleId}"><Data ss:Type="String">${c.replace(/&/g, '&amp;')}</Data></Cell>\n`;
  });
  xml += `   </Row>\n`;
});

xml += `  </Table>
 </Worksheet>
</Workbook>`;

fs.writeFileSync(xlsxPath, xml, 'utf8');
console.log('Generated Excel Workbook:', xlsxPath);

