<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use App\Models\CampaignEnquiry;
class CampaignEnquiryExport implements FromCollection,WithHeadings
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
            'restaurant_name',
            'email',
            'mobile',
            'city',
            'created_at'
        ];
    }
    public function collection()
    {
        return CampaignEnquiry::whereBetween('created_at', [date('Y-m-d H:i:s', strtotime($this->starDate)), date('Y-m-d H:i:s', strtotime($this->endDate))])
            ->get();
    }
}
