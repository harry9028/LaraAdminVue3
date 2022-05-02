<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use App\Models\QuickEnquiry;
class QuickEnquiryExport implements FromCollection,WithHeadings
{
    public function __construct($starDate, $endDate)
    {
        $this->starDate = $starDate;
        $this->endDate = $endDate;
    }
    public function headings(): array
    {
        return [
            'id',
            'name',
            'email',
            'mobile',
            'required_date',
            'comment',
            'trial_date',
            'amount',
            'ref_from',
            'product_name',
            'address',
            'date'
        ];
    }
    public function collection()
    {
         return QuickEnquiry::whereBetween('date', [date('Y-m-d H:i:s', strtotime($this->starDate)), date('Y-m-d H:i:s', strtotime($this->endDate))])
            ->get();
    }
}
