import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import Switch from 'react-switch';
import WithTransfer from './withTransfer';

export const useInput = (
  { name, type },
  labelText,
  defaultValue = null,
  altInput = null
) => {
  const [value, setValue] = useState(defaultValue || '');

  const input = (
    <div className='mt-5'>
      <label className='text-xs text-gray-700 font-bold'>{labelText}</label>
      {altInput ? (
        altInput
      ) : (
        <input
          type={type}
          value={value}
          name={name}
          onChange={e => setValue(e.target.value)}
          className='w-full py-1 px-3 border border-gray-400 text-sm text-gray-800 focus:border-purple-600 rounded'
        />
      )}
    </div>
  );

  return [input, value];
};

const InvoiceForm = ({ handleInvoice, currentInvoice, isEditing }) => {
  const dateDefault = currentInvoice.date
    ? new Date(currentInvoice.date)
    : new Date();

  const [date, setDate] = useState(dateDefault);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTransfer, setSelectedTransfer] = useState(null);
  const [useBankInfo, setUseBankInfo] = useState(
    !!currentInvoice.iban || false
  );
  const [nextDisabled, setNextDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [amountInput, amount] = useInput(
    { type: 'number', name: 'amount' },
    'Amount',
    currentInvoice.amount
  );
  const [subjectInput, subject] = useInput(
    { type: 'text', name: 'subject' },
    'Subject',
    currentInvoice.subject
  );

  const onFormSubmit = e => {
    e.preventDefault();

    if (formValid()) {
      const invoice = {
        date: format(date, 'yyyy-MM-dd'),
        subject,
        amount: useBankInfo ? selectedTransfer.amount : amount,
        iban: selectedTransfer?.iban
      };

      if (isEditing) {
        const updatedInvoice = {
          ...currentInvoice,
          ...invoice
        };
        handleInvoice(updatedInvoice);
      } else {
        const newInvoice = {
          id: Math.round(Math.random() * 200),
          ...invoice
        };

        handleInvoice(newInvoice);
      }
    }
  };

  const formValid = () => {
    return useBankInfo
      ? date && subject && selectedTransfer
      : date && subject && amount;
  };

  const canGoNext = () => {
    return !(date && subject);
  };

  useEffect(() => {
    setButtonDisabled(!formValid());
    setNextDisabled(canGoNext());
  }, [date, subject, amount, useBankInfo, selectedTransfer]);

  return (
    <form className='w-full px-4' onSubmit={onFormSubmit}>
      <div className='scrolling w-full md:w-4/5 mx-auto py-6'>
        {currentStep === 1 ? (
          <>
            <div className='w-full'>
              <label className='text-xs text-gray-700 font-bold'>Date</label>
              <DatePicker date={date} onDateChange={setDate} locale={enGB}>
                {({ inputProps, focused }) => (
                  <input
                    className={
                      'input w-full py-1 px-3 border border-gray-400 text-sm text-gray-800 focus:border-purple-600 rounded' +
                      (focused ? ' -focused' : '')
                    }
                    {...inputProps}
                  />
                )}
              </DatePicker>
            </div>

            <>{subjectInput}</>

            <div className='mt-5'>
              <label htmlFor='' className='text-xs text-gray-700 font-bold'>
                Retrieve from bank account
              </label>
              <br />
              <Switch
                onChange={checked => setUseBankInfo(checked)}
                checked={useBankInfo}
              />
            </div>

            {!useBankInfo && <>{amountInput}</>}
          </>
        ) : (
          <>
            <WithTransfer
              selectTransfer={setSelectedTransfer}
              selectedTransfer={selectedTransfer}
            />
          </>
        )}
      </div>
      <div className='w-full px-4 flex justify-between py-3'>
        {useBankInfo && (
          <div
            className={`${
              currentStep === 1 ? 'justify-end' : 'justify-between'
            } w-full flex`}
          >
            {currentStep === 2 && (
              <button
                className='py-2 flex px-8 text-sm text-white bg-purple-700 shadow font-bold hover:shadow-lg hover:bg-purple-900'
                type='button'
                onClick={e => setCurrentStep(1)}
              >
                Prev
              </button>
            )}
            {currentStep === 1 && (
              <button
                className='py-2 flex px-8 text-sm text-white bg-purple-700 shadow font-bold hover:shadow-lg hover:bg-purple-900'
                type='button'
                onClick={e => setCurrentStep(2)}
                disabled={nextDisabled}
              >
                Next
              </button>
            )}
          </div>
        )}
        {(!useBankInfo || currentStep === 2) && (
          <div className='w-full flex justify-end'>
            <button
              className='py-2 flex px-8 text-sm text-white bg-purple-700 shadow font-bold hover:shadow-lg hover:bg-purple-900'
              disabled={buttonDisabled}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default InvoiceForm;
