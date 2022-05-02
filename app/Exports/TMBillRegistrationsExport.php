<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use App\Models\TMBILL_Registrations;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TMBillRegistrationsExport implements FromCollection,WithHeadings
{
    public function __construct($is_active, $starDate, $endDate)
    {
        $this->is_active = $is_active;
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
            'address',
            'blockingId',
            'RecoveryId',
            'blockingFlag',
            'ResonForBlocking',
            'UnblockTime',
            'StartDate',
            'EndDate',
            'DemoTime',
            'DemoFreeDays',
            'registration_flag',
            'token',
            'isEdgeAppBlocked',
            'password'
        ];
    }
    public function collection()
    {
        return TMBILL_Registrations::where('isEdgeAppBlocked', $this->is_active)
            ->whereBetween('StartDate', [date('Y-m-d H:i:s', strtotime($this->starDate)), date('Y-m-d H:i:s', strtotime($this->endDate))])
            ->get();
    }
}
