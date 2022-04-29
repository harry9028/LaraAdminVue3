<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\FeedbackTitlesModel;
use App\FeedbackQuestionsModel;
use App\FeedbackOwnerModel;
use App\FeedbackPointsModel;
class FeedbackLegendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        $FeedbackTitle = FeedbackTitlesModel::select('FeedbackId','FeedbackTitleName', 'OwnerMobile')->where('FeedbackShortUrl', $id)
            ->first();
        if($FeedbackTitle){

            $result = $FeedbackTitle;
             $result['questions'] = FeedbackQuestionsModel::select('QuestionId', 'FeedbackId', 'QuestionName', 'IsMandatory', 'OptionFormatId', 'MultiSelectFlag', 'col2')
                ->where('FeedbackId', $FeedbackTitle->FeedbackId)
                ->where('IsActivate', 1)
                ->with(['feedbackpoints' => function($query){
                    $query->leftjoin('Emojji as e', 'FeedbackPoints.EmojiId', 'e.EmojiId');
                    $query->select('FeedbackQuestionId','PointName','e.EmojiId', 'e.EmojiUrl');
                }])
                ->orderBy('id', 'asc')
                ->get();
            return response()->json($result, 200);
        }else{
            return response()->json(array('message'=> 'No data found'),422);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
