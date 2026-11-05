import openpyxl

def main():
    wb = openpyxl.load_workbook(r"D:\profit-vector--main\ProfitMachines_Email_Templates_10_Batches.xlsx")
    print("Sheets count:", len(wb.sheetnames))
    print("Sheets list:", wb.sheetnames)

    total_data_rows = 0
    all_template_numbers = []
    all_urls = []

    for name in wb.sheetnames:
        ws = wb[name]
        rows = list(ws.iter_rows(values_only=True))
        header = rows[0]
        data_rows = rows[1:]
        total_data_rows += len(data_rows)

        print(f"\nTab [{name}]:")
        print(f"  Header: {header}")
        print(f"  Rows count: {len(data_rows)}")
        print(f"  First item: {data_rows[0][1]} | {data_rows[0][2][:35]}... | {data_rows[0][5]}")
        print(f"  Last item:  {data_rows[-1][1]} | {data_rows[-1][2][:35]}... | {data_rows[-1][5]}")

        for r in data_rows:
            all_template_numbers.append(r[1])
            all_urls.append(r[5])

    print(f"\n==========================================")
    print(f"Total data rows across all sheets: {total_data_rows}")
    print(f"Unique template numbers: {len(set(all_template_numbers))}")
    print(f"Unique URLs: {len(set(all_urls))}")
    assert total_data_rows == 85, f"Expected 85 rows, got {total_data_rows}"
    assert len(set(all_template_numbers)) == 85, "Duplicate template numbers found!"
    assert len(set(all_urls)) == 85, "Duplicate URLs found!"
    print("ALL VALIDATION CHECKS PASSED PERFECTLY!")

if __name__ == "__main__":
    main()

